import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

function Participants() {
  return (
    <>
      <Navbar />
      <div className="text-center p-5 container">
        <h1 className="heading">Selected Participants</h1>
        <hr></hr>
        <div>Here is the list of selected participants : </div>
        <a
          href="https://docs.google.com/document/d/1SH9Ohp3sdUEM_Msu4BAn1jo9G0Q08In-LminWmXTq4o/edit#heading=h.r7zpupvoqits"
          target={"_blank"}
          rel="noreferrer"
        >
          Participants
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Participants;
