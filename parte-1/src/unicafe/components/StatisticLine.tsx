import React from 'react'

const StatisticLine = ({label, value}: {label: string, value: number}) => {
  return (
    <tr>
      <td className='text-left p-2'>{label}</td>
      <td className='p-2'>{value}</td>
    </tr>
  )
}

export default StatisticLine
