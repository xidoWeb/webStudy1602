## javascript

### script 작성위치
1. head영역 내부에 작성(inline script)
2. body영역에 작성
  - html 코드내부에 작성
  - body 말미에 작성
3. 외부에서 불러오는 방법

### javascript 기초형태 및 불러오기
```
<script src=""></script> // 외부 문서 불러오기, script내부에 작성x
<script type="text/javascript"></script> // script 기본형태

```

### 간단한 이해해야하는 내용
1. 주석 
  - // 한줄주석(간단한 설명)
  - /* */ 여러줄 주석(지시, 가이드)
2. 문자일경우 "", ''표기 짝은 맞출것!
3. 내용이 끝났을경우 ;
4. 사용자가 이해할 수 있게 코드을 이쁘게 이쁘게 이쁘게 정리!!
5. 속도, 작업자의 원활한(쾌적한) 환경을 위해서 var를 사용!!
6. 변수 선언시 var가 없어도 변수는 선언된다!! 하지만 사용하지 말자!!
7. 결과물을 확인하는 방법 
  - document.writeln(); // 브라우저에서 보이기(실제 어떠한 표현시에만 사용)
  - alert(); // 메세지창
  - console.log(); // 주로 작업 과정/결과 확인시(개발자모드에서 확인)
8. 결과물 처리하는 방법***
  - return : 결과물이 보이지 않는다.( 도출값을 임시로 저장!! )

### 선택자!!
1. tagName 선택자:  document.getElementsByTagName();
2. class 선택자: document.getElementsByClassName();
3. id 선택자: document.getElementById();
4. ECMA5 추가된 선택: document.querySelector();  // id, class, tagname

* 항상 변수를 생활화 해라!!
* 변수로 선언후 class선택시.... 
* 사용할때 변수[]로 표기(배열~~~)

### 입력 또는 생성!!
1. 코드 생성하기 :  document.createElement();
2. 내부에 작성:  .innerHTML = "";

___
### javascript 형식
1. number  : 숫자
2. string  : 문자
3. boolean : 참(true)/거짓(false)
4. 배열     : Array  [a,b,c,d,];
5. 객체     : Object {a:1, b:2, c:3};      
```
  var box = {};
  box = {a:1, b:2, c:3};
  box.b = 77;  // {a:1, b:77, c:3};
```
6. 함수     : function(){};
```
  function box(){
    var a = 1;
    console.log(a);
  };
  box();
  
  var box2 = function(){};
    box2();
  
  (function(){  })();  // 즉시실행함수

```
7. null/undefined
```
var box = null, // null
    box2;       // undefined
```



> 재귀함수는 함수 안에서 자신을 호출하는 형식
자기호출함수는 해석과 동시에 실행되는 코드블럭








