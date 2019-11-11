import React from "react";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Button>Hello</Button>
      <Button danger>Hello</Button>
      <Anchor href="http://www.google.co.kr">Go to google</Anchor>
    </Container>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? "#e74c3c" : "#2ecc71")};
`;

const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

export default App;
