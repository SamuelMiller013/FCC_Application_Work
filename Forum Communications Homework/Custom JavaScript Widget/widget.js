$(document).ready(function() {
	var f = document.getElementById('blink1');
	setInterval(function() {
		f.style.color = (f.style.color == 'black' ? 'white' : 'black');
	}, 250);
	var f2 = document.getElementById('blink2');
	setInterval(function() {
		f2.style.color = (f2.style.color == 'black' ? 'white' : 'black');
	}, 250);

});

$.getJSON( "https://www.reddit.com/r/worldnews.json", function( data ) {
	var items = [];
	var i = 0;
	$.each( data.data.children, function( key, val ) {
		items.push( "<div class='heading'>")
		items.push( "<h2 class='title'>" + this.data.title + "</h2>" );
		items.push( "<h4 class='domain'>" + this.data.domain + "</h4>" );
		items.push( "<a class='url' href='" + this.data.url + "'>" + this.data.url + "</a>");
		items.push( "</div>" );
		console.log(this.data.url);
		i += 1;
		if (i>4) {
			return false;			
		}
	});
 
	$( "<div/>", {
		"class": "my-new-list",
		html: items.join( "" )
	}).appendTo( "#widget" );
});
