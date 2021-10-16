import React from "react";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import axios from "axios";

const CreateBlog = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .post("http://localhost:1337/blogs", {
        title: values.title,
        description: values.description,
      })
      .then(() => alert("Blog successfully added!"))
      .catch(() => alert("Something went wrong!"))
      .finally(() => window.location.reload());
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <CreateBlogContainer>
      <h2>Create a Blog</h2>
      <Form
        name="basic"
        form={form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="title"
          rules={[{ required: true, message: "Please enter a blog title!" }]}
        >
          <Input placeholder="Enter Title" />
        </Form.Item>

        <Form.Item
          name="description"
          rules={[
            { required: true, message: "Please enter a blog description!" },
          ]}
        >
          <Input.TextArea placeholder="Enter description" rows={5} />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" size="large">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </CreateBlogContainer>
  );
};

export default CreateBlog;

const CreateBlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2pc;

  button {
    width: 100%;
    background-color: #262626;
    color: #fff;
  }
  form {
    width: 700px;
  }
`;
