

$(function(){

    var
        $loadframe    = $('.load-frame'),
        $loadlogo     = $('.load-logo'),
        $loadlogoMid  = $('.load-logo.mid'),
        $loadlogoTop  = $('.load-logo.top');


    var measureit = function(){

        var
            $lfHght    = $loadframe.outerHeight(),
            $llHght    = $loadlogo.outerHeight(),
            $llmidMth  = ($lfHght / 2) - ($llHght / 2),
            $lltopMth  = $lfHght - $llHght;
            // $boom = Math.floor($llmidMth)


        $loadlogoMid.css({
            'bottom' : $llmidMth
        });
        $loadlogoTop.css({
            'bottom' : $lltopMth
        });



        // console.log($wndwdth);
        // console.log($wndhgth);
        // console.log($llHght);
        // console.log($lfHght);
        // console.log($llmidMth);
        // console.log($lltopMth);

    };

    measureit();

    $(window).resize(function(){
        measureit();
    });





    // setTimeout(function(){
    //     $('.load-logo').addClass('mid');
    //
    //     setTimeout(function(){
    //         $('.loading').addClass('up opc');
    //     }, 1000);
    //
    //     setTimeout(function(){
    //         $('.loading span').addClass('start');
    //         var loadbar = setInterval(function(){
    //             $('.loading span').toggleClass('start');
    //         }, 3000);
    //     }, 2500);
    // }, 500);
    //
    //
    // var count = 0;
    // var loadflag = true;
    //
    // $(window).load(function(){ loadflag = false; });
    //
    // function makeitcount() {
    //     var mycount = setInterval(function(){
    //         count++;
    //         console.log(count);
    //         if ( count >= 4 && !loadflag ) {
    //             clearInterval(mycount);
    //             $('.loading').removeClass('opc');
    //             setTimeout(function(){
    //                 $('.load-logo').addClass('top');
    //             }, 1500);
    //         }
    //     }, 1000);
    // }
    //
    // setTimeout(makeitcount, 2500);

});
