window.onload = function init()
{						
	document.getElementById( "increasemoonspeed" ).onclick = function () {
		if(moonspeed<=0.2)
			moonspeed+=0.005;
	};
	document.getElementById( "decreasemoonspeed" ).onclick = function () {
		if(moonspeed<=0){
			moonspeed=0;
		}else{
			moonspeed=moonspeed-0.005;
		}
	};
	document.getElementById( "increaseearthspeed" ).onclick = function () {
		if(earthspeed<=0.04)
			earthspeed+=0.001;
	};	
	document.getElementById( "decreaseearthspeed" ).onclick = function () {
		if(earthspeed<=0){
			earthspeed=0;
		}else{
			earthspeed=earthspeed-0.001;
		}
	};	
}						