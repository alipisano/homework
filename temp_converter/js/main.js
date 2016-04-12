// When user clicks on F to C button
$('#fahrenheit_to_celsius').on('click', function() {
	
	// Get the value the user enters and store it in variable fahrenheit
	var fahrenheit = $('#temperature').val();
	
	// Convert that value into a number
	fahrenheit = parseFloat(fahrenheit);

	// Convert to celsius and store in variable celsius 
	var celsius = (fahrenheit - 32) / 1.8;

	// Display in #result
	$('#result').html(celsius);
});

// When user clicks on C to F button
$('#celsius_to_fahrenheit').on('click', function() {
	
	// Get the value the user enters and store it in variable celsius
	var celsius = $('#temperature').val();
	
	// Convert that value into a number
	celsius = parseFloat(celsius);

	// Convert to fahrenheit and store in variable fahrenheit 
	var fahrenheit = 1.8 * celsius + 32;

	// Display in #result
	$('#result').html(fahrenheit);
});

