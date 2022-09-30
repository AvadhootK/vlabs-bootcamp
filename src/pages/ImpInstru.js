import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../assets/img1.svg";

function ImpInstru() {
  return (
    <div>
      <Navbar />
      <div className="p-5 container">
        <h1 className="heading text-center">Important Instructions</h1>
        <hr></hr>
        <Container>
          <Row>
            <Col md={6}>
              {" "}
              <div className="py-2">
                <h4>Prerequisites</h4>
                <ul>
                  <li>Good knowledge of Web Development</li>
                  <li>Git</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Canvas Animation</li>
                </ul>
              </div>{" "}
              <div className="py-2">
                <h4>Instructions</h4>
                <ol>
                  <li>
                    The laptop is required for both online and offline modes.
                  </li>
                  <li>
                    To participate in the bootcamp, students need to submit the
                    Qualifying Tasks(QTs).
                  </li>
                  <li>
                    Only qualified students(QTs qualified) will be eligible for
                    participation in the bootcamp.
                  </li>
                  <li>
                    A list of Selected participants will be displayed on the
                    website.
                  </li>
                  <li>
                    Attendance for both online and offline modes is mandatory
                    for certification.
                  </li>
                  <li>Accommodation will not be provided.</li>
                  <li>
                    <b>Participation is free of cost.</b>
                  </li>
                </ol>
              </div>
            </Col>
            <Col md={6}>
              <img src={img1} alt="html" className="w-100"></img>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default ImpInstru;
