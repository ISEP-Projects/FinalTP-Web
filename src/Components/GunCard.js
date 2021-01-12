import { Card, Button, Col } from "react-bootstrap";

export const GunCard = ({ gun }) => {
  return (
    <Col>
    <Card className="mb-2" bg={"dark" } text={"light"} style={{ textAlign: "left", width: '18rem' }}>
      <Card.Img
        variant="top"
        src="/Img/gun_1.jpg"
        alt={gun.name}
      />
      <Card.Title>{gun.name}</Card.Title>
      <Card.Text>
        <p>
          Damage: {gun.damage} | Accuracy: {gun.accuracy} | Firerate:{" "}
          {gun.firerate} | Price: {gun.price}
        </p>
        <p>{gun.description}</p>
        <Button variant="light">Buy</Button>
      </Card.Text>
    </Card>
    </Col>
  );
};
