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
    <img src="" alt="" />
    <h3>heading</h3>
  </>
)

console.log(teamItem, teamItem)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
