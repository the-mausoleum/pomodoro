$(document).ready(function() {
	var startTime = new Date();
	//$('#controls').html('<button type="button" class="btn btn-lg btn-primary" id="start"><span class="button-text" id="start-text">开始</span></button>');
	
	$('#start').click(function() {
		console.log('start');
		//$('#controls').html('<button type="button" class="btn btn-lg btn-danger" id="stop"><span class="button-text" id="stop-text">结束</span></button>');
		$('#start').css('display', 'none');
		$('#stop').css('display', 'inline');
	});
	
	$('#stop').click(function() {
		console.log('stopped');
		//$('#controls').html('<button type="button" class="btn btn-lg btn-primary" id="start"><span class="button-text" id="start-text">开始</span></button>');
		$('#stop').css('display', 'none');
		$('#start').css('display', 'inline');
	});
});