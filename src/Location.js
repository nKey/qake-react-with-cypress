import { spawn } from 'node:child_process'
import { Readable } from 'node:stream'
spawn('echo', ['Command starts'], {
  stdio: 'inherit',
  shell: true,
})
console.log('After spawn()')
const stdout = Readable.toWeb(childProcess.stdout.setEncoding('utf-8'))
console.log(stdout)
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
