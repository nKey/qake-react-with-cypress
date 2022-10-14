export const getLocation = () => {
  const { hostname, pathname } = window.location
  console.log('A')
  console.log('B')
  console.log('C')
  return { hostname, pathname }
}
