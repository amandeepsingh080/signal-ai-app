window.onload = function(){

let loggedIn =
localStorage.getItem("loggedIn")

if(loggedIn === "true"){

document.getElementById("loginScreen")
.style.display = "none"

}

}

function loginApp(){

let username =
document.getElementById("username").value.trim()

let quotexid =
document.getElementById("quotexid").value.trim()

if(username === "" || quotexid === ""){

alert("Fill all details")
return

}

if(isNaN(quotexid)){

alert("Quotex ID must be numbers only")
return

}

if(quotexid.length < 6){

alert("Invalid Quotex ID")
return

}

localStorage.setItem("loggedIn","true")

localStorage.setItem("username",username)

localStorage.setItem("quotexid",quotexid)

document.getElementById("loginScreen")
.style.display = "none"

}

let menuOpen = false

function openMenu(){

let sidebar =
document.getElementById("sidebar")

if(menuOpen){

sidebar.style.left = "-280px"

menuOpen = false

}else{

sidebar.style.left = "0"

menuOpen = true

}

}

function generateSignal(){

 document.getElementById("aiLoader")
.style.display = "flex"

let aiStep =
document.getElementById("aiStep")

aiStep.innerHTML =
"Checking RSI..."

setTimeout(()=>{

aiStep.innerHTML =
"Confirming Trend..."

},1000)

setTimeout(()=>{

aiStep.innerHTML =
"Scanning Candles..."

},2000)

setTimeout(()=>{

aiStep.innerHTML =
"Generating AI Signal..."

},3000)

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
confidence + "%"

document.getElementById("progressFill")
.style.width =
confidence + "%"
 
document.getElementById("expiryText")
.innerHTML =
"EXPIRY: 1 Minute"

loading.innerHTML = ""

 setTimeout(()=>{

let results =
["✅ SIGNAL WON","❌ SIGNAL LOST"]

let randomResult =
results[Math.floor(Math.random()*results.length)]

document.getElementById("popupResult")
.innerHTML = randomResult

document.getElementById("resultPopup")
.style.display = "flex"

setTimeout(()=>{

document.getElementById("resultPopup")
.style.display = "none"

},2500)

},60000)

 document.getElementById("aiLoader")
.style.display = "none"

 let toast =
document.getElementById("toast")

toast.classList.add("show")

setTimeout(()=>{

toast.classList.remove("show")

},2500) 

  let history =
document.getElementById("historyList")

history.innerHTML += `
<p>${signal} — ${pair}</p>
`

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

function showTab(tab){

console.log(tab + " opened")

let sidebar =
document.getElementById("sidebar")

if(sidebar){

sidebar.style.left = "-280px"

menuOpen = false

}

}
