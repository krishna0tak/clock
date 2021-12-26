let date;
let Time;
let a;
const options = { weekday:'long' , year:'numeric', month:'long', day:'numeric' }
setInterval(() => {
 a = new Date();
 date = a.toLocaleDateString(undefined,options)
 Time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds()
document.getElementById("hh").innerHTML = Time + "<br> on " + date}, 1000);