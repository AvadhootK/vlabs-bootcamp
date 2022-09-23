import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { FiMail } from "react-icons/fi";

function Contact() {
  return (
    <>
      <Navbar />
      <div className=" container text-center p-5">
        <h1>Contact Us</h1>
        <hr></hr>
        <div className="py-2">
          Mr.Shyam Lokhande
          <br></br> Contact No : 7666092060
        </div>
        <div className="py-2">
          Ms.Mrudula Yawalikar<br></br>
          Contact No : 8805464502
        </div>
        <div className="py-2">
          Mr.Abhishek Gaware<br></br>
          Contact No : 9172632281
        </div>
        <p className="mt-2">
          <FiMail size={20} />
          &nbsp;&nbsp;
          <a href="mailto: pvgbootcamp@pvgcoet.ac.in">
            pvgbootcamp@pvgcoet.ac.in
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
