import './App.css';

import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Counter';
import Container from './Container';

// jsx 문법 (javascript와 html을 혼용하여 사용)
// jsx 문법 1. 무조건 닫는 태그가 필요하다. <div></div>같이 닫는 태그가 따로 존재하는 태그나, 셀프 클로징 태그 <image /> 등의 종류가 있다.
// jsx 문법 2. 최상위 태그 규칙 : 가장 바깥에 있는 태그가 필요하다. (모든 태그를 묶는 최상위 태그가 있어야한다.) 아래 예에선 <div className="App"> </div>가 최상위 태그
// 최상위 태그를 두지 않을려면 React.Fragment로 감싸야한다.
// jsx 문법 3. class가 따로 예약어이기때문에 기존 class를 className으로 지정해줘야한다.
function App() {
  let name = "신윤철";

  // react에서 css 적용엔 App.css처럼 css 파일을 만들고 import하는 방법이 있고,
  // 인라인css 작성 방법이 있다. ==> css작성처럼 객체형식으로 작성을 하고 style={} 로 적용하는 방법이 있다.
  // 우선순위는 인라인 css 작성 방식이 더 높다.
  const style = {
    App : {
      backgroundColor : "yellow",
    },
    h2 : {
      color : "red",
    },
    bold_text : {
      color : "teal", 
    }
  }

  // {}에는 변수, 숫자, 문자열, 함수, 식등이 포함될 수 있다. (배열, boolean값등은 렌더링이 안됨)
  const number = 5;

  const counterProps = {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
    e : 5,
    initialValue : 100,
  };
  
  // 만약 Couter의 count 초기값 0을 부모 컴퍼넌트인 App에서 변경하려면? ==> Props를 사용하면 된다.
  // Props : 부모 컴퍼넌트에서 자식 컴퍼넌트에게 어떤 값을 이름을 붙혀 전달하는 방법
  
  return (
    <Container>
      <div className="App" style={style.App}>
        <MyHeader />
          <h2 style={style.h2}> 안녕 리액트 {name}</h2>
          <b style={style.bold_text}>
            {number}는 : {number % 2 === 0 ? "짝수" : "홀수"};
          </b>
          {/* <Counter a={1} b={2} c={3} d={4} e={5} initialValue={100}/> */}
          {/* 위처럼 작성하면 너무 길어져서 counterProps라는 객체를 만들어 사용 */}
          <Counter {...counterProps} />
        <MyFooter />
      </div>
    </Container>
  );
}

// ex_module 시스템 (하나만 export 할 수 있음)
export default App;

// common js 모듈 시스템과 다름
// common js module ==> module.exports={} 