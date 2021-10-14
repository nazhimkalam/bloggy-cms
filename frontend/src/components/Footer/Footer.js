import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <p>@nazhimkalam</p>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5vh 0;
  background-color: whitesmoke;
  p {
    color: #333;
  }
`;
