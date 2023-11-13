import React from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import pic from "../asstes/images/b.avif";

export default function Projects() {
  return (
    <>
      <div className="container project-section">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={pic} />
              <Card.Body>
                <Card.Title>Temprature coverter</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={pic} />
              <Card.Body>
                <Card.Title>Temprature coverter</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={pic} />
              <Card.Body>
                <Card.Title>Temprature coverter</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={pic} />
              <Card.Body>
                <Card.Title>Temprature coverter</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={pic} />
              <Card.Body>
                <Card.Title>Temprature coverter</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={pic} />
              <Card.Body>
                <Card.Title>Temprature coverter</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
