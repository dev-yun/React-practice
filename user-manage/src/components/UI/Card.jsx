import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
  width: 600px;
  padding: 20px;
  background-color: white;

  border-radius: 20px;
`;

function Card(props) {
  return <CardStyle className={props.className}>{props.children}</CardStyle>;
}

export default Card;
