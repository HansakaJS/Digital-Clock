setInterval(function(){
const clock = document.querySelector(".display");
let time = new Date();
//if you want to display date time country, use below comand
// clock.textContent = time;
let sec = time.getSeconds();
let min = time.getMinutes();
let hrs = time.getHours();
let day = 'AM';
	day = 'PM';
if (hrs > 12) {
	//if you want to without 24hrs clock system
	//hrs = hrs - 12;
}
if (hrs == 0) {
	hrs = 12;
}
if (min < 10) {
	min = '0' + min;
}
if (sec < 10) {
	sec = '0' + sec;
}
clock.textContent = hrs + ':' + min + ':' + sec + day;
});