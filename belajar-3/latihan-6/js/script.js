// ? event pada saat di klik
$('.page-scroll').on('click', function(e){
    
    // console.log('ok');
    // ? Ambil isi href
    const tujuan = $(this).attr('href');
    // ? Tangkap element yang bersangkutan
    const elementTujuan = $(tujuan);
    // console.log(elementTujuan.offset().top);
    
    // ? Pindahkan Scroll
    $('body').animate({
        scrollTop: elementTujuan.offset().top - 50
    }, 1250,'swing');

    e.preventDefault();

});


// parallax
// about
$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});


$(window).scroll(function(){
    const wScroll = $(this).scrollTop();

    // console.log(wScroll);

    // ? Awal Jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4.5 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1 +'%)'
    });
    // ? Akhir Jumbotron

    // ? portfolio
    if(wScroll > $('.portfolio').offset().top - 200){
        // console.log('ok');
        $('.portfolio .img-thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .img-thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
    }
});