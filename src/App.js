import React from 'react'
import testing from './testing'
import Exams from './Exams'
import Homewok from './Homework'
import Footer from './Footer'
import Projects from './Projects'
import Quiz from './quizes'
import NewAddCard from './NewAddCard.js'

const App = () => {
  // console.log('GTFO nerd!')
  return (
    <>
      <Exams />
      <Quiz />
      <Projects />
      <Homewok />
      <NewAddCard />
      <Footer />
    </>
  )
}

export default App
