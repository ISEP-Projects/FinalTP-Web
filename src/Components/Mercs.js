import React, { useState } from "react";
import { Image, Container, Row, Col, Button } from "react-bootstrap";
import { MERCS } from "../TestData/mercs";
import { WEAPONS } from "../TestData/weapons";
import { MercCard } from "./MercCard";
import { AddNewMerc } from "./AddNewMerc";

const Mercs = () => {
  const [showAddNewMerc, setShowAddNewMerc] = useState(false);

  const handleShowAddNewMerc = () => setShowAddNewMerc(true);
  const handleCloseAddNewMerc = () => setShowAddNewMerc(false);
  const handleDelete = () => {};
  const weapons = WEAPONS;
  const existedMercs = MERCS;
  const merc =
    existedMercs.length === 0 ? (
      <div></div>
    ) : (
      existedMercs.map((merc, index) => (
        <div key={index}>
          <MercCard merc={merc} weapons={weapons} handleDelete={handleDelete} />
        </div>
      ))
    );

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Mercs</h1>
          </Col>
        </Row>
        <Row className="justify-content--center">
          {merc}
          <Button
            variant="light"
            onClick={handleShowAddNewMerc}
            style={{ width: "18rem", height: "13.4rem", marginLeft: "15px" }}
          >
            <Image src="/Img/plus.svg" height="160" width="40" />
          </Button>
        </Row>
      </Container>

      <AddNewMerc show={showAddNewMerc} handleClose={handleCloseAddNewMerc} />
    </>
  );
};

export default Mercs;
