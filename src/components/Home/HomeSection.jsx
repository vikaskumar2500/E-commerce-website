import { Button, Col, Container, Row } from "react-bootstrap";
import "./HomeSection.css";
import { v4 as uuidv4 } from "uuid";

const HomeSection = () => {
  const tours = [
    {
      id: uuidv4(),
      date: "JULY20",
      place: "MUMBAI, MI",
      specPlace: "ENERGY MUSIC THEATRE",
    },
    {
      id: uuidv4(),
      date: "JULY25",
      place: "LUCKNOW, LG",
      specPlace: "CRICKET GROUND",
    },
    {
      id: uuidv4(),
      date: "JULY29",
      place: "MUMBAI, MI",
      specPlace: "ENERGY MUSIC THEATRE",
    },
    {
      id: uuidv4(),
      date: "AUG15",
      place: "DELHI, NDLS",
      specPlace: "FILM CITY",
    },
    {
      id: uuidv4(),
      date: "AUG26",
      place: "PATNA, PNBE",
      specPlace: "CINEMA HALL",
    },
  ];
  return (
    <section className="container">
      <h2>TOURS</h2>
      <Container className="mb-2 tours">
        {tours.map((tour) => (
          <Row className="tour-item" key={tour.id}>
            <Col><span className="tour-date">{tour.date}</span></Col>
            <Col><span className="tour-place">{tour.place}</span></Col>
            <Col xs={4}><span className="tour-spec-place">{tour.specPlace}</span></Col>
            <Col><Button variant="primary">BUY TICKETS</Button></Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default HomeSection;
