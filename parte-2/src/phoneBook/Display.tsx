import React from 'react'
import { Person } from '../types'
export interface DisplayProps {
   children?: React.ReactNode
   noItemComponent?: JSX.Element
}
export const Display: React.FC<DisplayProps> = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}

export const DisplayItem = ({ item, onDelete }: { item: Person, onDelete: (id: number) => void }) => {
    return (
        <div className='flex justify-between'>
            <p>{item.name} {item.number}</p>
            <button onClick={() => onDelete(item.id)}>delete</button>
        </div>
    )
}

export default Display
