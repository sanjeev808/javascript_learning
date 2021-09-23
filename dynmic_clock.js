var clock = setInterval(clocktime , 1000);
function clocktime(){
var d = new Date();
var t= d.toLocaleTimeString();
document.getElementById('showClock').innerHTML=t
}
