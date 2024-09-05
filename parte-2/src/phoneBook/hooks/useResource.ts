import { useMemo, useState } from "react"
import { StateManager } from "../service/stateActions"
import { FetchRequest } from "../../utils/request"

export const useResource = <T>({baseUrl, resourceUrl}: {baseUrl: string, resourceUrl: string}) => {
    const [list, setList] = useState<T[]>([])
    const State = useMemo(
        () => new StateManager<T>([]),
        []
    )
    const Request = useMemo(
        () => new FetchRequest(baseUrl),
        []
    )
    const load = async () => {
        const data = await Request.get().fetch<T[]>(resourceUrl)
        if (data instanceof Error) {
            throw new Error(data.message)
        }
        State.load(data)
        setList(data)
    }
    const create = async (data: T) => {
        const newItem = await Request.post(data).fetch<T>(resourceUrl)
        if (newItem instanceof Error) {
            throw new Error(newItem.message)
        }
        setList(State.add(newItem))
    }
    const erase = async (id: number) => {
        await Request.delete().fetch(`${resourceUrl}/${id}`)
        const newList = State.remove(id)
        setList(newList)
    }
    const update = async (id: number, updateData: Partial<T>) => {
        const item = State.find(id)
        await Request.patch(updateData).fetch(`${resourceUrl}/${id}`)
        if (item instanceof Error) {
            throw new Error(item.message)
        }
        const itemUpdate = {...item, ...updateData}
        const newList = State.update(id, itemUpdate) as T[]
        setList(newList)
    }
    return {
        erase,
        update,
        create,
        load,
        items: list,
     }
}

