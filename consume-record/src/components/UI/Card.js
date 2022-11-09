import "./Card.css";

/*
composition(합성)
React는 상속 대신 합성을 통해 컴포넌트 간에 코드를 재사용한다.
componentA(props(a)) => componentB(props(a)) => componentC(props(a)) 이런식으로 props drilling으로 props를 전달하는 방식을 개선할 수 있다.

<componentA>
  <componentB>
    <componentC>
    </componentC>
  </componentB>
</componentA>

composition을 사용하면 이처럼 코드를 변경할 수 있는데, 이때 component에는 어떤 요소들이 자식으로 들어올지 모르니 props.children이라는 속성을 사용해야 한다.
props.children에는 해당하는 컴포넌트 하위의 모든 자식 component가 구축된 방식에 맞게 들어간다.

children => 범용적인 component로 자식 component를 감쌀때, 자식에 어떤 component또는 어떤 요소가 들어올지 예상할 수 없기 때문에 사용한다.
부모 component의 props에 존재하는 children 속성을 사용하여 하위 component나 자식 요소를 모두 받는다.
*/

function Card(props) {
  const Tag = props.as || "div";
  const classes = "card " + props.className;

  return <Tag className={classes}>{props.children}</Tag>;
}

export default Card;
