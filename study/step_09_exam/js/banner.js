function banner(){
  $('.left_btn').on('click', function(){
    var banner_li = $('.banner_box').find('li'),
        banner_li_width = banner_li.width();    
    banner_li.first().stop().animate({marginLeft:banner_li_width}, 1000,function(){
      banner_li.css({marginLeft:0}).last().prependTo('.banner_box');
    });
  });
  $('.right_btn').on('click', function(){
    var banner_li = $('.banner_box').find('li'),
        banner_li_width = banner_li.width();    
    banner_li.first().stop().animate({marginLeft:-banner_li_width}, 1000,function(){
      banner_li.css({marginLeft:0}).first().appendTo('.banner_box');
    });
  });
};





