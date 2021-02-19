# 반복문 loop interate

## 반목문
- while, for ~하는 동안 반복한다.

### while

```javascript

 while(조건 Boolean값){
    // true값 무한루트
   // 반복해서 실행할 코드  ture -> false가 될기까지
 }

 var i = 0; // 반복의 초기화

 while( i < 10 ){
  // 10 보다 작으면 true값, 10보다 크거나 작으면 false값이 된다./ 반복 조건
    i = i + 1;  // 10; 될때 false가 되어 반복문이 끝나게 되는 것이다./ 반복실행
 }

```

### for

```javascript

 for( 초기화; 반복조건; 반복이 될때마다 실행되는 코드) {
   반복해서 실행될 코드
 }

 for( var i=0; i<10; i++) {
   document.write('문자 반복');
 }
```


## 반복문의 제어

### break / continue
- break  반복문을 중간에 중단시키고 싶을 때에 사용한다.
- continue 반복문을 다시 실행 시킨다.

 ```javascript
  for(var i =0; i<1000 ; i++) {
   if(i === 5) { // 반복문 안에 조건문이 들어갈 수 있다는 것,
     break;  // i가 1씩 증가하다가 i가 5가 될때에 true가 될때에 현재 반복문을 종료시키고 나오고 다음 코드를 진행한다.
     continue; // true가 되는 5의 지점에서 순간 중지되고 다시 반복문이 시작 된다.
   }
   document.write("반복문 "+(i*2)+"<br />");

 }
 ```

 ## 반복문의 중첩

 반복문 안에 반복문을 중첩을 시킬 수 있다.

 ```javascript
// 0부터 9까지 변수 i에 순차적으로 값을 할당   /// 디버깅 체크해볼 것
for(var i = 0; i < 10; i++){
    // 0부터 9까지의 변수를 j의 값에 순차적으로 할당
    for(var j = 0; j < 10; j++){
        // i와 j의 값을 더한 후에 출력
        // String은 숫자인 i와 j의 데이터 타입을 문자로 형태를 변환하는 명령이다.
        // String()을 제거하고 실행해보면 의미가 좀 더 분명하게 드러날 것이다.
        document.write(String(i)+String(j)+'<br />');
    }
}
 ```