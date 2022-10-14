import React from 'react'
import logo from './logo.svg'
import './App.css'
import { getLocation } from './Location'
import process from 'process'

function App() {
  const { hostname, pathname } = getLocation()
  const teste = {
    login: 'douglas',
    password: process.env.AWS_SECRET,
  }
  console.log(teste)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p data-cy="location">
          {hostname} {pathname}{' '}
        </p>
      </header>
    </div>
  )
}

export default App
