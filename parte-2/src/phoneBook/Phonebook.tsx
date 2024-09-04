import { useEffect, useState } from 'react'
import { changeHandler, submitHandler } from '../utils/handlers'
import Display, { DisplayItem } from './Display'
import { validateRule } from '../utils/helpers'
import { uniqueRule } from '../shared/forms/rules'
import { Person } from '../types'
import WithSearch from './components/withSearch'
import List from './components/List'
import { useResource } from './hooks/useResource'

const ListWithSearch = WithSearch(List, (person: Person, search: string) => person.name.toLowerCase().includes(search.toLowerCase()))

const Phonebook = () => {
    const [newName, setNewName] = useState('')
    const [phone, setPhone] = useState('')
    const PersonHook = useResource()
    useEffect(() => {
        PersonHook.load()
    }, [])

    const submitCb = async () => {
        const persons = PersonHook.items
        const { isInvalid, payload} = validateRule(uniqueRule, persons, newName)
        if (isInvalid) {
            const confirm = window.confirm(`${newName} ya existe quiere remplazarlo`)
            if (!confirm) return
            return await PersonHook.update(payload, { name: newName, number: phone })
        }
        const newId = persons.length + 1
        await PersonHook.create({ name: newName, number: phone, id: newId })
        setNewName('')
        setPhone('')
    }
    const deletHandler = async (id: number) => {
        const confirm = window.confirm(`Delete ${PersonHook.items.find(item => item.id === id)?.name} ?`)
        if (!confirm) return
        await PersonHook.erase(id)
    }
    return (
        <>
            <div>
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
            <pre>debug: {JSON.stringify(newName)}</pre>
        </>
    )
}

export default Phonebook