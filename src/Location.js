export const getLocation = () => {
  const { hostname, pathname } = window.location
  console.log('TESTE')
  console.log('TESTE')
  return { hostname, pathname }
}
