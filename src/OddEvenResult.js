// react의 컴포넌트는 본인이 관리하고 갖는 state가 변경될때마다 리렌더링 되고
// 나에게(자식에게) 내려지는 props가 변경될때마다 리렌더링 되고,
// 내 부모가 리렌더링되면 나도 리렌더링 된다.

const OddEvenResult = ({count}) => {
  return <>{count % 2 === 0 ? "짝수" : "홀수"}</>
}

export default OddEvenResult;