import { useState } from 'react'
import Button from '../shared/Button'
import MostVoted from './MostVoted'

const Anecdotes = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
    const randomChoice = () =>  Math.floor(Math.random() * anecdotes.length)
    const voteHandler = () => {
        const copy = [...points]
        copy[selected] += 1
        setPoints(copy)
    }
    return (
        <div>
            <div className='flex gap-4'>
            <Button onClick={() => setSelected(randomChoice())} > Random Anecdote </Button>
            <Button onClick={() => voteHandler()} > Vota </Button>
            </div>
            <p>{anecdotes[selected]}</p>
            <p>Tiene: {points[selected]} votos</p>
            <h2 className='text-3xl my-4 font-bold'>Anecdota más votada</h2>
            <MostVoted anecdotes={anecdotes} votes={points}/>
        </div>
    )
}

export default Anecdotes