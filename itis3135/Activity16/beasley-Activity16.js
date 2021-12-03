$(document).ready(function(){

	var feed = "https://api.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";

	$.getJSON(feed, function(data){
        var html ="";
        $.each(data.items, function(i,item){
            html += "<a href=" + item.media.m + " data-lightbox='image' "  + "data-title='" + item.title +"'>" +  "<img width='100' height='100' scr=" + item.media.m  +" > </a>";		
        });

	$("#new_building").html(html);
	});
});