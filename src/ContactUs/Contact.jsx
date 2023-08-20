import { Button, Form } from "react-bootstrap";
import "./Contact.css";
import React, { useRef, useCallback, useState } from "react";
import Feedback from "./Feedback";

const url =
  "https://create-contact-page-default-rtdb.asia-southeast1.firebasedatabase.app/movies";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFeedback, setIsFeedback] = useState(false);
  const [email, setEmail] = useState("");
  const enteredNameRef = useRef();
  const enteredEmailRef = useRef();
  const enteredPhoneRef = useRef();

  

  const formSubmitHandler = useCallback(
    async (e) => {
      e.preventDefault();
      // console.log("Running");
      setIsLoading(true);
      const formData = {
        name: enteredNameRef.current.value,
        email: enteredEmailRef.current.value,
        phone: enteredPhoneRef.current.value,
      };
      setEmail(enteredEmailRef.current.value);
      // making a POST request
      try {
        const responsePost = await fetch(`${url}.json`, {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await responsePost.json();
        if (!responsePost.ok) throw new Error(data.error.message);
        setIsFeedback(true);
        // reseting value
        enteredNameRef.current.value = "";
        enteredEmailRef.current.value = "";
        enteredPhoneRef.current.value = "";
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        alert(error.message);
      }
    },
    [enteredEmailRef, enteredNameRef, enteredPhoneRef]
  );

  return (
    <React.Fragment>
      {!isFeedback && (
        <Form className="contact" onSubmit={formSubmitHandler}>
          <Form.Group className="mb-1" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              minLength={4}
              placeholder="Enter name..."
              ref={enteredNameRef}
              required
            />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email..."
              ref={enteredEmailRef}
              required
            />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicPhone">
            <Form.Label>Phone Number </Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your phone no..."
              ref={enteredPhoneRef}
              min={1}
              maxLength={10}
            />
          </Form.Group>
          {!isLoading && (
            <Button variant="primary" type="submit">
              CONTACT US
            </Button>
          )}
          {isLoading && <p>Sending request...</p>}
        </Form>
      )}
      {isFeedback && (
        <Feedback
          email = {email}
          onFeedback={(feedback) => setIsFeedback(feedback)}
        />
      )}
    </React.Fragment>
  );
};

export default Contact;
