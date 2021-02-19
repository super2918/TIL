# 함수

함수(function)란 하나의 로직을 재실행 할 수 있도록 하는 것으로 코드의 **재사용성**을 높여준다.
유지보수의 용이함, 가독성이 핵심적인 것

```javascript

 function 함수명([인자...[, 인자]]) { //
   코드 내용
   return  반환값 // 그 시점에서 함수가 종료되는 곳
 }

 function numbering(){
    var i = 0;
    while(i < 10){
        document.write(i);
        i += 1;
    }
}

numbering(); //
numbering();
numbering();
numbering();
numbering();


function 더하기2(a,b) {
  return a+b; // 함수가 결과값으 토해내는 결과값, 쓸수 있는 값을 얻을 수 있다는 것
}

console.log( 더하기2(2, 7););

```
셋팅만 함수를 하면  return 값이 필요없지만, 어떤값을 사요하는 것이면 return값이 필요한거

