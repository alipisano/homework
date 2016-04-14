// Create an array of image paths

var images = ["images/image_1.jpg", "images/image_2.jpg", "images/image_3.jpg", "images/image_4.jpg", "images/image_5.jpg", "images/image_6.jpg"];

// Set a variable for our currentPosition
var currentPosition = 0;

// When user clicks on the "next" button
$('#next').on('click', function() {

	// Add one to the currentPosition
	currentPosition += 1;

	// If currentPosition is the last index
	if (currentPosition === images.length) {

		// Disable the "next" button
		$('#next').prop('disabled', true);	
	}

	// Change the src of #image-to-vote-on to image at that index
	else {
		$('#image-to-vote-on').attr("src", images[currentPosition]);
		//enable "previous" button
		$('#prev').prop('disabled', false);
}});

// When the user clicks on the "previous button"
$('#prev').on('click', function() {

	//Subtract 1 from the currentPosition
	currentPosition -= 1;

	// If currentPosition is the first index
	if (currentPosition === 0) {

		// Disable the "previous" button
		$('#prev').prop('disabled', true);	
	}

	else{
		$('#image-to-vote-on').attr("src", images[currentPosition]);

		$('#next').prop('disabled', false);

}});


//Create variable for # of votes

var counter = 0;

//When the user clicks on the "downvote" button
$('#downvote').on('click', function() {
	counter -=1;
	//set the text of the vote total to the new value of counter
	$('#votes').text(counter);
});

//When the user clicks on the "upvote" button

$('#upvote').on('click', function() {
	counter +=1;
	//set the text of the vote total to the new value of counter
	$('#votes').text(counter);
});







