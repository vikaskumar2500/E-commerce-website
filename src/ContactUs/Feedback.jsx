import { Button } from "react-bootstrap";
import "./Feedback.css";

const Feedback = (props) => {
  const cancelHandler = () => {
    props.onFeedback(false);
  };

  return (
    <div className="modal-contact">
      <div id="title">
        <h3>Contact</h3>
        <Button variant="light" onClick={cancelHandler}>
          X
        </Button>
      </div>
      <div id="content">
        <p>Message sent! We will review it and reply by email.</p>
        <p>Email: {props.email}</p>
      </div>
    </div>
  );
};

export default Feedback;
