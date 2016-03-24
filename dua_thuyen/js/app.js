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

		$('.arrow-' + id).css('display', 'inline-block');
		$('.des-' + id).css('display', 'inline-block');
	}

	$('.btn-dangky').on('click', function () {
		$('#dang-ky-modal').show();
	});
	$('.open-modal').on('click', function () {
		$('.modal-overlay').show();
		var target = $(this).data('target');
		$('.modal').hide();
		$('#' + target).show();
	});
	$('.close-modal-btn').on('click', function () {
		$('.modal-overlay').hide();
		$('.modal').hide();
	});
	$('#btn-step-1').on('click', function () {
		$('.tab').parent().removeClass('active');
		$('a[target="tab-2"]').parent().addClass('active');
		$('.tab-content').hide();
		$('#tab-2').removeClass('hide').show();
	});
	$('#btn-step-2').on('click', function () {
		$('.tab').parent().removeClass('active');
		$('a[target="tab-3"]').parent().addClass('active');
		$('.tab-content').hide();
		$('#tab-3').removeClass('hide').show();
	});
	$('#btn-step-3').on('click', function () {
		$('.modal').hide();
	});
	//$('.tab').on('click',function(){
	//    var target = $(this).attr('target');
	//    $('.tab').parent().removeClass('active');
	//    $(this).parent().addClass('active');
	//    $('.tab-content').hide();
	//    $('#' + target).show();
	//});
	$('.thumbnail').on('click', function () {
		$('.thumbnail').parent().removeClass('active');
		$(this).parent().addClass('active');
		var target = $(this).data('target');
		$('.view-list li').addClass('hide');
		$('#' + target).removeClass('hide');
	});

	var month = '';
	for (var i = 1; i <= 30; i++) {
		month += '<option value="' + i + '">' + i + '</option>';
	}
	$('#day').html(month);

	var year = '';
	for (var i = 70; i > 0; i--) {
		var y = 2015 - i;
		year += '<option value="' + y + '">' + y + '</option>';
	}
	$('#year').html(year);
});
