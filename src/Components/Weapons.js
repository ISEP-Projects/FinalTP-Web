import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { GunCard } from "./GunCard";
import axios from "axios";
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./Loading";

const Weapons = () => {
  const [weapons, setWeapons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errMess, seterrMess] = useState();

  useEffect(() => {
    async function getData() {
      await axios
        .get(`${baseUrl}guns/`)
        .then((response) => setWeapons(response.data), setIsLoading(false))
        .catch((error) => seterrMess(error.response.data));
    }
    getData();
  }, []);

  const { mercId } = useParams();
  console.log({ mercId });

  const weapon = weapons.map((gun, index) => (
    <div key={index}>
      <GunCard gun={gun} mercId={mercId} />
    </div>
  ));
  if (isLoading) {
    return (
      <Container>
        <Row>
          <Loading />
        </Row>
      </Container>
    );
  } else if (errMess) {
    return (
      <Container>
        <Row>
          <Col>
            <h4>{errMess}</h4>
          </Col>
        </Row>
      </Container>
    );
  } else
    return (
      <Container>
        <Row>
          <Col>
            <h1>Weapons</h1>
          </Col>
        </Row>
        <Row className="justify-content--center">{weapon}</Row>
      </Container>
    );
};

export default Weapons;
