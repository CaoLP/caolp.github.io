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
    $('.b5').on('click', function(){
        var audio = new Audio('sound.ogg');
        audio.play();
        $('.b3').addClass('show-3');
        $('.b2').addClass('show-2');
        $('.b1').addClass('show-1');
        setTimeout(function(){
            $('.b3').removeClass('show-3');
            $('.b2').removeClass('show-2');
            $('.b1').removeClass('show-1');
            window.location = 'gioi-thieu.html';
        }, 4000);
    })
});