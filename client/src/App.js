import React, { useEffect } from 'react'
import Exams from './Exams'
import Homewok from './Homework'
import Footer from './Components/Footer'
import Projects from './Projects'
import Quiz from './Quizes'
import NewAddCard from './NewAddCard.js'
import Rviews from './Reviews'
import ErrorPage from './Components/ErrorPage'
import Syllabus from './Syllabus'
import HomePage from './Components/HomePage'
import Auth from './Components/Auth'
import SignIN from './Components/SignIN'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <>
      <Router>
        <div className="format">
          <Link to="/auth">
            <button className="btn3">Sign in</button>
          </Link>
          {/* <Link to="/something" target="_blank">
            <button className="btn2">AM</button>
          </Link> */}
        </div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/exams">
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
          <Route exact path="/syllabus">
            <Syllabus />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/sign-in">
            <SignIN />
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
