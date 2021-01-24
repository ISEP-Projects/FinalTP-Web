import React, { useState, useRef } from "react";
import {
  Card,
  Button,
  Col,
  Row,
  Image,
  Overlay,
  Tooltip,
} from "react-bootstrap";

export const GunCard = ({ gun, handleBuy }) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <Col>
      <Card style={{ width: "15rem", marginBottom: "15px" }}>
        <Card.Header>{gun.name}</Card.Header>
        <Card.Body>
          <Row style={{textAlign:"left"}}>
            <Col>
              <Image src="/Img/blood.svg" height="20" width="20" /> {gun.damage}
            </Col>
            <Col>
              <Image src="/Img/price.svg" height="20" width="20" /> {gun.price}
            </Col>
          </Row>
          <Row style={{textAlign:"left"}}>
            <Col>
			<Image src="/Img/accuracy.svg" height="20" width="20" /> {gun.accuracy}
            </Col>
			<Col />
          </Row>
          <Row style={{textAlign:"left"}}>
            <Col>
			<Image src="/Img/bullet.svg" height="20" width="20" /> {gun.firerate}
            </Col>
			<Col />
          </Row>
          <Card.Text>
            <Button variant="link" ref={target} onClick={() => setShow(!show)}>
              Detail
            </Button>
            <Overlay target={target.current} show={show} placement="right">
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  {gun.description}
                </Tooltip>
              )}
            </Overlay>
          </Card.Text>
          <Button
            variant="dark"
            style={{ textAlign: "center" }}
            onClick={() => {
              handleBuy(gun.id);
            }}
          >
            Buy
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
