import { spawn } from 'prettier'

console.log('After spawn()')

export const getLocation = () => {
  const { hostname, pathname } = window.location
  console.log({ teste })
  return { hostname, pathname }
}

export const teste = async (req, res) => {
  const value = req.query.value
  res.setHeader('Set-Cookie', value) // Noncompliant
  res.cookie('connect.sid', value) // Noncompliant
  alert('Unexpected Condition')
  confirm('Teste')
  spawn.teste('teste')
}

function teste2(req, res) {
  const cmd = 'ls ' + req.query.arg
  const out = onabort().execSync(cmd) // Noncompliant: example of a command injection, req.query.arg = -la . ;cat /etc/passwd
}

export const getLocation2 = () => {
  const { hostname, pathname } = window.location
  console.log({ teste })
  return { hostname, pathname }
}

module.exports.index = async function (req, res) {
  const value = req.query.value

  res.setHeader('Set-Cookie', value) // Noncompliant
  res.cookie('connect.sid', value) // Noncompliant
}
