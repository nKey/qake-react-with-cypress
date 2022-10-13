export const getLocation = () => {
  const { hostname, pathname } = window.location
  console.log(pathname)
  return { hostname, pathname }
}
