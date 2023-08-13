import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FromContainer from "../components/FormContainer";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <FromContainer>
      <h1>Sign up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="name">
          <Form.Control
            type="text"
            placeholder="ENter Name"
            value={name}
            oncChange={(e) => setname(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="email">
          <Form.Control
            type="email"
            placeholder="ENter email"
            value={email}
            oncChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>


        <Form.Group className="my-2" controlId="email">
          <Form.Control
            type="password"
            placeholder="ENter Password "
            value={password}
            oncChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        
        <Form.Group className="my-2" controlId="confirmPassword">
          <Form.Control
            type="password"
            placeholder="ENter Password Again "
            value={ConfirmPassword}
            oncChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        
        
        <button type="submit" variant="primary" className="mt-3">
          Sign Up
        </button>
       
       
        <Row className="py-3">
          <Col>
            Already have an account ? <Link to="/login">Login</Link>
          </Col>
        </Row>
      </Form>
    </FromContainer>
  );
};
export default RegisterScreen;
