import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

function PhotoGallery() {
  return (
    <>
      <Navbar />
      <div className="container text-center p-5">
        <h1 className="heading">Photo Gallery</h1>
      </div>
      <Footer />
    </>
  );
}

export default PhotoGallery;
