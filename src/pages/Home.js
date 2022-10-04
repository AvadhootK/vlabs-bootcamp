import React from "react";
import Navbar from "../Components/navbar";
import Timeline from "../Components/timeline";
import Footer from "../Components/footer";
import Carousel from "react-bootstrap/Carousel";
// import design2 from "../assets/design2.png";
// import imga from "../assets/imga.jpeg";
import team_1 from "../assets/team_1.png";
import team_2 from "../assets/team_2.png";
import flyer_final from "../assets/flyer_final.png";

function Home() {
  return (
    <div>
      <Navbar />
      <Carousel variant="light">
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={flyer_final} alt="First slide" />
          {/* <img className="d-block w-100" src={imga} alt="First slide" /> */}
          {/* <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={team_1} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={team_2} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <Timeline />
      <Footer />
    </div>
  );
}

export default Home;
