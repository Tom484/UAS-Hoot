// Difference between host and server time
export async function getTimeDifference() {
  try {
    const startTime = new Date()
    let diff
    const response = await fetch("http://worldtimeapi.org/api/timezone/Europe/Prague")
    const data = await response.json()
    const startTimeDiff = new Date().getTime() - startTime
    diff = new Date().getTime() - new Date(data.datetime).getTime() - startTimeDiff
    return diff
  } catch (err) {
    console.log(err)
  }
}
