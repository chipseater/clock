const timeContainer = document.getElementById('time')
const handContainerSeconds = document.getElementById('hand-container-seconds')
const handContainerMinutes = document.getElementById('hand-container-minutes')
const handContainerHours = document.getElementById('hand-container-hours')

function formatDate(date) {
  const dateObject = new Date(date)
  const seconds = dateObject.getSeconds()
  const minutes = dateObject.getMinutes()
  const hours = dateObject.getHours()
  return `${hours} : ${minutes} : ${seconds}`
}

function getSeconds(date) {
  const dateObject = new Date(date)
  return dateObject.getSeconds()
}

function getMinutes(date) {
  const dateObject = new Date(date)
  return dateObject.getMinutes()
}

function getHours(date) {
  const dateObject = new Date(date)
  return dateObject.getHours()
}

function blitDate() {
  timeContainer.innerHTML = formatDate(Date.now())
  handContainerSeconds.style.rotate = `${getSeconds(Date.now()) * 6}deg`
  handContainerMinutes.style.rotate = `${getMinutes(Date.now()) * 6}deg`
  handContainerHours.style.rotate = `${getHours(Date.now()) * 30}deg`
  setTimeout(blitDate, 1000)
}

blitDate()
