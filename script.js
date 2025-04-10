//your JS code here. If required.
let currentTime=document.getElementById("timer");
let currentDate= new Date();

setInterval(
	function(){
		currentDate=new Date();
		currentTime.innerHTML=currentDate.toLocaleString();
	},1000
)