function sendSOS(){

    document.getElementById("result").style.display="block";

}
function enterDangerZone(){

document.getElementById("warningBox").style.display="block";

alert("⚠ Warning! High Risk Area");

}
function startAI(){

    const status = document.getElementById("aiStatus");

    status.innerHTML = "📹 Camera Activated...";

    setTimeout(()=>{
        status.innerHTML="👤 Human Detected...";
    },2000);

    setTimeout(()=>{
        status.innerHTML="🏃 Suspicious Activity Detected...";
    },4000);

    setTimeout(()=>{
        status.innerHTML="📍 Verifying Location...";
    },6000);

    setTimeout(()=>{
        status.innerHTML="🚨 Emergency Confirmed...";
    },8000);

    setTimeout(()=>{
        status.innerHTML="👮 Police Alert Sent Successfully!";
    },10000);

}
function sendSOS() {

    // Save emergency status
    localStorage.setItem("emergency", "YES");

    // Save tourist details
    localStorage.setItem("touristName", "John David");
    localStorage.setItem("location", "Ooty Botanical Garden");
    localStorage.setItem("status", "Waiting for Response");

    document.getElementById("result").style.display = "block";
}
function registerUser(){

    let name = document.getElementById("name").value;

    localStorage.setItem("touristName", name);

    alert("Registration Successful!");

    window.location.href="login.html";

}
let timer;

function enterDangerZone(){

    document.getElementById("warningBox").style.display="block";

    let seconds=30;

    document.getElementById("countdown").innerHTML=seconds;

    timer=setInterval(function(){

        seconds--;

        document.getElementById("countdown").innerHTML=seconds;

        if(seconds<=0){

            clearInterval(timer);

            autoSOS();

        }

    },1000);

}

function cancelAlert(){

    clearInterval(timer);

    alert("Great! Alert Cancelled.");

}

function autoSOS(){

    localStorage.setItem("emergency","YES");

    localStorage.setItem("status","Possible Emergency");

    alert("No response detected.\nSOS Sent Automatically!");

}
function verifyIdentity(){

    const now = new Date();

    document.getElementById("verifyTime").innerHTML =
    now.toLocaleString();

    alert("✅ Identity Successfully Verified!");

}