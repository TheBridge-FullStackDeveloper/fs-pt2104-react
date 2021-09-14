import React from 'react'
import ReactDOM from 'react-dom'
import Clock from './components/Clock';
import Crono from './components/Crono'

ReactDOM.render(
  <React.StrictMode>
    <Clock />
    <Crono />
  </React.StrictMode>,
  document.getElementById('root')
)
