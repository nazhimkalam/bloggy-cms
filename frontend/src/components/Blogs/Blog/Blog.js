import React from "react";
import styled from "styled-components";
import moment from "moment";
import { Button } from "antd";
import axios from "axios";

const Blog = (props) => {
  const { id, title, description, updatedAt, createdAt } = props;

  const deleteBlog = () => {
    axios
      .delete(`http://localhost:1337/blogs/${id}`)
      .then(() => alert("Successfully deleted blog!"))
      .catch(() => alert("Error deleting blog!"))
      .finally(() => window.location.reload());
  }

  const updateBlog = () => {
    const updatedTitle = prompt("Enter new title");
    const updatedDescription = prompt("Enter new description");

    axios.put(`http://localhost:1337/blogs/${id}`, {
      title: updatedTitle,
      description: updatedDescription,
    })
      .then(() => alert("Successfully updated blog!"))
      .catch(() => alert("Error updating blog!"))
      .finally(() => window.location.reload());

  }

  return (
    <Container>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <p>Created at: {moment(createdAt).fromNow()}</p>
        <p>Updated at: {moment(updatedAt).fromNow()} </p>
      </div>
      <section>
        <Button onClick={updateBlog}>Update</Button>
        <Button danger onClick={deleteBlog} >Delete</Button>
      </section>
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
  > section{
    float: right;
    button{
      margin: .5rem;
    }
  }
`;
