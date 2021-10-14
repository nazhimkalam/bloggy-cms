import React from "react";
import styled from "styled-components";
import moment from "moment";

const Blog = (props) => {
  const { title, description, updatedAt, createdAt } = props;
  return (
    <Container>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <p> <small>Created at: {moment(createdAt).fromNow()}</small> </p>
        <p> <small>Updated at: {moment(updatedAt).fromNow()}</small> </p>
      </div>
    </Container>
  );
};

export default Blog;

const Container = styled.div`
  margin: 2pc;
  padding: 1pc;
  > p {
    margin: 1pc 0;
    text-align: justify;
  }
  > div {
    p {
      font-weight: bold;
      color: #666;
    }
  }
`;
