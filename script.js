window.onload = function(){

let loggedIn =
localStorage.getItem("loggedIn")

if(loggedIn === "true"){

document.getElementById("loginScreen")
.style.display = "none"

document.getElementById("mainApp")
.style.display = "block"

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

document.getElementById("loginScreen")
.style.display = "none"

document.getElementById("mainApp")
.style.display = "block"

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

document.getElementById("loadingBox")
.style.display = "flex"

document.querySelector(".signal-box")
.style.display = "none"

setTimeout(() => {

let signals = ["🟢 CALL","🔴 PUT"]

let signal =
signals[Math.floor(Math.random()*signals.length)]

let confidence =
Math.floor(Math.random()*15)+80

document.getElementById("signalText")
.innerHTML = signal

document.getElementById("confidenceText")
.innerHTML =
"Confidence: " + confidence + "%"

document.getElementById("expiryText")
.innerHTML =
"Expiry: 1 Minute"

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

function showTab(tab){

console.log(tab)

let sidebar =
document.getElementById("sidebar")

sidebar.style.left = "-280px"

menuOpen = false

alert(tab + " Opened 🚀")

}
