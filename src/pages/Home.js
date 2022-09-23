import React from "react";
import Navbar from "../Components/navbar";
import Timeline from "../Components/timeline";
import Footer from "../Components/footer";
import Carousel from "react-bootstrap/Carousel";
// import design2 from "../assets/design2.png";
// import imga from "../assets/imga.jpeg";
import team from "../assets/team.jpeg";
import team3 from "../assets/team3.jpeg";
import flyer1 from "../assets/Flyer1.png";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel variant="dark">
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={flyer1} alt="First slide" />
          {/* <img className="d-block w-100" src={imga} alt="First slide" /> */}
          {/* <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={team3} alt="Second slide" />
          {/* <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={team} alt="Third slide" />
          {/* <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      <Timeline />
      <Footer />
    </>
  );
}

export default Home;
