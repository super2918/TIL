# 베열 Array

연관된 데이터를 모아서 통으로 관리하기 위해서 사용하는 데이터 타입. 변수가 하나의 데이터를 저장하기 위한 것이라면 배열은 여러개의 데이터를 하나의 변수에 저장하기 위한 것이라 말할 수 있다.

```javascript
function get_member(){
 return ['egoing', 'k8805','soring'];
}

members = get_member();
// document.write(members[i]);

for(var i=0; i< members.length; i++) {
  document.write(members[i].toUpperCase());
  document.write('<br />');****
}

```


# 배열의 조작 - 추가

  ### push
  인자로 전달된 값을 꼬리부분에 추가하는 명령이다.


  ### contact
  복수의 원소를 배열에 추가하는 방법

  ### unshift
  시작점에 원소를 추가하는 방법

  ### splice
  배열의 특정구간을 추출하거나 , 특정구간에 배열을 추가하는 것 <br >
  array.splice(index, howmany, element1, .... , elementN)


# 배열의 조작 - 제거, 정렬

 ### sort

 ### shift, pop;



