import { Card, Container } from "react-bootstrap";

const CardOompa = (props) => {
  const { item } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.image} width="300" />
      <Card.Body>
        <Card.Title>
          <h4>{item.first_name}</h4>
        </Card.Title>
        <Card.Text>{item.gender}</Card.Text>
        <Card.Text>{item.profession}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardOompa;
