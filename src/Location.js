import { spawn } from 'prettier'

console.log('After spawn()')

export const getLocation = () => {
  const { hostname, pathname } = window.location
  console.log({ teste })
  return { hostname, pathname }
}

export const teste = async (req, res) => {
  const value = req?.query?.value
  res.setHeader('Set-Cookie', value) // Noncompliant
  res.cookie('connect.sid', value) // Noncompliant
  alert('Unexpected Condition')
  confirm('Teste')
  spawn.teste('teste')
}

function teste2(req, res) {
  console.log(res)
  const cmd = 'ls ' + req?.query?.arg
  const out = onabort().execSync(cmd) // Noncompliant: example of a command injection, req.query.arg = -la . ;cat /etc/passwd
  console.log(out)
}

export const getLocation2 = () => {
  const { hostname, pathname } = window.location
  console.log({ teste })
  teste2(null, null)
  testeX(null, null)
  return { hostname, pathname }
}

async function testeX(req, res) {
  const value = req?.query?.value

  res?.setHeader('Set-Cookie', value) // Noncompliant
  res?.cookie('connect.sid', value) // Noncompliant
}
