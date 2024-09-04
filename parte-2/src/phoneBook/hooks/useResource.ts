import { Person } from './../../types';
import { useMemo, useState } from "react"
import { StateManager } from "../service/stateActions"
import { fetchAdd, fetchDelete, fetchLoad, fetchUpdate } from "../service/api_request"

export const useResource = () => {
    const [list, setList] = useState<Person[]>([])
    const [error, setError] = useState<string | null>('')
    const State = useMemo(
        () => new StateManager<Person>([]),
        []
    )
    const load = async () => {
        const data = await fetchLoad()
        State.load(data)
        setList(data)
    }
    const create = async (data: Person) => {
        const newItem = await fetchAdd(data as Person)
        console.log('newItem', newItem);
        
        if (newItem instanceof Error) {
            throw new Error(newItem.message)
        }
        const newList = State.add(newItem)
        setList(newList)
    }
    const erase = async (id: number) => {
        await fetchDelete(id)
        const newList = State.remove(id)
        setList(newList)
    }
    const update = async (id, updateData) => {
        const item = State.find(id)
        await fetchUpdate({
            id,
            ...updateData
        })
        const itemUpdate = {...item, ...updateData}
        const newList = State.update(id, itemUpdate) as Person[]
        setList(newList)
    }
    return {
        erase,
        error,
        update,
        create,
        load,
        items: list,
     }
}