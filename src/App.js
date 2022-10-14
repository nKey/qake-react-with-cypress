import React from 'react'
import logo from './logo.svg'
import './App.css'
import { getLocation } from './Location'

function App() {
  const { hostname, pathname } = getLocation()
  console.log('A')
  console.log('B')
  const teste = {
    login: 'douglas',
    password: 'teste.js',
  }
  var db = window.openDatabase(
    'myDb',
    '1.0',
    'Personal secrets stored here',
    2 * 1024 * 1024,
  ) // Noncompliant
  if (db === false) {
    alert('Unexpected Condition')
  }
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
