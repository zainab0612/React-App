import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., sending data to server)
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className="container-fluid1">
        <div className="login-box text-white">
          <h1 className="text-center ">Log In</h1>

          <Form onSubmit={handleSubmit} className="my-5">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                className="my-2"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="light" type="submit" className="my-4">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
