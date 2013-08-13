$(document).ready(function() {
	var id;
	var pondoriCount = 0;
	
	$('#start').click(function() {
		console.log('start');
		//$('#controls').html('<button type="button" class="btn btn-lg btn-danger" id="stop"><span class="button-text" id="stop-text">结束</span></button>');
		$('#start').css('display', 'none');
		$('#stop').css('display', 'inline');
		
		var startTime = new Date();
		var endTime = new Date(startTime.getTime());
	
		//endTime.setMinutes(startTime.getMinutes() + 25);
		endTime.setSeconds(startTime.getSeconds() + 10);
		
		var msec = endTime.getTime() - startTime.getTime();
		
		id = setInterval(function() {
			msec -= 1000;
			var sec = Math.floor(msec / 1000);
			var min = Math.floor(sec / 60);
			
			sec = sec % 60;
			min = min % 60;
			
			if (sec < 10) {
				sec = '0' + sec;
			}
			if (min < 10) {
				min = '0' + min;
			}
			
			if (msec - 1000 < 0) {
				pondoriCount += 1;
				if (alarm() && pondoriCount % 4 == 0) {
					$('#timer').text('00:00');
					breakTimer(true);
					msec = reset();
				} else if (alarm()) {
					breakTimer(false);
					msec = reset();
				}
			}
			
			$('#timer').text(min + ':' + sec);
		}, 1000);
		
		function alarm() {
			return true;
		}
		
		function reset() {
			//clearInterval(id);
			
			var startTime = new Date();
			var endTime = new Date(startTime.getTime());
		
			//endTime.setMinutes(startTime.getMinutes() + 25);
			endTime.setSeconds(startTime.getSeconds() + 10);
			
			var msec = endTime.getTime() - startTime.getTime();
			
			return msec;
		}
		
		function breakTimer(long) {
			clearInterval(id);
			
			var startTime = new Date();
			var endTime = new Date(startTime.getTime());
			
			if (long) {
				console.log('long break');
				//endTime.setMinutes(startTime.getMinutes() + 15);
				endTime.setSeconds(startTime.getSeconds() + 5);
			} else {
				console.log('short break');
				//endTime.setMinutes(startTime.getMinutes() + 5);
				endTime.setSeconds(startTime.getSeconds() + 1);
			}
			
			var msec = endTime.getTime() - startTime.getTime();
			
			id = setInterval(function() {
				msec -= 1000;
				var sec = Math.floor(msec / 1000);
				var min = Math.floor(sec / 60);
				
				sec = sec % 60;
				min = min % 60;
				
				if (sec < 10) {
					sec = '0' + sec;
				}
				if (min < 10) {
					min = '0' + min;
				}
				
				if (msec < 0) {
					clearInterval(id);
					console.log('return');
					return;
				}
				
				$('#timer').text(min + ':' + sec);
			}, 1000);
		}
		
/*		var endTime = new Date();
		endTime.setMinutes(startTime.getMinutes() + 25)
		
		$('#timer').text(startTime.getMinutes() - endTime.getMinutes());*/
	});
	
	$('#stop').click(function() {
		console.log('stopped');
		//$('#controls').html('<button type="button" class="btn btn-lg btn-primary" id="start"><span class="button-text" id="start-text">开始</span></button>');
		$('#stop').css('display', 'none');
		$('#start').css('display', 'inline');
		
		clearInterval(id);
		$('#timer').text('25:00');
	});
	
	

});

/*function timer() {
	//var startTime = new Date();
	var endTime = new Date(startTime.getTime());
	
	endTime.setMinutes(startTime.getMinutes() + 25);
	console.log(endTime.getMinutes());
	
	var msec = endTime.getTime() - startTime.getTime();
	console.log(msec);
	var sec = Math.floor(msec / 1000);
	var min = Math.floor(sec / 60);
	
	sec = sec % 60;
	min = min % 60;
	
	if (sec < 10) {
		sec = '0' + sec;
	}
	if (min < 10) {
		min = '0' + min;
	}
	
	$('#timer').text(min + ':' + sec);
	//var t = setTimeout('timer();', 1000);
};*/


/*function countdown() {

var currentDate = new Date(); // Today's Date

var targetDate = new Date(); // Date we are counting down to
targetDate.setMonth(0,1); // (from 0-11; month), (from 1-31; date)
targetDate.setFullYear(2010);
targetDate.setHours(0);
targetDate.setMinutes(0);
targetDate.setSeconds(0);
targetDate.setMilliseconds(0);

var msec = targetDate.getTime() - currentDate.getTime(); // The time left in milliseconds
var sec = Math.floor(msec / 1000);
var mins = Math.floor(sec / 60);
var hours = Math.floor(mins / 60);
var days = Math.floor(hours / 24);
sec = sec % 60;
mins = mins % 60;
hours = hours % 24;

 //Add Leading Zeros to Hours, Min, Sec
if (sec < 10) {
    sec = '0'+sec;
}
if (mins < 10) {
    mins = '0'+mins;
}
if (hours < 10) {
    hours = '0'+hours;
}

document.getElementById('countdown').innerHTML = days+':'+hours+':'+mins+':'+sec;
var t = setTimeout('countdown();',1000);
}*/