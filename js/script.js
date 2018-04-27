window.onload = function () {

// Скрипт для кнопки вверх на странице
$(document).ready(function() {
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
				}
		});
		$('#toTop').click(function() {
 			$('body,html').animate({scrollTop:0},800);
		 });
	});
}










//<script type="text/javascript">
//	$(function() {
//		$(window).scroll(function() {
//			if($(this).scrollTop() != 0) {
//				$('#toTop').fadeIn();
//			} else {
//				$('#toTop').fadeOut();
//				}
//		});
//		$('#toTop').click(function() {
//			$('body,html').animate({scrollTop:0},800);
//		 });
//	});
//</script>
