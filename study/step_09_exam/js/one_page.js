// one_page.js

var onePage = function(){
  var gnb_a = $("#gnb").find("a");
  gnb_a.on("click", function(e){
    e.preventDefault();
    var a_hash = $(this.hash),
        offset_top = a_hash.offset().top,
        bodyBox = $("html,body");
   bodyBox.animate({scrollTop:offset_top - 100},1000);
  });
}