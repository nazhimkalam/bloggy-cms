import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Blog from "./Blog/Blog";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    axios
      .get("http://localhost:1337/blogs")
      .then((res) => {
        const sortedData = res.data.sort((a, b) => {
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        });
        setBlogs(sortedData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogsWrapper>
      {loading ? (
        <p>Loading...</p>
      ) : (
        blogs.map((blog, key) => (
          <Blog
            key={key}
            id={blog._id}
            title={blog.title}
            description={blog.description}
            updatedAt={blog.updatedAt}
            createdAt={blog.createdAt}
          />
        ))
      )}
    </BlogsWrapper>
  );
};

export default Blogs;

const BlogsWrapper = styled.div`
  > p {
    margin: 1pc 0;
    text-align: center;
  }
  @media (min-width: 1500px) {
    margin: 0 15%;
  }
`;
