import { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function Main() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      `The following sign-in attempt was made: Email=${email}, Password=${password}`
    );
    setPassword("");
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div
      id="container"
      className="
      d-flex
      flex-column
      container-fluid
      h-100
      bg-light
      "
    >
      <Image
        src="/pizzafox.png"
        className="
        w-50
        align-self-end
        m-3 mb-5
        "
      />
      <Form
        onSubmit={handleSubmit}
        className="container w-75 d-flex flex-column"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              onChange={handleEmailChange}
              type="email"
              placeholder="name@example.com"
            />
          </FloatingLabel>{" "}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              onChange={handlePasswordChange}
              type="password"
              placeholder="Password"
            />
          </FloatingLabel>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
