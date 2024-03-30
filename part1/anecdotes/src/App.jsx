import { useState } from 'react'

const Botton = (props) => {
  return (
    <>
      <button onClick={props.handleBotton}>
        {props.text}
      </button>
    </>
  )
}

const BottonVotes = (props) => {
  return (
    <>
      <button onClick={props.handleVoteBottom}>
        {props.text}
      </button>
    </>
  )
}

const App = () => {
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

  const zeroArray = Array(anecdotes.length).fill(0)

  const [votes, setVotes] = useState(zeroArray)

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const maxVotesIndex = votes.indexOf(Math.max(...votes))
  const maxVotes = Math.max(...votes)

  return (
    <div>

      <h1>Anecdotes of the day</h1>
      {anecdotes[selected]}
      <p></p>
      <p>has {votes[selected]} votes</p>
      <p></p>
      <BottonVotes text="vote" handleVoteBottom={handleVote} />
      <Botton handleBotton={() => setSelected(Math.floor(Math.random() * (anecdotes.length)))} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      {anecdotes[maxVotesIndex]}
      <p>has {maxVotes} votes</p>


    </div>
  )
}

export default App