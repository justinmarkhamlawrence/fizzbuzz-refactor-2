$(document).ready(function() {
	$('#fizzbuzz-form').submit(function(e) {
		e.preventDefault();
		var userInput = parseInt($('#fizzbuzz-entry').val());
		if (isNaN(userInput) || userInput === undefined) {
			alert("Enter only integers");
			return;
		}

		for (i=1; i<=userInput ;i++) {
			if (i % 3 === 0 && i % 5 === 0) {
				$('ul').append('<li>', 'fizz buzz');
			}
			else if (i % 5 === 0) {
				$('ul').append('<li>', 'buzz');
			}

			else if (i % 3 === 0) {
				$('ul').append('<li>', 'fizz');
			}
			else {
			$('ul').append('<li>', i);
			}
		}
	})
});