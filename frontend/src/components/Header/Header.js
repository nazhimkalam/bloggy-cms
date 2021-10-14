import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <h1>Bloggy</h1>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10vh 0;
  background-color: whitesmoke;
  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: #333;
  }
`;
