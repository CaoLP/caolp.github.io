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
    $('.close-modal-btn').on('click', function () {
        $('.modal').hide();
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
