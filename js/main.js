

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
            $llmidMth  = Math.floor( (($lfHght / 2) - ($llHght / 2)) + 30 ),
            $lltopMth  = $lfHght - $llHght;
            // $boom = Math.floor($llmidMth);




            $loadlogo.addClass('opc')
            $('.load-logo').css({
                'bottom' : $llmidMth
            });


        console.log($llHght);
        console.log($lfHght);
        console.log($llmidMth);
        console.log($lltopMth);

    };


    setTimeout(measureit, 500);




    $(window).resize(function(){
        measureit();
    });







});
