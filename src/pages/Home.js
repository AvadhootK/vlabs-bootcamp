import React from "react";
import Navbar from "./Components/navbar";
import About from "./Components/about";
import Footer from "./Components/footer";
import flyer from "./assets/flyer.png";
import design from "./assets/design/5884945.jpg";

function Home() {
  return (
    <>
      <Navbar />

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              height={408}
              alt="700x500"
              src={design}
              className="d-block w-[612]"
            />
          </div>
          <div className="carousel-item">
            <img
              width={900}
              height={700}
              alt="900x500"
              src={flyer}
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              width={900}
              height={700}
              alt="900x500"
              src={flyer}
              className="d-block w-100"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <About />
      <Footer />
    </>
  );
}

export default Home;
