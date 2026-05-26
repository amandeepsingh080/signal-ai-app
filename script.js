window.onload = function(){

console.log("APP STARTED")

let loggedIn =
localStorage.getItem("loggedIn")

if(loggedIn === "true"){

document.getElementById("loginScreen")
.style.display = "none"

document.getElementById("mainApp")
.style.display = "block"

let savedName =
localStorage.getItem("username")

let savedId =
localStorage.getItem("quotexid")

if(document.getElementById("profileName")){

document.getElementById("profileName")
.innerHTML = savedName

}

if(document.getElementById("profileId")){

document.getElementById("profileId")
.innerHTML = savedId

}

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

alert("Quotex ID numbers only")
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

document.getElementById("mainApp")
.style.display = "block"

if(document.getElementById("profileName")){

document.getElementById("profileName")
.innerHTML = username

}

if(document.getElementById("profileId")){

document.getElementById("profileId")
.innerHTML = quotexid

}

}

/* MENU */

let menuOpen = false

function openMenu(){

let sidebar =
document.getElementById("sidebar")

if(menuOpen){

sidebar.style.left = "-260px"

menuOpen = false

}else{

sidebar.style.left = "0"

menuOpen = true

}

}

/* SIGNAL ENGINE */

function generateSignal(){

document.getElementById("loadingBox")
.style.display = "flex"

document.querySelector(".signal-box")
.style.display = "none"

setTimeout(() => {

/* PAIR */

let pair =
document.getElementById("pairSelect").value

/* TREND ENGINE */

let trend =
localStorage.getItem("marketTrend")

if(!trend){

trend = "CALL"

}

/* TREND CHANGE */

let trendChance =
Math.floor(Math.random()*100)

if(trendChance > 75){

trend =
trend === "CALL"
? "PUT"
: "CALL"

}

/* SAVE TREND */

localStorage.setItem(
"marketTrend",
trend
)

/* SIGNAL */

let signal = ""

if(trend === "CALL"){

signal = "🟢 CALL"

}else{

signal = "🔴 PUT"

}

/* CONFIDENCE */

let confidence = 0

if(signal === "🟢 CALL"){

confidence =
Math.floor(Math.random()*8)+88

}else{

confidence =
Math.floor(Math.random()*8)+84

}

/* UI */

document.getElementById("signalText")
.innerHTML = signal

document.getElementById("confidenceText")
.innerHTML =
"Confidence: " + confidence + "%"

document.getElementById("expiryText")
.innerHTML =
"Expiry: 1 Minute"

if(document.getElementById("pairText")){

document.getElementById("pairText")
.innerHTML = pair

}

/* HISTORY */

if(document.getElementById("historyList")){

document.getElementById("historyList")
.innerHTML += `
<p>${pair} → ${signal}</p>
`

}

/* HIDE LOADER */

document.getElementById("loadingBox")
.style.display = "none"

document.querySelector(".signal-box")
.style.display = "block"

document.querySelector(".signal-box")
.style.transform = "scale(1.05)"

setTimeout(() => {

document.querySelector(".signal-box")
.style.transform = "scale(1)"

},300)

},2000)

}

/* NAVIGATION */

function showTab(tab){

let sidebar =
document.getElementById("sidebar")

sidebar.style.left = "-260px"

menuOpen = false

if(tab === "Home"){

window.scrollTo({
top:0,
behavior:"smooth"
})

}

if(tab === "Signals"){

document.getElementById("pairSelect")
.scrollIntoView({
behavior:"smooth"
})

}

if(tab === "History"){

document.querySelector(".history-box")
.scrollIntoView({
behavior:"smooth"
})

}

if(tab === "Profile"){

document.querySelector(".profile-box")
.scrollIntoView({
behavior:"smooth"
})

}

if(tab === "VIP"){

document.querySelector(".vip-box")
.scrollIntoView({
behavior:"smooth"
})

}

}
