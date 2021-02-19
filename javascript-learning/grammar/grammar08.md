# 객체 Object

 객체 vs 배열  자동 배열, 객체는 index 값으로 문자나, 숫자로 구분할 수 있는 점이 가시적인 차이점
 객체는 데이터로 담는 그릇 관점이라 본다.

 ```javascript
 var gardes = { 'egoing' : 10, 'test2': 6, 'test3': 5};

 ```

```javascript
 var grades = {}; // 비어있는 객체를 만들고
 grades['egoing'] = 10;
 grades['test2'] = 6;
 grades['test3'] = 5;
 ```

 ```javascript
 var grades = new Object(); // 비어있는 객체를 만들고  new Object(); = {} 같은 의미
 grades['egoing'] = 10;
 grades['test2'] = 6;
 grades['test3'] = 5;
 ```

<!--
 ## 객체의 반복문 -->
