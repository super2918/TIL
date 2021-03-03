# 셀렉터 (Selector, 선택자)


# inline
- inline요소 안에는 block요소를 포함할 수 없다.
- inline요소 뒤에 공백(엔터, 스페이스)이 있는 경우, 정의하지 않는 space `-4px` 자동지정.
- `width, height, margin-top, margin-bottom` 프로퍼티를 저장할 수 없다. 상하 여백은`line-height` 지정한다.

# inline-block

- block 레벨 요소, inline 레벨 요소 두가지의 프로퍼티를 모두 통해 제어할 수 있다.
- inline-block 요소 뒤에 공백(엔터, 스페이스)이 있는 경우, 정의하지 않는 space `-4px` 자동지정.


# position

### position: relative;
  - 부모의 width값, height이 적용이된다. 물론 height값이 auto로 될땡 가지고 있는 자식의 요소의 높이가
  최종 높이값이 되는거 같음

###  position: absolute;
  - absolute 선언시 block의 레벨 요소의 width는 inline 요소와 같이 content에 맞게
  변화됨으로 적절한 width값이 지정되어야 한다.

### position: fixed
  - 부모의 관계의 상관없이 브라우저의 viewport 기준으로 좌표프로퍼티 top, bottom, left, right을 사용하여
  위치시킨다.
  스크롤이 되더라도 화면에서 사라지지 않고 항상 같은 곳에 위치한다.
  fixed  프로퍼티 선언시, block 요소의 width는 inline 요소와 같이 content에 맞게 변화되므로
  width값을 지정해야한다.


# 벤더 프리픽스
- https://caniuse.com/
- 브라우저의 버전이 올라감이 따라 벤더 프리픽스를 사용하지 않아도 되나, 구형 브라우저를 지원하기 위해 사용할 필요가 있다.
- 사이트에서 다운받아서 include만 해주면 벤터프리픽스를 사용하지 않고 모든 CSS를 사용할 수 있다. http://leaverou.github.io/prefixfree/

<details markdown="1">
  <summary> summnary title 작성</summary>

  Browser  | 	Vendor Prefix
  ---------|----------
  IE or Edge | -ms
  Chrome, Safari, IOS Safari, Android Browser, Chrome for Android | -webkit-
  Firefox | -moz-
  Opera | -o-

 </details>


> Reference
> - https://bssow.tistory.com/202