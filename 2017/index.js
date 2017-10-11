$(document).ready(function() {
	//on click events 
   $('#steph').click(stephVideo);
   $('#durant').click(durantVideo);
   $('#klay').click(klayVideo);
   $('#green').click(greenVideo);

   function stephVideo() {
   	('#steph').html(<iframe width="854" height="480" src="https://www.youtube.com/embed/NV1nRc4z4so" frameborder="0" allowfullscreen></iframe>);
   };
});