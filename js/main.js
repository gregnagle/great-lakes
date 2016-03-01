

$(function(){

    //
    // setTimeout(function(){
    //     $('.load-logo').addClass('mid');
    //     $('.load-logo').removeClass('bot');
    //     $('.load-logo').toggleClass('opc');
    // }, 500);
    var $count = 0;

    setTimeout(function(){
        $('.load-logo').addClass('mid');

        setTimeout(function(){
            $('.loading').addClass('up');
        }, 500);

        setTimeout(function(){
            $('.loading span').addClass('start');
            var loadbar = setInterval(function(){
                $('.loading span').toggleClass('start');
            }, 3000);
        }, 2000);
    }, 500);

});
