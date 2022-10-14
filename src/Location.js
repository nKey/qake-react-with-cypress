import { spawn } from 'prettier'

console.log('After spawn()')

export const getLocation = () => {
  const { hostname, pathname } = window.location
  console.log({ teste })
  return { hostname, pathname }
}

export const getLocation5 = () => {
  const { hostname, pathname } = window.location
  console.log({ teste })
  return { hostname, pathname }
}
export const getLocation6 = () => {
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

export const getLocation3 = () => {
  const { hostname, pathname } = window.location
  console.log({ teste })
  return { hostname, pathname }
}

export const getLocation4 = () => {
  const { hostname, pathname } = window.location
  console.log({ teste })
  return { hostname, pathname }
}

function teste555(req, res) {
  console.log(res)
  const cmd = 'ls ' + req.query.arg
  console.log(cmd)
  // const client = new Client({
  //   host: process?.env?.NODE_ENV,
  //   port: 5334,
  //   user: 'database-user',
  //   password: 'secretpassword!!',
  // })
  // console.log(client)
  // client.connect((err) => {
  //   if (err) {
  //     console.error('connection error', err.stack)
  //   } else {
  //     console.log('connected')
  //   }
  // })
  // const out = process?.execSync(cmd) // Noncompliant: example of a command injection, req.query.arg = -la . ;cat /etc/passwd
  // console.log(out)

  return ''
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
  teste555(null, null)
  return { hostname, pathname }
}

async function testeX(req, res) {
  const value = req?.query?.value

  res?.setHeader('Set-Cookie', value) // Noncompliant
  res?.cookie('connect.sid', value) // Noncompliant
}
