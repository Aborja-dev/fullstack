import { Person } from "../../types"

export const baseUrl = 'http://localhost:5000'

export const fetchDelete = async (id: number): Promise<void | Error> => {
    const { status } = await fetch(`${baseUrl}/persons/${id}`, { method: 'DELETE' })
    if (status !== 200) {
        return new Error('Error deleting person')
    }
}
export const fetchAdd = async (person: Person): Promise<Person | Error> => {
    const response = await fetch(`${baseUrl}/persons`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(person),
    })
    
    if (response.status !== 201) {
        return new Error('Error adding person')

    } else {
        return await response.json()
    }
}

export const fetchLoad = async (): Promise<Person[]> => {
    const response = await fetch(`${baseUrl}/persons`)
    const data = await response.json()
    return data
}

export const fetchUpdate = async (person: Person): Promise<void | Error> => {
    const response = await fetch(`${baseUrl}/persons/${person.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(person),
    })
    if (response.status !== 200) {
        return new Error('Error updating person')
    } else {
        return 
    }
}
