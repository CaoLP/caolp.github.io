$(function () {
	$('.btn-login').on('click', function (e) {
		e.preventDefault();
		$('#login-box').show();
	});
	$('.login-box-close').on('click', function (e) {
		e.preventDefault();
		$('#login-box').hide();
	});
	$('.avatar-list li').click(function () {
		showDes(this);
	}).hover(function () {
		showDes(this);
	});
	function showDes(e) {
		var id = $(e).data('id');
		$('.arrow img').hide();
		$('.des li').hide();

		$('.arrow-' + id).css('display','inline-block');
		$('.des-' + id).css('display','inline-block');
	}
});
