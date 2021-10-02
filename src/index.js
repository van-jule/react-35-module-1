<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const myBtn = React.createElement('button', { type: 'button' }, 'load more')
// console.log("myBtn", myBtn);

// ReactDOM.render(myBtn, App);

// const newBtn = `<button type = 'button'>Load more</button>`;

let value = 'load more'
const newBtn = <button type="button">{value}</button>
// console.log("newBtn", newBtn);

const teamItem = (
  <>
    {' '}
=======
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// создам элемент кнопки
const myBtn = React.createElement('button', { type: 'button' }, 'load more')
// console.log(myBtn)
// // ReactDOM.render(myBtn, App)
// const newBtn = `<button type="button">load more</button>`
let value = 'click'
const newBtn = <button type="button">{value}</button>
// console.log(newBtn)

const teamItem = (
  <>
>>>>>>> 6522d3e40c37758aa8be6221a82d790fd747421f
    <img src="" alt="" />
    <h3>heading</h3>
  </>
)
<<<<<<< HEAD

console.log(teamItem, teamItem)
=======
console.log(teamItem)
>>>>>>> 6522d3e40c37758aa8be6221a82d790fd747421f

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
