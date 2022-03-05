import React from 'react'
import Exams from './Exams'
import Homewok from './Homework'
import Footer from './Components/Footer'
import Projects from './Projects'
import Quiz from './Quizes'
import NewAddCard from './NewAddCard.js'
import Rviews from './Reviews'

// Organize all components here in a simple way

const App = () => {
  return (
    <>
      <Exams />
      <Quiz />
      <Projects />
      <Homewok />
      <NewAddCard />
      <Rviews />
      <Footer />
    </>
  )
}

export default App
