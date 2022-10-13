export const getLocation = () => {
  const { hostname, pathname } = window.location
  console.log('Teste')
  return { hostname, pathname }
}
