import React, { useState, useRef, useContext } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";

import "./Login.css";
import MyContext from "../../store/MyContext";

const Login = (props) => {
  const [login, setLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const history = useHistory();

  const authCtx = useContext(MyContext);

  let url = null;
  if (login) {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAi_zDvXq4IuDzKX_WmaHKicFr5Tg3xk8Y";
  } else {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAi_zDvXq4IuDzKX_WmaHKicFr5Tg3xk8Y";
  }

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const enteredEmailRef = emailInputRef.current.value;
    const enteredPasswordRef = passwordInputRef.current.value;

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmailRef,
          password: enteredPasswordRef,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsLoading(false);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error.message);

      // console.log(data);
      const token = data.idToken;
      authCtx.login(token);

      // storing local storage
      localStorage.setItem("token", token);
      localStorage.setItem('email', emailInputRef.current.value);

      emailInputRef.current.value = "";
      passwordInputRef.current.value = "";
      history.push("/product");
    } catch (error) {
      setIsLoading(false);
      alert(error.message);
    }
  };

  return (
    <Form className="form-inline" onSubmit={formSubmitHandler}>
      <h2 className="mb-3">{login ? "Login" : "Sign Up"}</h2>
      <fieldset>
        <Form.Group className="mb-3" sm={2}>
          <Form.Label htmlFor="email">Email</Form.Label>
          <InputGroup>
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control
              type="email"
              id="email"
              placeholder="Enter email..."
              ref={emailInputRef}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password..."
            ref={passwordInputRef}
          />
        </Form.Group>

        {/* {!login && (
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              type="confirm-password"
              placeholder="Enter confirm-password..."
              ref={confirmPasswordInputRef}
            />
          </Form.Group>
        )} */}

        <div className="forgot-password">
          <NavLink to="/login" className="">
            Forgot password?
          </NavLink>
        </div>

        {!isLoading && (
          <Button variant="primary" type="submit">
            {login ? "Login" : "Create Account"}
          </Button>
        )}
        {isLoading && <p>Sending request...</p>}
      </fieldset>
      <div className="create-new-account">
        <Button
          variant="outline-info"
          type="button"
          className="my-3"
          onClick={() => setLogin((prev) => !prev)}
        >
          {login ? "Create new Account" : "Already have account"}
        </Button>
      </div>
    </Form>
  );
};

export default Login;
