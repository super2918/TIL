# Node.js

## 서버란 ?
서빙하는 사람 = 서버  요구할 경우 응답해서 요청한 내용을 보내주는 프로그램 

서버: 요청을 받으면 요청한 내용을 보내주는 프로그램

* 요청 4개 방식

읽기(GET) - 페이지를 읽기 뭔가 읽고 싶을 때 쓰기(POST) - 새로운 글, 포스팅, 댓글 작성하고 요청수정(PUT) -  수정 삭제(DELETE) - 삭제하고 싶을 때 

어떤 사람이  /list라는 페이지를 요청하면 거기에 해당하는 list.html파일을 보내준다.

node.js 환경에서 javascript 문법을 사용하여 작업한다.



Javascript 구동 엔진 v8 

크롬, 파이어폭스, 익스플로러 브라우저들 자바스크립트 읽고 해석 역할

자바스크립트 빠르게 읽고, 해석  웹사이트 랜더링 성능 빨라짐

v8를 살을 붙여서 나온 것이 Node.js



## Node.js란?

자바스크립트를 브라우저 말고도 로컬 PC에서도 실행시켜 줄 수 있는 실행창(런타임)

Node.js Non-blocking이라는 장점 때문에 사용



SNS, 채팅 서비스 요청이 많이 많음

node.js 서버는 설계상 한꺼번에 많은 요청을 받아 줄 수 있음.



Node.js로 자주 만드는 것

SNS, 채팅 서비스 특화된 언어라고 할 수 있다.  수학적 연산이 필요하지 않고,  글자 전달, 여러명에게 처리가 간단한 요청이 들어오는 채팅에 많이 사용한다.스타트업, 프로토 타입 만들기에서도 많이 사용한다.- 초보자에게 쉽고, 탬플릿을 복붙해서 서버를 만들 수 있다.  대용량이 들어와도 나름  감당이 가능하다.  자바스크립트 문법만으로도,  프론트엔드, 백엔드 전부 가능하다는 장점


단점 - 속도가 떨어질 수 있다.  수학연산이나, 이미지 처리 라이브러리가 부족할 수 있다. 