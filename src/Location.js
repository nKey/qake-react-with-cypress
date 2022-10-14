export const getLocation = () => {
  const { hostname, pathname } = window.location
  console.log('A')
  console.log('B')
  console.log({ teste })
  return { hostname, pathname }
}

export const teste = async (req, res) => {
  const value = req.query.value
  res.setHeader('Set-Cookie', value) // Noncompliant
  res.cookie('connect.sid', value) // Noncompliant
}
