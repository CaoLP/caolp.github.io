$(function () {
    $('*[data-toggle="modal"]').on('click', function () {
        $('.modal-overlay').show();
        var target = $(this).data('target');
        $('.modal').hide();
        $('#' + target).show();
    });
    $('.close-modal-btn').on('click', function () {
        $('.modal-overlay').hide();
        $('.modal').hide();
    });
});