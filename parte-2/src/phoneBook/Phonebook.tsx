import { useEffect, useState } from 'react'
import { changeHandler, submitHandler } from '../utils/handlers'
import Display, { DisplayItem } from './Display'
import { validateRule } from '../utils/helpers'
import { uniqueRule } from '../shared/forms/rules'
import { Person } from '../types'
import WithSearch from './components/withSearch'
import List from './components/List'
import { useResource } from './hooks/useResource'
import Alert from './components/Alert'

const ListWithSearch = WithSearch(List, (person: Person, search: string) => person.name.toLowerCase().includes(search.toLowerCase()))



const Phonebook = () => {
    const [newName, setNewName] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState<{ message: string | null, type: string }>({
        message: null,
        type: 'info'
    })
    const PersonHook = useResource()
    useEffect(() => {
        PersonHook.load()
    }, [])

     
    const launchAlert = (message: string, type: string) => {
        setMessage({ message, type })
        setTimeout(() => {
            setMessage({ message: null, type })
        }, 2000)
    }
    const submitCb = async () => {
        const persons = PersonHook.items
        const { isInvalid, payload} = validateRule(uniqueRule, persons, newName)
        if (isInvalid) {
            const confirm = window.confirm(`${newName} ya existe quiere remplazarlo`)
            if (!confirm) return
            try {
                await PersonHook.update(payload, { name: newName, number: phone })
                return launchAlert(`${newName} actualizado con exito`, 'success')
            } catch (error: unknown) {
                const {message} = error as Error
                launchAlert(message, 'error')
            }
        }
        const newId = persons.length + 1
        try {
            await PersonHook.create({ name: newName, number: phone, id: newId })
            launchAlert(`${newName} agregado con exito`, 'success')
        } catch (error: any) {
            launchAlert(error.message, 'error')
        }
        finally{
            setPhone('')
            setNewName('')
        }
    }
    const deletHandler = async (id: number) => {
        const name = PersonHook.items.find(item => item.id === id)?.name
        const confirm = window.confirm(`Delete ${name} ?`)
        if (!confirm) return
        try {
            await PersonHook.erase(id)
            launchAlert(`${name} eliminado con exito`, 'success')
        } catch (error) {
            launchAlert((error as Error).message, 'error')
        }
    }
    return (
        <>
            <div>
                <Alert message={message.message} type={message.type} />
                <h2>Phonebook</h2>
                <form onSubmit={(e) => submitHandler(e, submitCb)}>
                    <div>
                        name: <input type="text" value={newName} onChange={e => changeHandler(e.target.value, setNewName)} />
                    </div>
                    <div>
                        phone: <input type="text" value={phone} onChange={e => changeHandler(e.target.value, setPhone)} />
                    </div>
                    <div>
                        <button type="submit">add</button>
                    </div>
                </form>
                <h2>Numbers</h2>
                <Display>
                    <ListWithSearch
                        items={PersonHook.items}
                        elementKey={(item: Person) => item.id.toString()}
                        render={(item: Person) => <DisplayItem item={item} onDelete={deletHandler} />}
                    />
                </Display>
            </div>
            <pre>debug: {JSON.stringify(PersonHook.error)}</pre>
        </>
    )
}

export default Phonebook