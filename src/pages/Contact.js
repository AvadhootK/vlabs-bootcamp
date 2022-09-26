import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { FiMail } from "react-icons/fi";
import Card from "react-bootstrap/Card";
function Contact() {
  return (
    <>
      <Navbar />

      <div className="container p-5">
        <div className="text-center">
          <h1 className="heading">Contact Us</h1>
          <hr></hr>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Card className="mb-2">
              <Card.Header>Contact 1</Card.Header>
              <Card.Body>
                <Card.Title> Mr. Shyam Lokhande </Card.Title>
                <Card.Text>Contact No : +91-7666092060</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="mb-2">
              <Card.Header>Contact 2</Card.Header>
              <Card.Body>
                <Card.Title> Mr. Abhishek Gaware </Card.Title>
                <Card.Text>Contact No : +91-9172632281</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="mb-2">
              <Card.Header>Contact 3</Card.Header>
              <Card.Body>
                <Card.Title> Email </Card.Title>
                <Card.Text>
                  {" "}
                  <div>
                    <FiMail size={20} />
                    &nbsp;&nbsp;
                    <a href="mailto: pvgbootcamp@pvgcoet.ac.in">
                      pvgbootcamp@pvgcoet.ac.in
                    </a>
                  </div>{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
