export const getLocation = () => {
  const { hostname, pathname } = window.location
  return { hostname, pathname }
}