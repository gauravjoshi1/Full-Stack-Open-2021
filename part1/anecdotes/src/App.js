import React, { useState } from 'react'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  let [votes, setVotes] = useState([])
  
  let voteArray = new Array(anecdotes.length).fill(0)
  let maxValue = 0
  let index = indexOfMaxVal(votes)
  
  const updateVotes = (selected) => {
    if (votes.length === 0) {
      votes = [...voteArray]
    } else {
      voteArray = [...votes]
    }

    voteArray[selected] += 1

    console.log(votes)
    setVotes([...voteArray])

  }

  const updateSelected = () => {
    let newValue = getRandomInt(0, 5)
    setSelected(newValue)
  }

  function indexOfMaxVal(arr) {
    if (arr.length === 0) {
      return maxValue
    }

    let maxVal = arr[0]
    let maxIndex = 0
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxVal) {
        maxIndex = i
        maxVal = arr[i]
      }
    }

    maxValue = maxVal
    return maxIndex
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {anecdotes[selected]} 
        <br></br>
        has {votes[selected]} votes
      </p>
      <Button handleClick={() => updateVotes(selected)} text="vote"/>
      <Button handleClick={updateSelected} text="Generate Random Quote"/>
      <h2>Anecdote with most votes</h2>
      <p>
        {anecdotes[index]} has {maxValue} votes
      </p>
    </div>
  )
}

export default App