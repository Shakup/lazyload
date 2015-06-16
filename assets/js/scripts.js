var container = document.querySelector('#photos');

function setIsotope(){
	console.log('ISOTOPE');
	$('#photos').isotope({
		itemSelector: '.item',

		masonry: {
			columnWidth: 230,
			gutter: 10
		}
	});	
}

$('#btnFilter1').click(function(){
	$('#photos').isotope({ filter: '.cat1' });
});

$('#btnFilter2').click(function(){
	$('#photos').isotope({ filter: '.cat2' });
});

$('#btnAddItems, #btnAddItems2').click(function(){
	var $newItems = $(
		'<div class="item w2 cat1"><figure><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-src="http://lorempicsum.com/futurama/470/200/1" height="200" width="470"></figure></div>' +
		'<div class="item cat2"><figure><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-src="http://lorempicsum.com/futurama/230/200/2" height="200" width="230"></figure></div>' +
		'<div class="item cat2"><figure><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-src="http://lorempicsum.com/futurama/230/200/5" height="200" width="230"></figure></div>' +
		'<div class="item cat2"><figure><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-src="http://lorempicsum.com/futurama/230/200/3" height="200" width="230"></figure></div>' +
		'<div class="item w2"><figure><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-src="http://lorempicsum.com/futurama/470/200/2" height="200" width="470"></figure></div>' +
		'<div class="item cat2"><figure><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-src="http://lorempicsum.com/futurama/230/200/4" height="200" width="230"></figure></div>' +
		'<div class="item h2 w2"><figure><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-src="http://lorempicsum.com/futurama/470/410/5" height="410" width="470"></figure></div>' +
		'<div class="item cat2"><figure><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-src="http://lorempicsum.com/futurama/230/200/7" height="200" width="230"></figure></div>' +
		'<div class="item cat2"><figure><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-src="http://lorempicsum.com/futurama/230/200/7" height="200" width="230"></figure></div>' +
		'<div class="item w2"><figure><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-src="http://lorempicsum.com/futurama/470/200/7" height="200" width="470"></figure></div>' +
		'<div class="item w2"><figure><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-src="http://lorempicsum.com/futurama/470/200/1" height="200" width="470"></figure></div>' +
		'<div class="item cat2"><figure><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-lazy-src="http://lorempicsum.com/futurama/230/200/2" height="200" width="230"></figure></div>'
	);
	$('#photos').isotope( 'insert', $newItems );
});

setIsotope();

window.onLazyLoaded = function(){
	$('#photos').isotope('layout');
}