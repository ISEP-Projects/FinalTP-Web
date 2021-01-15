import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Image, Container, Row, Col, Button } from "react-bootstrap";
import { MercCard } from "./MercCard";
import { AddNewMerc } from "./AddNewMerc";
import { getMercs } from "../actions/index";
import { Loading } from "./Loading";
import axios from "axios";
import { baseUrl } from "../shared/baseUrl";

const Mercs = () => {
  const [showAddNewMerc, setShowAddNewMerc] = useState(false);
  const [mercs, setMercs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errMess, seterrMess] = useState();
  const [weapons, setWeapons] = useState([]);

  const handleShowAddNewMerc = () => setShowAddNewMerc(true);
  const handleCloseAddNewMerc = () => setShowAddNewMerc(false);
  const handleDelete = () => {};

  useEffect(() => {
    //getMercsFromApi();
    async function getData() {
      await axios
        .get(`${baseUrl}merc/Allmercs/`)
        .then((response) => setMercs(response.data), setIsLoading(false))
        .catch((error) => seterrMess(error.response.data));
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      await axios
        .get(`${baseUrl}guns/`)
        .then((response) => setWeapons(response.data))
        .catch((error) => seterrMess(error.response.data));
    }
    getData();
  }, []);

  const merc = mercs.map((merc, index) => (
    <div key={index}>
      <MercCard merc={merc} weapons={weapons} handleDelete={handleDelete} />
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

const mapStateToProps = (state) => ({
  mercs: state.mercs.mercs,
  isLoading: state.mercs.isLoading,
  errMess: state.mercs.errMess,
});

const mapDispatchToProps = (dispatch) => ({
  getMercsFromApi: () => {
    dispatch(getMercs());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Mercs);
