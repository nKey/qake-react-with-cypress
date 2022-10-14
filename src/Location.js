export const getLocation = () => {
  const { hostname, pathname } = window.location
  console.log({ teste })
  return { hostname, pathname }
}
