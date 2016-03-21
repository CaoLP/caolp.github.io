$(function () {
    $('.btn-login').on('click', function(e){
        e.preventDefault();
       $('#login-box').show();
    });
    $('.login-box-close').on('click', function (e) {
        e.preventDefault();
        $('#login-box').hide();
    });
});
