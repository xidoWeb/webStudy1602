$(document).ready(function(){
 
var win = $(window);
var winResize = function(){
  var win = $(window),
      winWidth =win.width();
  
    if(winWidth <= 640){
     var rwdhead = $('#rwdHead').find('h1'),
         rwdheadWidth = rwdhead.width();
      
          rwdhead.css({'margin-left': -rwdheadWidth / 2 });
      
      var mapBtn = $('.map_btn'),
          mapH2 = mapBtn.children('h2');        
      
          mapH2.on('click', function(){
            var $this = $(this),
                  mapUl = $this.next('ul');
                mapUl.stop(true, true).toggleClass('side', 500);
          });     

    }else if(winWidth > 641 && winWidth <= 1024){
      if(winWidth < 705){
        $("#gnb").css({float:'right'});
        $("#sitemap").css({marginTop: -80, marginLeft:'5px'});
      }
      
    }else{
     
    }
  $("body")
//     .html("<p>현재 브라우저 가로값은" + win.width() + "입니다.</p>" )
//     .find("p").css({"color":"#fff", "font-size":"1.5rem"});
  };
  winResize();
  
  var winWidth = $(window).width();
  win.on('resize', function(){
      if($(window).width() != winWidth){
          location.reload();
        }
     winResize();
  })
//  win.on("resize", winResize);
});











