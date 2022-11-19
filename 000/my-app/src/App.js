import React from 'react';
import styled from 'styled-components';

const OneButton = styled.button`
  color: red;
`;

const TwoButton = styled(OneButton)`
  font-size: 30px;
`;

const Hello = ({ className }) => {
  return <button className={className}>hello world</button>;
};

const ThreeButton = styled(Hello)`
  font-size: 30px;
`;

const App = () => {
  return (
    <div>
      <OneButton>hello world</OneButton>
      <TwoButton>hello world</TwoButton>
      <Hello />
      <ThreeButton />
    </div>
  );
};

export default App;
