const hourHand = document.querySelector('.hour')
const minuteHand = document.querySelector('.minute')
const secondHand = document.querySelector('.seconds')
const h1 = document.querySelector('h1')

function setTime (){
let time = new Date()
let hour = time.getHours()
let minute = time.getMinutes()
let seconds = time.getSeconds()

let twoHour = hour.toString().padStart(2, "0");
let twoMinute = minute.toString().padStart(2, "0")
let twoSeconds = seconds.toString().padStart(2, "0")

h1.textContent = `${twoHour} : ${twoMinute} : ${twoSeconds} `

//take 12hrs to rotate 360deg ===> 360/12 and 60min/30deg every minute pass the hour hand move
let hourHandRotate = (30 * hour) + (0.5 * minute)
// take 60min to rotate 360deg ===> 360/60
let minuteHandRotate = (6 * minute)
// takes 60sec to rotate 360deg ===> 360/60
let secondHandRotate =( 6 * seconds) 

hourHand.style.transform = `translate(-50%, -100%) rotate(${hourHandRotate}deg)`
minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteHandRotate}deg)`
secondHand.style.transform = `translate(-50%, -100%) rotate(${secondHandRotate}deg)`

}

setTime()
setInterval(setTime, 1000)