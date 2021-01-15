import { Card, Button, Col, Row, Image } from "react-bootstrap";
import axios from "axios";
import { baseUrl } from "../shared/baseUrl";

export const GunCard = ({ gun, mercId }) => {
  const handleBuy = () => {
    axios
      .put(`${baseUrl}merc/buygun/${mercId}/${gun.id}`)
      .then((res) =>
        alert(
          "Hello " +
            res.data.nickname +
            ", you bought " +
            gun.name +
            ", you have " +
            res.data.eddies +
            " eddies left"
        )
      )
      .catch((err) => alert(err));
  };

  const button = !mercId ? (
    <div></div>
  ) : (
    <Button
      variant="dark"
      style={{ textAlign: "center" }}
      onClick={handleBuy}
    >
      Buy
    </Button>
  );
  return (
    <Col>
      <Card style={{ width: "15rem", marginBottom: "15px" }}>
        <Card.Header>{gun.name}</Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <Image src="/Img/blood.svg" height="15" width="30" /> {gun.damage}
            </Col>
            <Col>
              <Image src="/Img/accuracy.svg" height="15" width="30" />{" "}
              {gun.accuracy}
            </Col>
          </Row>
          <Row>
            <Col>
              <Image src="/Img/bullet.svg" height="15" width="30" />{" "}
              {gun.firerate}
            </Col>
            <Col>
              <Image src="/Img/price.svg" height="15" width="30" /> {gun.price}
            </Col>
          </Row>
          <Card.Text style={{ textAlign: "left" }}>{gun.description}</Card.Text>
          {button}
        </Card.Body>
      </Card>
    </Col>
  );
};
