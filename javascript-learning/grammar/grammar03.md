# 연산자


## 대입 연산자

###  =

 이항 연산자자라 말한다. 우항의 값을 좌항에 대입하는 것을 말한다.

 ```javascript
  a = 1  // 1를 a 대입핟다.
 ```

## 배교연산자

###  == (equal operator)
 -  동등 비교 연산자로 좌황과 우황을 비교해서 서로 값이 같다면 ture 아니면 false가 된다. 값은 값이라 인정 실질적 정보(데이터)가 같다고하면 같다.


###  === (strict equal operator)
- 엄격한 일치 연산자, 좌황과 우황의 정보가 같을 뿐만 아니라 데이터 타입까지 비교를 한다. `큰 프로그램을 만들 경우는 엄격한 문법을 적용시킨다. 데이터 타입이 다른 것은 다른 것으로 인식한다.`

-

```javascript
  alert( 1 == "1") // true
  alert( 1 === "1"); // false - 데이터 타입까지 일치해야 한다.

  alert( null == undefined ); // true
  alert( null === undefined ); // false

  /*
    null => 값이 없다.
    undefind  => 정의 되지않았다. 현재 값이 정해지지 않았다.
    의미론적은 비슷하지만 null은 프로그래머가 의도적으로 값을 지정하지 않는 것,
    undefind는 프로그래머가 의도인 부분이 아니다.
    alert( null === undefined ); // false 이 경우는 프로그래머의 의도의 여부를 엄격하게 보면 다름 인식한다.

     데이터의 타입
    true/ false = Boolean

  */

  alert( true == 1); // true 동등연산자에서 true ==  1 / true값을 1로 간주한다. 1이 아닌 숫자들을 false로 간주한다.
  alert( true === 1); // false 일치 연산자에서는 엄밀히 말하면 다르기 때문에 false가 나온다.

  alert( true == '1'); // true
  alert( true === '1'); // false

  alert( 0 === -0); // true 양수던 음수던 true값이 나온다.
  alert( NaN === NaN); // false  서로 계산을 할 수 없는 것, 숫자가 아님을 뜻하기 때문에 false가 된다.

```

> ( == vs === ) https://dorey.github.io/JavaScript-Equality-Table/


## 부정과 부등호

### !=
- `!` 부정을 의미한다. 같지 않다

### !==
- `'!='` 와 `'=='`의 관계와 같다. 정확하게 같지 않다는 의미다.

### >
-  좌항이 우항보다 크면 참, 그렇지 않으면 거짓을 알려주는 연산자, `<` 좌항이 우항보다 작은면 참, 크면 거짓이 된다.

### >=
- `'>='` 좌항이 우항보다 크거나 같다. `'<='`는 반대로 좌항이 우항보다 작거나 같다.