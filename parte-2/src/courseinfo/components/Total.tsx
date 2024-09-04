import React from 'react'

const Total = ({ total }: { total: number }) => {
    return (
        <>
            <p className='font-bold'>Number of exercises {total}</p>
        </>
    )
}

export default Total
