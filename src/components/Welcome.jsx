import Alert from "react-bootstrap/Alert";

function Welcome() {
  return (
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Sei entrato ufficialmente nel nostro sito EpiBooks, qui potrai comprare
        tutti i tuoi libri preferiti di genere horror .
      </p>
      <hr />
      <p className="mb-0">
        Scegli i libri che ti aggradano di più.
      </p>
    </Alert>
  );
}

export default Welcome;
