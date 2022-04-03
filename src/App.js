import './App.css';

// jsx 문법 (javascript와 html을 혼용하여 사용)
function App() {
  let name = "신윤철";
  return (
    <div className="App">
      <header className="App-header">
        <h2> 안녕 리액트 {name}</h2>
      </header>
    </div>
  );
}

// ex_module 시스템 (하나만 export 할 수 있음)
export default App;

// common js 모듈 시스템과 다름
// common js module ==> module.exports={} 