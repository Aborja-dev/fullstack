import { useState } from 'react'
import CourseInfo from './courseinfo/CourseInfo'
import Button from './shared/Button'
import Phonebook from './phoneBook/Phonebook'
import Country from './coutries/Country'

function App() {
  const [exercise, setExercise] = useState(2)

  return (
    <>
      <h1 className='text-3xl'>
        Fullstack Exercises
      </h1>
      <div className="flex gap-4">
        <Button onClick={() => setExercise(0)}>CourseInfo</Button>
        <Button onClick={() => setExercise(1)}>Phonebook</Button>
        <Button onClick={() => setExercise(2)}>Country App</Button>
      </div>
      <div className='container'>
        {exercise === 0 && <CourseInfo />}
        {exercise === 1 && <Phonebook />}
        {exercise === 2 && <Country />}
      </div>
    </>
  )
}

export default App
