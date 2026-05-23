function generateSignal(){

if(navigator.vibrate){

navigator.vibrate(200)

}

let pair =
document.getElementById("pairSelect").value

let loading =
document.getElementById("loadingText")

loading.innerHTML =
"🤖 Analyzing Market..."

document.getElementById("signalText")
.innerHTML = "⌛ WAIT..."

document.getElementById("pairText")
.innerHTML = ""

document.getElementById("confidenceText")
.innerHTML = ""

document.getElementById("expiryText")
.innerHTML = ""

setTimeout(() => {

loading.innerHTML =
"📊 Checking RSI..."

},1000)

setTimeout(() => {

loading.innerHTML =
"📈 Confirming Trend..."

},2000)

setTimeout(() => {

loading.innerHTML =
"🚀 Generating Signal..."

},3000)

setTimeout(() => {

let signals =
["🟢 CALL","🔴 PUT"]

let signal =
signals[Math.floor(Math.random()*signals.length)]

let confidence =
Math.floor(Math.random()*15)+80

document.getElementById("signalText")
.innerHTML = signal

document.getElementById("pairText")
.innerHTML =
"PAIR: " + pair

document.getElementById("confidenceText")
.innerHTML =
"CONFIDENCE: " + confidence + "%"

document.getElementById("expiryText")
.innerHTML =
"EXPIRY: 1 Minute"

loading.innerHTML = ""

  let timeLeft = 60

document.getElementById("timerText")
.innerHTML =
"NEXT SIGNAL IN: 60s"

let countdown = setInterval(() => {

timeLeft--

document.getElementById("timerText")
.innerHTML =
"NEXT SIGNAL IN: " + timeLeft + "s"

if(timeLeft <= 0){

clearInterval(countdown)

document.getElementById("timerText")
.innerHTML =
"READY FOR NEXT SIGNAL 🚀"

}

},1000)

  document.querySelector(".signal-box")
.style.transform = "scale(1.05)"

setTimeout(() => {

document.querySelector(".signal-box")
.style.transform = "scale(1)"

},300)

},4000)

}
