// mini_convertible.js
/* 580px */
(function($){

  // 스크롤 시 tabBox 고정 및 top 버튼 생성
  var tabBox = $('#tabBox').offset().top;
  var topMvBtn = $('.topMvBtn');
  var timed = 500;

  $(window).on('scroll', function(){
  $('#tabBox').css({'position':'fixed', 'bottom':'auto', 'top':0});

  var wScroll = $(this).scrollTop();
  if(tabBox < wScroll){
  }else{
    $('#tabBox').removeAttr('style');
  }
  
  var winScroll = $(window).scrollTop();
  (winScroll >= 580) ? topMvBtn.stop().fadeIn(timed) : topMvBtn.stop().fadeOut(timed);
  
  });

  // aside#infoBox 마우스 올릴 시 설명표시 slide
  var infoBox = $('#infoBox');
  var infoBoxExplain = $('.info_explain');

  infoBox.on('mouseover',function(e){
    e.preventDefault();
    infoBoxExplain.show("slide", { direction: "right" }, 300);
  });

  infoBox.on('mouseleave',function(e){
    e.preventDefault();

    infoBoxExplain.hide("slide", { direction: "right" }, 300);
  });

  // designBox 선택한 사진 클릭 시 팝업창 설명 띄우기


})(jQuery);
