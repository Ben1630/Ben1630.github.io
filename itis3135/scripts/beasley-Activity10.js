$(document).ready(function() {
	$("li:first-child a").focus();


        // preload the image for each link
		const h1 = new Image;
		h1.src = "images/h1.jpg";
		
		const h2 = new Image;
		h2.src = "images/h2.jpg";
		
		const h3 = new Image;
		h3.src = "images/h3.jpg";
		
		const h4 = new Image;
		h4.src = "images/h4.jpg";
		
		const h5 = new Image;
		h5.src = "images/h5.jpg";
		
		const h6 = new Image;
		h6.src = "images/h6.jpg";
		
		const t1 = new Image;
		t1.src = "images/t1.jpg";
		
		const t2 = new Image;
		t2.src = "images/t2.jpg";
		
		const t3 = new Image;
		t3.src = "images/t3.jpg";
		
		const t4 = new Image;
		t4.src = "images/t4.jpg";
		
		const t5 = new Image;
		t5.src = "images/t5.jpg";
		
		const t6 = new Image;
		t6.src = "images/t6.jpg";
		
		
		

        // set up the event handlers for each link
		
		$("#image_list a").click( evt =>
	{
		const link = evt.currentTarget;
		
		$("#image").add(caption).fadeOut(3000,
		 evt => call());
		
		
		
		function call()
		{
			$("#image").attr("src", link.href);
			 caption.textContent = link.title;
		}
		
		
		
	    $("#image").add(caption).fadeIn(3000);
	
		$("#caption").animate(
			{fontSize: "2.0em"}, 3000
		
		);
		
		evt.preventDefault();
		
		
	})

    			// get the image URL and caption for each image and animate the caption

            // cancel the default action of each link


    // move the focus to the first link

}); // end ready