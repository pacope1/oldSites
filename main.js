// JavaScript Document
$(document).ready(() => {
	$('#navButton').click(() => {
		$('#dropNav').slideToggle("slow");
		$('#title').fadeToggle("slow");
	});

$('#homeLink').click(() => {
	$('html, body').animate({
scrollTop: $("#welcome").offset().top
		}, 1000);
	});
	
$('#aboutLink').click(() => {
	$('html, body').animate({
scrollTop: $("#aboutMe").offset().top
		}, 1000);
	});

$('#skillLink').click(() => {
	$('html, body').animate({
scrollTop: $('#skills').offset().top
		}, 1000);
	});

$('#expLink').click(() => {
	$('html, body').animate({
scrollTop: $('#experience').offset().top
		}, 1000);
	});
	
$('#eduLink').click(() => {
	$('html, body').animate({
scrollTop: $('#education').offset().top
		}, 1000);
	});

$('#refLink').click(() => {
	$('html, body').animate({
scrollTop: $('#references').offset().top
		}, 1000);
	});
	
$('#portLink').click(() => {
	$('html, body').animate({
scrollTop: $('#portfolio').offset().top
		}, 1000);
	});
	
});


var myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName('mySlides');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = 'block';
  setTimeout(carousel, 10000);
}
