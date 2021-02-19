# 숫자와 문자

- 정수 0 기준 , -1 , 0 , 2 숫자/ 딱 떨어지는 숫자
- 실수 소수점이 붙어 있는 슷자

포괄적으로 javascript는 그냥 Number이 된다.

# 수의 연산

```javascript

Math.pow(3,2) // 9  3의 2승
Math.round(10.6); // 10  10.6 반올림 .(소수점 자리);
Math.ceil(10.2) // 11, 10.2를 올림
Math.floor(11.2) // 11,  11.2에서 내림
Math.sqrt(3); // 3 3의 제곱근
Math.random(); // 0부터 1.0사이의 램덤한 숫자 1보다 작은 숫자

100 * Math.random(); // 100보다 작은 임의 숫자 난수 램덤한 숫자
Math.round( 100 * Math.random())// 반올림해서 나오는 숫자

```

# 문자의 연산

- 문자는 반드시 "" 큰 따옴표 , '' 홀 따옴표에 안에서 작업을 해야한다.
- \n 줄바꿈이라 약속

```javascript
 alert( 'egoing\'s coding everybody') // \' escape 문자로 역할을 해제시키는 것
 alert( "1" + "1") // "11" 문자와 문자를 더할때
 alert( "conding everybody".length); //16 문자의 길이를 구할때는 문자 뒤엥 .length를 붙인다.

```

