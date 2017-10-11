$(document).ready(function () {

	//on click event
 	f
 	$('#quote2').click(author2);


 	// hide quote 1st step
	function hideQuote1() {
		$('quote1').hide();
	};

	function hideQuote2() {
		$('quote2').hide();
	}


	// add authors' names 
	function author1() {
		hideQuote1();
		$('#quote1').html('- Max Kellerman');
	};

	function author2() {
		hideQuote2();
		$('#quote2').html('- Grant Hughes');
	};

	

});