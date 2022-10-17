import React from "react";
import Navbar from "../Components/navbar";
import Timeline from "../Components/timeline";
import Footer from "../Components/footer";
import Carousel from "react-bootstrap/Carousel";
// import design2 from "../assets/design2.png";
// import imga from "../assets/imga.jpeg";
import team_1 from "../assets/team_1.png";
import team_2 from "../assets/team_2.png";
// import flyer_final from "../assets/flyer_final.png";
// import flyer_final_1 from "../assets/flyer_final_1.png";
import Final_Flyer from "../assets/Final_Flyer.png";
import Final_Flyer_blur from "../assets/Final_Flyer_blur.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import flyer_final_blur from "../assets/flyer_final_blur.jpg";
// import flyer_final_1_blur from "../assets/flyer_final_1_blur.jpg";
import team_1_blur from "../assets/team_1_blur.jpg";
import team_2_blur from "../assets/team_2_blur.jpg";

function Home() {
  return (
    <div>
      <Navbar />
      <Carousel variant="light">
        <Carousel.Item interval={2000}>
          <LazyLoadImage
            src={Final_Flyer}
            alt="First slide"
            PlaceholderSrc={Final_Flyer_blur}
            effect="blur"
            className="d-block w-100"
          />
          {/* <img className="d-block w-100" src={flyer_final} alt="First slide" /> */}
          {/* <img className="d-block w-100" src={imga} alt="First slide" /> */}
          {/* <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <LazyLoadImage
            src={team_1}
            alt="Second slide"
            PlaceholderSrc={team_1_blur}
            effect="blur"
            className="d-block w-100"
          />
          {/* <img className="d-block w-100" src={team_1} alt="Second slide" /> */}
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <LazyLoadImage
            src={team_2}
            alt="Third slide"
            PlaceholderSrc={team_2_blur}
            effect="blur"
            className="d-block w-100"
          />
          {/* <img className="d-block w-100" src={team_2} alt="Third slide" /> */}
        </Carousel.Item>
      </Carousel>
      <Timeline />
      <Footer />
    </div>
  );
}

export default Home;
