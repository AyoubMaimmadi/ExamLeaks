import React from 'react'
import Exams from './Exams'
import Homewok from './Homework'
import Footer from './Footer'
import Projects from './Projects'
import Quiz from './quizes'

const App = () => {
  console.log('GTFO nerd!')
  return (
    <>
      <Exams />
      <Quiz />
      <Projects />
      <Homewok />
      <Footer />
    </>
  )
}

export default App

// <Router>
//   <Switch>
//     <Route path="/Home">
//       <Exams />
//     </Route>
//     <Route path="/Quiz">
//       <Quiz />
//     </Route>
//     <Route path="/Homewok">
//       <Homewok />
//     </Route>
//     <Route path="/Projects">
//       <Projects />
//     </Route>
//   </Switch>
// </Router>
