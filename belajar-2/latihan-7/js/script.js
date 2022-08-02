$(window).scroll(function(){
    const wScroll = $(this).scrollTop();

    // console.log(wScroll);

    // ? Awal Jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/5 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/1.3 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/0.6 +'%)'
    });
    // ? Akhir Jumbotron

    // ? About
    if(wScroll > $('.about').offset().top - 400){
        // console.log('ok');
        $('.about .pKiri').each(function(i){
            setTimeout(function(){
                $('.about .pKiri').eq(i).addClass('pMuncul');
            }, 100);
        });
        $('.about .pKanan').each(function(i){
            setTimeout(function(){
                $('.about .pKanan').eq(i).addClass('pMuncul');
            }, 100);
        });
    }
    // ? Akhir About

    // ? portfolio
    if(wScroll > $('.portfolio').offset().top - 300){
        // console.log('ok');
        $('.portfolio .card').each(function(i){
            setTimeout(function(){
                $('.portfolio .card').eq(i).addClass('muncul');
            }, 150 * (i+1));
        });
    }
});