import React from 'react'
import ReactDOM from 'react-dom'

// CSC imports
import './css/index.css'
import './css/searchBar.css'
import './css/reviews.css'
import './css/newaddcard.css'

// Main APP import
import App from './App'

// Redux imports
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
// react router dom imports
import { BrowserRouter as Router } from 'react-router-dom'

// import reducers
import reducers from './reducers'
// create the application store, which will hold the state of the application data
const store = createStore(reducers, compose(applyMiddleware(thunk)))

// We render the application to the DOM
// We wrap the application in a Provider component, which allows us
// to access the store from any component.
// We pass the store as a prop to the provider.
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
