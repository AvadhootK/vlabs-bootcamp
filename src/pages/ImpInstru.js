import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

function ImpInstru() {
  return (
    <div>
      <Navbar />
      <div className="p-5 container">
        <h1 className="heading text-center">Important Instructions</h1>
        <hr></hr>
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
        </div>
        <div className="py-2">
          <h4>Instructions</h4>
          <ol>
            <li>The laptop is required for both online and offline modes.</li>
            <li>Submission of Qualifying Tasks(QTs) is compulsory.</li>
            <li>
              Only qualified students(QTs qualified) will be eligible for
              participation in the bootcamp.
            </li>
            <li>
              A list of Selected participants will be displayed on the website.
            </li>
            <li>
              Attendance for both online and offline modes is mandatory for
              certification.
            </li>
            <li>Accommodation will not be provided.</li>
            <li>Participation is free of cost.</li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ImpInstru;
