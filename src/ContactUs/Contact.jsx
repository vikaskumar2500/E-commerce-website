import { Button, Form } from "react-bootstrap";
import "./Contact.css";
import { useRef, useCallback } from "react";
const url =
  "https://create-contact-page-default-rtdb.asia-southeast1.firebasedatabase.app/movies";

const Contact = () => {
  const enteredNameRef = useRef();
  const enteredEmailRef = useRef();
  const enteredPhoneRef = useRef();

  const formSubmitHandler = useCallback(
    async (e) => {
      e.preventDefault();
      // console.log("Running");
      const formData = {
        name: enteredNameRef.current.value,
        email: enteredEmailRef.current.value,
        phone: enteredPhoneRef.current.value,
      };

      // making a POST request
      try {
        const responsePost = await fetch(`${url}.json`, {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!responsePost.ok)
          throw new Error("Something went wrong with post request");

        // reseting value
        enteredNameRef.current.value = "";
        enteredEmailRef.current.value = "";
        enteredPhoneRef.current.value = "";
      } catch (error) {
        console.log(error.message);
      }
    },
    [enteredEmailRef, enteredNameRef, enteredPhoneRef]
  );

  return (
    <Form className="contact" onSubmit={formSubmitHandler}>
      <Form.Group className="mb-1" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          minLength={4}
          placeholder="Enter name..."
          ref={enteredNameRef}
        />
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email..."
          ref={enteredEmailRef}
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
      <Button variant="primary" type="submit">
        CONTACT US
      </Button>
    </Form>
  );
};

export default Contact;
