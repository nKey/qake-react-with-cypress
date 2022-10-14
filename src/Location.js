export const getLocation = () => {
  const { hostname, pathname } = window.location
  console.log({ teste })
  return { hostname, pathname }
}

export const teste = async (req, res) => {
  const value = req.query.value
  res.setHeader('Set-Cookie', value) // Noncompliant
  res.cookie('connect.sid', value) // Noncompliant
}

export const getLocation2 = () => {
  const { hostname, pathname } = window.location
  console.log({ teste })
  return { hostname, pathname }
}
