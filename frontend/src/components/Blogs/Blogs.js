import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Blog from "./Blog/Blog";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = useCallback(async () => {
    axios
      .get("http://localhost:1337/blogs")
      .then((res) => {
        setBlogs(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogsWrapper>
      {blogs.map((blog, key) => (
        <Blog key={key} id={blog._id} title={blog.title} description={blog.description} updatedAt={blog.updatedAt} createdAt={blog.createdAt} />
      ))}
    </BlogsWrapper>
  );
};

export default Blogs;

const BlogsWrapper = styled.div``;
