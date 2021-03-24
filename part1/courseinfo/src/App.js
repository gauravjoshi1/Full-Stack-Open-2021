import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
  const courseMaterial = {
    "course": "Half Stack application development",
    "parts": [
      "Fundamentals of React",
      "Using props to pass data",
      "State of a component"
    ],

    "exercises": [
      10,
      7,
      14
    ]
  }


  return (
    <div>
      <Header course={courseMaterial.course} />
      <Content part={courseMaterial.parts} exercise={courseMaterial.exercises} />
      <Total exercise={courseMaterial.exercises[0] + courseMaterial.exercises[1] + courseMaterial.exercises[2]}/>
    </div>
  )
}

export default App