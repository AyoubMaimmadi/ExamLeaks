import React, { useEffect, useState } from 'react'
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
import Email from './Components/Email'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className="format">
      <Link to="/auth">
        <button className="btn3">Settings</button>
      </Link>
    </div>
  )
}

const App = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const [username, setUsername] = useState('JD')

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <SignIn />
            <HomePage />
          </Route>
          <Route exact path="/exams">
            <SignIn />
            <Exams />
          </Route>
          <Route exact path="/quiz">
            <SignIn />
            <Quiz />
          </Route>
          <Route exact path="/project">
            <SignIn />
            <Projects />
          </Route>
          <Route exact path="/homework">
            <SignIn />
            <Homewok />
          </Route>
          <Route exact path="/edit">
            <SignIn />
            <NewAddCard />
          </Route>
          <Route exact path="/reviews">
            <Rviews />
          </Route>
          <Route exact path="/syllabus">
            <SignIn />
            <Syllabus />
          </Route>
          <Route exact path="/auth">
            <SignIn />
            <Auth />
          </Route>
          <Route exact path="/sign-in">
            <SignIn />
            <SignIN />
          </Route>
          <Route exact path="/reach-us">
            <SignIn />
            <Email />
          </Route>
          </Route>
          <Route exact path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default App
