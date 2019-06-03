$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			$('#btn-top').fadeIn();
		} else{
			$('#btn-top').fadeOut();
		}
	});

	$('#btn-top').on('click', function(e) {
    e.preventDefault();
		$('html, body').animate({scrollTop : 0}, 1000);
  return false;
  });
});