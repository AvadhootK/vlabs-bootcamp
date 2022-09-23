import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

function QualifyingTask() {
  return (
    <>
      <Navbar />
      <div className=" container p-5">
        <h1 className="text-center">Qualifying Task</h1>
        <hr></hr>
        To be completed on or before 16/10/2022.<br></br>
        <b>Steps To Participate:</b>
        <ol>
          <li>Open an account on gitlab.com.</li>
          <li>Create a public group (vlabs-coding-challenge).</li>
          <li>
            Inside the group are three public repositories on gitlab.com for
            three challenges.<br></br> Complete the Tasks and push the data to
            the respective repositories, first in the branch (developer), then
            merge into the main branch with the appropriate commit and merge
            title and message.
          </li>
          <li>Fill the QTS submission form on or before 16/10/2022.</li>
        </ol>
      </div>
      <Footer />
    </>
  );
}

export default QualifyingTask;
