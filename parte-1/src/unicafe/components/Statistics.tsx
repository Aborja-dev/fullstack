import React, { useEffect } from 'react'
import StatisticLine from './StatisticLine'
interface Statictics {
  good: number
  neutral: number
  bad: number
  total: number
  average: number
}
const Statistics: React.FC<Statictics> = ({ good, neutral, bad, total, average }) => {
  const [porcentaje, setPorcentaje] = React.useState(0)
  const caluculatePorcentaje = () => {
    setPorcentaje((good * 100) / total)
  }
  useEffect(() => {
    caluculatePorcentaje()
  }, [good])
  return (
    <div className='flex flex-col items-start gap-5'>
      <table>
        <th>
          <td></td>
          <td></td>
        </th>
      </table>
      <tbody>
        <StatisticLine label='Bueno' value={good} />
        <StatisticLine label='Regular' value={neutral} />
        <StatisticLine label='Malo' value={bad} />
        <StatisticLine label='Total' value={total} />
        <StatisticLine label='Promedio' value={Number(average.toFixed(2))} />
        <StatisticLine label='Porcentaje de votos buenos' value={Number(porcentaje.toFixed(2)) + ' %' } />
      </tbody>
    </div>
  )
}

export default Statistics
