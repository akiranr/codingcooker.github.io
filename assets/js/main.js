jQuery(document).ready(function(){
	/* Open when someone clicks on the span element */
	$('.Home-Nav-Trigger').click(function() {
		document.getElementById("myNav").style.width = "100%";
	});

	$('.closebtn').click(function() {
		document.getElementById("myNav").style.width = "0%";
	});
});