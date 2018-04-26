import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider }  from 'react-redux'
import { createStore } from 'redux'
//ToDo real redusers
// import { mainReducer } from './reducers' 

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

/* fake data */
import baseReducer from './reducers/CalculatorReducer';
import logo from './logo.svg' //drop this govno import


import Calculator from './classes/Caclulator'


const calc = new Calculator({
    total_sum: 1000,
    first_deposit: 300000,
    term: 12,
    termUnit: 'month',
    percent: 20,
    percentUnit: 'month'
})

console.log(calc.calcDifferential())

console.log(calc. calcAnnuity ())


let store = createStore(
    baseReducer ,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


render(
    <Provider store = {store} >
       <App logo = {logo} />
    </Provider>,
    document.getElementById('root'));
    
registerServiceWorker();