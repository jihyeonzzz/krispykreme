$(document).ready(function(){

    $('.close').click(function(){
        $('.gnb').animate({'left':'1000px'},500);
    });
    $('.toggle').click(function(){
        $('.gnb').animate({'left':'0'},500);
    });

    $('.g_inner > li:first-child .more').click(function(){
        $('.g_inner > li:first-child .sub').stop().slideToggle();
    });
    $('.g_inner > li:nth-child(2) .more').click(function(){
        $('.g_inner > li:nth-child(2) .sub').stop().slideToggle();
    });
    $('.g_inner > li:nth-child(3) .more').click(function(){
        $('.g_inner > li:nth-child(3) .sub').stop().slideToggle();
    });
    $('.g_inner > li:nth-child(4) .more').click(function(){
        $('.g_inner > li:nth-child(4) .sub').stop().slideToggle();
    });
    $('.g_inner > li:nth-child(5) .more').click(function(){
        $('.g_inner > li:nth-child(5) .sub').stop().slideToggle();
    });
    $('.g_inner > li:last-child .more').click(function(){
        $('.g_inner > li:last-child .sub').stop().slideToggle();
    });

    $('.p_gnb .g_inner li, .p_sub').hover(function(){
      $('.p_sub').css('height','341px');
    }, function(){
      $('.p_sub').css('height','0px');
    });

});

// top btn
const topBtnEl = document.querySelector('#top_btn');

topBtnEl.addEventListener('click', function(){
  // alert('eiownviowne');
  gsap.to(window, .6, { //브라우저를 선택하여 0.6초만에
    scrollTo: 0 //스크롤 꼭때기 0까지 올라간다.
  });
});

window.addEventListener('scroll', function(){
  console.log(window.scrollY); //스크롤값 확인하기
  if(500<this.window.scrollY){
    gsap.to(topBtnEl, 0.3,{opacity:1});
  }else{
    gsap.to(topBtnEl, 0.2,{opacity:0});
  }
});