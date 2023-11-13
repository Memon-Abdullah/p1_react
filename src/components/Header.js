import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";


const style={
  textDecoration: 'none',
  color:"white"
}


export default function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" variant="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#Herosection"><span className="text-white">CodeBy</span><span className="text-danger">Abdullah</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link > <Link style={style} to={"/"}> Home</Link></Nav.Link>
              <Nav.Link > <Link style={style} to={"/Project"}> Projects</Link> </Nav.Link>
              <Nav.Link > <Link style={style} to={"/About"}> About Us</Link> </Nav.Link>
              <Nav.Link > <Link style={style} to={"/Contact"}> Contact Us</Link> </Nav.Link>

              {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-danger">Hire me</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
