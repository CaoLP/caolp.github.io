$(function () {
    $('*[data-toggle="modal"]').on('click', function () {
        $('.modal-overlay').show();
        var target = $(this).data('target');
        $('.modal').hide();
        if(target == "dang-ky"){
            $('.should-hide').hide();
            $('.overlay-dang-ky').show();
            $.ajax({
                url: 'form/form.html',
                success : function(response){
                    $('#dang-ky .modal-body').html(response);
                }
            });
        }
        $('#' + target).show();
    });
    $('.close-modal-btn').on('click', function () {
        $('.modal-overlay').hide();
        $('.overlay-dang-ky').hide();
        $('.should-hide').show();
        $('.modal').hide();
    });
});