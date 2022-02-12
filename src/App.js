import React from 'react'
import Exams from './Exams'
import Homewok from './Homework'
import Footer from './Footer'
import Projects from './Projects'
import exam from './data'

const App = () => {
  console.log(exam[1].title)
  return (
    <>
      <Exams />
      <Projects />
      <Homewok />
      <Footer />
    </>
  )
}

export default App
