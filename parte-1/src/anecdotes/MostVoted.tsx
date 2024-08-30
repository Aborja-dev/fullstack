import React, { useEffect, useState } from 'react'

const MostVoted = ({anecdotes, votes}: {anecdotes: string[], votes: number[]}) => {
    const [mostVoted, setMostVoted] = useState('')
    useEffect(() => {
        calculateMostVoted()
    }, [votes])
    const calculateMostVoted = () => {
        const max = Math.max(...votes)
        const selected = votes.findIndex((vote) => vote === max)
        setMostVoted(anecdotes[selected])
    }
  return (
    <div>
      <p>{mostVoted}</p>
    </div>
  )
}

export default MostVoted
