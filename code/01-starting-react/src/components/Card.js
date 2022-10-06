import "./Card.css";

/*
children => 범용적인 component로 자식 component를 감쌀때, 자식 component나 요소로 어떤 요소가 들어올지 예상할 수 없을때 사용한다.
부모 component의 props에 존재하는 children 속성을 사용하여 하위 component나 자식 요소를 받아 사용할 수 있게 된다. 

이러한 테크닉을 컴포지션이라고 한다. (children prop)
*/

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
