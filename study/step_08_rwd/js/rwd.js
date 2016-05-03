$(document).ready(function(){
 
var win = $(window);
var winResize = function(){
  var win = $(window),
      winWidth =win.width();
  
    if(winWidth <= 640){
      $("body").css({"background-color":"#456"});
    }else if(winWidth > 641 && winWidth <= 1024){
      $("body").css({"background-color":"#951"});
    }else{
      $("body").css({"background-color":"#159"});
    }
  $("body")
     .html("<p>현재 브라우저 가로값은" + win.width() + "입니다.</p>" )
     .find("p").css({"color":"#fff", "font-size":"1.5rem"});
  };
  winResize();
  win.on("resize", winResize);
});
