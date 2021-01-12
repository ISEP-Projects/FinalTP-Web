import { Card, Image, Col, Button } from "react-bootstrap";

export const IsAlive = ({ isAlive }) => {
  if (!isAlive) {
    return <Image src="/Img/poison.svg" height="15" width="30" />;
  } else return <Image src="/Img/heart.svg" height="15" width="30" />;
};

export const MercCard = ({ merc, weapons, handleDelete }) => {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Header bg={merc.isAlive === 1 ? "light" : "secondary"}>
          {merc.nickname}
          <IsAlive isAlive={merc.isAlive} />
        </Card.Header>
        <Card.Body>
          <Card.Subtitle className="mb-2">{merc.legalAge}</Card.Subtitle>
          <Card.Text style={{ textAlign: "left" }}>
            <Image src="/Img/gun.svg" height="15" width="30" />
            {weapons
              .filter((weapon) => weapon.id === merc.idWeapon)
              .map((weapon) => weapon.name)}
          </Card.Text>
          <Card.Text style={{ textAlign: "left" }}>
            <Image src="/Img/dollar.svg" height="15" width="30" />
            {merc.eddies}
          </Card.Text>
          <Button variant="outline-danger" onClick={handleDelete}>
            Delete
          </Button>{" "}
          <Button variant="outline-dark" href="#" disabled={!merc.isAlive}>
            Buy Gun
          </Button>{" "}
          <Button variant="outline-info" href="#" disabled={!merc.isAlive}>
            Get job
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
