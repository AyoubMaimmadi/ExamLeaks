import React from 'react'
import Exams from './Exams'
import Homewok from './Homework'
import Footer from './Components/Footer'
import Projects from './Projects'
import Quiz from './Quizes'
import NewAddCard from './NewAddCard.js'
import Rviews from './Reviews'
import ErrorPage from './Components/ErrorPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Organize all components here in a simple way

const URL = process.env.REAC_APP_API_KEY
console.log('my api key is: ', URL)

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Exams />
          </Route>
          <Route exact path="/quiz">
            <Quiz />
          </Route>
          <Route exact path="/project">
            <Projects />
          </Route>
          <Route exact path="/homework">
            <Homewok />
          </Route>
          <Route exact path="/edit">
            <NewAddCard />
          </Route>
          <Route exact path="/reviews">
            <Rviews />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default App
