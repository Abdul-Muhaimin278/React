import { useEffect, useRef } from "react";
import { Button, Form, Input } from "reactstrap";

export const UseRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username.current, password);
  };

  useEffect(() => {}, []);

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" placeholder="Enter username" ref={username} />
      <Input type="text" placeholder="Enter password" ref={password} />
      <Button color="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
