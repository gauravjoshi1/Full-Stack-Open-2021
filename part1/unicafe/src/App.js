import React, { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const Statistic = ({text, value}) => (
  <>
    <td>{text}</td>
    <td>{value}</td> 
  </>
)


const Statistics = ({good, neutral, bad}) => {
  let total = good + neutral + bad
  let positive = good/(total) * 100 + " %"
  let average = (good - bad)/total
  
  if (total === 0) {
    return (
      <div>
        <div>No feedback given</div>
      </div>
    )
  } else {
      return (
        <>
          <tr><Statistic text="good" value={good} /> </tr>
          <tr><Statistic text="neutral" value={neutral} /> </tr>
          <tr><Statistic text="bad" value={bad} /></tr>
          <tr><Statistic text="all" value={total} /></tr>
          <tr><Statistic text="average" value={average} /></tr>
          <tr><Statistic text="positive" value={positive} /></tr> 
        </>
      )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const updateGoodFeedBack = () => setGood(good + 1)
  const updateNeutralFeedBack = () => setNeutral(neutral + 1)
  const updateBadFeedBack = () => setBad(bad + 1)
  
  return (
    <div>
      <table>
        <h1>give feedback</h1>
        <Button onClick={updateGoodFeedBack} text="good" />
        <Button onClick={updateNeutralFeedBack} text="neutral" />
        <Button onClick={updateBadFeedBack} text="bad" />
        <h2>statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </table>
    </div>
  )
}

export default App