
//CLOCK FEATURE
function time(){
	const fullDate = new Date();
	var hours = fullDate.getHours();
	var minutes = fullDate.getMinutes();
	var seconds = fullDate.getSeconds();

	if(hours<10){
		hours = '0' + hours;
	};
	if(hours==0){
		hours = '00'
	};
	if(minutes<10){
		minutes = '0' + minutes;
	};
	if(minutes==0){
	minutes = '00'
	};
	if(seconds<10){
		seconds = '0' + seconds;
	};
	document.getElementById('hours').innerHTML = hours + ' :';
	document.getElementById('minutes').innerHTML = minutes + ' :';
	document.getElementById('seconds').innerHTML = seconds;
};

setInterval(time,1000);


//DATE FEATURE

function date(){
const fullDate = new Date();
var weekday = fullDate.getDay();
var dateOfMonth = fullDate.getDate();
var month = fullDate.getMonth();
var year = fullDate.getFullYear();
var daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
document.getElementById('weekday').innerHTML = daysOfWeek[weekday];
document.getElementById('dateOfMonth').innerHTML = dateOfMonth ;
document.getElementById('month').innerHTML = months[month];
document.getElementById('year').innerHTML = year;
};
date();
setInterval(date,60000);





