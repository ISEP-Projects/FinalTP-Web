import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Image } from "react-bootstrap";
import { SetToast } from "./SetToast";
import { connect } from "react-redux";
import { setShowToast } from "../actions";

const NavigationBar = ({ content, showToast, handleShowToast }) => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <SetToast text={content} show={showToast} setShow={handleShowToast} />
      <Navbar.Brand>
        <Image src="/Img/nav_logo.png" height="30" width="130" />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/home">
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/mercs">
          Mercs
        </Nav.Link>
        <Nav.Link as={NavLink} to="/guns">
          Weapons
        </Nav.Link>
        <Nav.Link as={NavLink} to="/jobs">
          Jobs
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  content: state.toast.content,
  showToast: state.toast.show,
});

const mapDispatchToProps = (dispatch) => ({
  handleShowToast: (bool) => dispatch(setShowToast(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
