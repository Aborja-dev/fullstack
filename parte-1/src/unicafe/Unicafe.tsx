import React from 'react'
import Button from '../shared/Button'
import Statistics from './components/Statistics'

const Uniceafe = () => {
  const [good, setGood] = React.useState(0)
  const [neutral, setNeutral] = React.useState(0)
  const [bad, setBad] = React.useState(0)
  const [total, setTotal] = React.useState(10)
  return (
    <div>
      <h1 className='text-5xl font-bold'>Unicafe</h1>
      <h2 className='text-3xl my-4 font-bold'>Danos feedback</h2>
      <div className='flex gap-4 my-4'>
        <Button>Bueno</Button>
        <Button>Regular</Button>
        <Button>Malo</Button>
      </div>
      <h2 className='text-3xl my-4 font-bold'>Estadisticas</h2>
      {
        total === 0 
        ? <p>No hay feedback</p> 
        : <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={good + neutral + bad}
        average={(good - bad) / 3}
      />
      }
    </div>
  )
}

export default Uniceafe
