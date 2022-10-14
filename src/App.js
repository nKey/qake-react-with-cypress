import React from 'react'
import logo from './logo.svg'
import './App.css'
import { getLocation } from './Location'

function App() {
  const { hostname, pathname } = getLocation()
  console.log('A')
  console.log('B')
  console.log('C')
  const teste = {
    login: 'douglas',
    password: 'teste.js',
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
