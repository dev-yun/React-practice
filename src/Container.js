// props에는 컴포넌트도 들어갈 수 있다.
// 이 예제에선 Container의 props에 App.js의 return 태그들을 모두 children이라는 props로 받아
// 인라인 css로 스타일을 준 <div>태그로 감쌌다.

const Container = ({children}) => {
  console.log(children);
  return (
    <div style={{margin: 20, padding: 20, border: "1px solid gray"}}>
      {children}
    </div>
  );
};

export default Container;