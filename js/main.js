$(function(){//로드후 실행
    $(window).scroll(function(){

        now = $(this).scrollTop();
        target = $('.here').offset().top-30;

        if (now >= target) {
            $('header').addClass('on')
            // $('header').children('.cate_area').css({display:'flex'});
        } else {
            $('header').removeClass('on')
            // $('header').children('.cate_area').css({display:'none'});
        }
    })
    $(window).trigger('scroll');

    //햄버거메뉴
    $('.menu_btn').click(function(e){
        e.preventDefault();
        $('.dimmed').addClass('on');
        $('.menu').addClass('on');
        $('body').addClass('noscroll');
    });
    $('.exit').click(function(e){
        e.preventDefault();
        $('.dimmed').removeClass('on');
        $('.menu').removeClass('on');
        $('body').removeClass('noscroll');
    });
    $('.dimmed').click(function(e){
        e.preventDefault();
        $('.menu').removeClass('on');
        $('.dimmed').removeClass('on');
        $('body').removeClass('noscroll');
    });

    //검색아이콘
    $('.srh_btn01').click(function(e){
        e.preventDefault();
        $('.search').addClass('on');
        $('body').addClass('noscroll');
    });
    $('.back_btn').click(function(e){
        e.preventDefault();
        $('.search').removeClass('on');
        $('body').removeClass('noscroll');
    });

    //메뉴 탭 내부 메뉴
    $('.down').click(function(e){
        e.preventDefault();
        // $('.sub').stop().slideUp();
        // $(this).addClass('on');
        // $('.sub').stop().slideDown();
        if ($(this).hasClass('on')) {
            // $('.sub').stop().slideUp();
            $(this).siblings('.sub').stop().fadeOut();
            $(this).siblings('.sub').find('.sub_list').stop().slideUp();
            $(this).removeClass('on');
        } else {
            $(this).siblings('.sub').stop().fadeIn();
            $(this).siblings('.sub').find('.sub_list').stop().slideDown();
            $(this).addClass('on');
        }
    })

    //nav메뉴 더보기
    $('.more_btn').click(function(e){
        e.preventDefault();
        if ($(this).hasClass('on')) {
            $('.more_cont').stop().slideUp();
            $('.more_btn').removeClass('on');
            $(this).parent().siblings('.nav_wrap').removeClass('on')
            $('.more_title').removeClass('on');
        } else {
            $(this).siblings('.more_cont').stop().slideDown();
            $(this).parent().siblings('.nav_wrap').addClass('on')
            $('.more_title').addClass('on');
            $('.more_btn').removeClass('on');
            $(this).addClass('on');
        }
    })

    //sc_visual slide
    var slide02 = new Swiper(".slide02", {
        // slidesPerView: 1,
        // spaceBetween: 0,
        effect: "fade",
        loop: true,
        // autoplay: {
        //     delay: 100,
        //     disableOnInteraction: false
        //   },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
      });

      var slide03 = new Swiper(".slide03", {
        slidesPerView: 2.2,
        spaceBetween: 10,
        freeMode: true,
    });
    
}) // 지우지마세요