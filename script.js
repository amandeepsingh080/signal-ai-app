<script>

function generateSignal(){

let signals = ["🟢 CALL","🔴 PUT"]

let signal =
signals[Math.floor(Math.random()*signals.length)]

let confidence =
Math.floor(Math.random()*15)+80

let pair =
document.getElementById("pairSelect").value

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

}

</script>
