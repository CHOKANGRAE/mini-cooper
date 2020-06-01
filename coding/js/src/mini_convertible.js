// mini_convertible.js
/*
(function($){

  //변수 설정

  var tabBox = $('#tabBox');
  var tabLi1 = tabBox.find('.tab_01');
    var tabLi1Link = tabLi1.children('a');
  var tabLi2 = tabBox.find('.tab_02');
    var tabLi2Link = tabLi2.children('a');
  var tabLi3 = tabBox.find('.tab_03');
    var tabLi3Link = tabLi3.children('a');

  var tabArea =$('.tabArea');
  var modelBox = $('#modelBox');
  var detailBox = $('#detailBox');
  var dataBox = $('#dataBox');

  //tab menu


  tabLi1Link.on('click',function(e){
    e.preventDefault();
    
    modelBox.show();
    detailBox.hide();
    dataBox.hide();
  });


  tabLi2Link.on('click',function(e){
    e.preventDefault();

    modelBox.hide();
    detailBox.show();
    dataBox.hide();
  });


  tabLi3Link.on('click',function(e){
    e.preventDefault();

    modelBox.hide();
    detailBox.hide();
    dataBox.show();
  });

})(jQuery);

/*