$(document).ready(function() {
	var id;
	var pomodoriCount = 0;
	
	$('#start').click(function() {
		console.log('start');
		//$('#controls').html('<button type="button" class="btn btn-lg btn-danger" id="stop"><span class="button-text" id="stop-text">结束</span></button>');
		$('#start').css('display', 'none');
		$('#stop').css('display', 'inline');
		
		var startTime = new Date();
		var endTime = new Date(startTime.getTime());
	
		//endTime.setMinutes(startTime.getMinutes() + 25);
		endTime.setSeconds(startTime.getSeconds() + 10);
		
		var time = endTime.getTime() - startTime.getTime();
		
		pomodoro(time);
		
		function pomodoro(time) {
			clearInterval(id);
			
			id = setInterval(function() {
				time -= 1000;
				var sec = Math.floor(time / 1000);
				var min = Math.floor(sec / 60);
				
				sec = sec % 60;
				min = min % 60;
				
				if (sec < 10) {
					sec = '0' + sec;
				}
				if (min < 10) {
					min = '0' + min;
				}
				
				if (time - 1000 < 0) {
					pomodoriCount += 1;
					if (alarm() && pomodoriCount % 4 == 0) {
						//$('#timer').text('00:00');
						time = longBreakTimer(2000);
						return;
					} else if (alarm()) {
						shortBreakTimer(4000);
						return;
					}
				}
				
				$('#timer').text(min + ':' + sec);
			}, 1000);
		}
		
		function alarm() {
			return true;
		}
		
		function shortBreakTimer(time) {
			clearInterval(id);
			
			/*var startTime = new Date();
			var endTime = new Date(startTime.getTime());
			
			endTime.setMinutes(startTime.getMinutes() + 5);
			
			time = endTime.getTime() - startTime.getTime();*/
			console.log('short break');
			pomodoro(time);
		}
		
		function longBreakTimer(time) {
			clearInterval(id);
			
			var startTime = new Date();
			var endTime = new Date(startTime.getTime());
			
			endTime.setMinutes(startTime.getMinutes() + 30);
			
			time = endTime.getTime() - startTime.getTime();
			
			console.log('long break');
			//pomodoro(time);
			return time;
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