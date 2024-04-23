import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import horror from "../data/horror.json";

const AllTheBooks = () => {
    return (
      <Container>
        <Row className="justify-content-center mt-5">
          {horror.map((book) => (
            <Col key={`book-${book.asin}`} xs={2} className="mb-4">
              <Card style={{ width: "10rem" }}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.price}</Card.Text>
                  <Button variant="primary">Compra ora</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  

export default AllTheBooks;
