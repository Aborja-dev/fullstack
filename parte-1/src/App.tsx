import { useState } from 'react'
import './App.css'
import CourseInfo from './courseinfo/CourseInfo'
import Uniceafe from './unicafe/Unicafe'
import Anecdotes from './anecdotes/Anecdotes'

function App() {
  const [exercise, setExercise] = useState(2)

  return (
    <>
      <h1>
        Fullstack Exercises
      </h1>
      <div className="flex gap-4">
        <button onClick={() => setExercise(0)}>CourseInfo</button>
        <button onClick={() => setExercise(1)}>Unicafe</button>
        <button onClick={() => setExercise(2)}>Anecdotes</button>
      </div>
      <div className='container'>
        {exercise === 0 && <CourseInfo />}
        {exercise === 1 && <Uniceafe /> }
        {exercise === 2 && <Anecdotes />}
      </div>
    </>
  )
}

export default App
