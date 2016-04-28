jQuery
===
>  javascript 라이브러리

```
<script>
  $(document).ready(function(){
    // jQuery코드 작성
    // javascript코드 당연히 됨~~~!!!
  });
</script>
```

## jQuery선택자!
1. $() 로 시작하여 () 내부에 작성하도록 한다!!
2. 변수가 아닌이상 css선택자와 동일하게 작성할 수 있다!
3. 자식선택자의 경우! ' > '  :  $("ul>li")   =>  $("ul").children("li") 로 표기 할 수 있다.
4. 자손선택자의 경우! ' 빈칸 ' :   $("ul a") =>  $("ul").find("a") 로 표기 할 수 있다.
5. nth 선택자의 경우! ' :nth-child() '  :
  - $("ul>li:nth-child(2)")  =>  
  - $("ul>li:eq(1)") => 
  - $("ul>li").eq(1) =>
  - $("ul").children("li").eq(1)
6. nth중 first/last선택자 ' :first-child / :last-child '  :
  - $("ul>li:first-child")  =>
  - $("ul>li:first")  =>
  - $("ul>li").first() =>
  - $("ul").children("li").first()
  - $("ul>li:last-child")  =>
  - $("ul>li:last")  =>
  - $("ul>li").last() =>
  - $("ul").children("li").last()
7. 형제선택자 ' + ', ' ~ ' : 
  - $("dl>dt:first + dd") => $("dl>dt:first").next("dd")
  - $("dl>dt:first ~ dd") => $("dl>dt:first").siblings("dd")
  - (jQuery는 이외에도 몇가지가 더 있다!!!)
  - $("dl>dt:last").prev("dd")  // 이전(바로앞)
  - $("dl>dt").eq(3).not()    //  dt중 두번째(dt)가 아닌 것을 선택
  - $(".box").parent()   // class="box" 부모엘리먼트 선택
8. 홀수/ 짝수 선택자(.odd/ .even)
  - $("ul>li:odd") => $("ul>li").odd()   // 홀수(실제 순서는 반대로 보임 왜일가요??)
  - $("ul>li:even") => $("ul>li").even()  // 짝수(실제 순서는 반대로 보임 왜일가요??)
9. 갸(그애~)~~~ 자신(선택한 자신)~~
  - $(this)  선택한 자신 
  -ex)  
```
  $("ul>li").on("click", function(){
     $(this).css({"background-color": "pink"}); 
  })

```
10. 각각 .each()

---
## 속성 변경하기
>2이상의 속성을 변경할 경우 각각의 속성사이에 ' , '로 구분해 준 뒤, 같은 방식으로 css의 속성명과 속성값을 추가할 수 있다.

1. .css() // 스타일시트
  - .css("color" , "#fa0").css("background-color", "#0af").css("font-size", 18 + "rem");
  - .css({"color" : "#fa0", "background-color": "#0af" , "font-size": 18 + "rem"});
  - .css({color : "#fa0", backgroundColor: "#0af" , fontSize: 18 + "rem"});
2. .attr() // 속성 html의 속성을 변경시!!
  - $("img").attr("src","./test2.jpg").attr("alt","테스트 이미지로 변경"); =>
  - $("img").attr({"src":"./test2.jpg", "alt":"테스트 이미지로 변경"});
3. .val() // value form태그사용시 들어가는 값(value)을 삽입
  - $("input").val("값을 변경");
4. .html()  // html 코드 삽입
  - $("p").html('a');
5. .text() //  글씨를 삽입/변경

___
## 이벤트
> 사용자가 웹상에서 특정한 행동을 취하는 것!
ex) click, dblclick, drag, keydown, keyup, scroll, mouseover, mouseout, mouseenter, mouseleave, resize

$(window).on("resize", function(){
  $("body").css("background-color","#a7f");
})
















