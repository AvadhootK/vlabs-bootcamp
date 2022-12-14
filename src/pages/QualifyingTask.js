import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

function QualifyingTask() {
  return (
    <>
      <Navbar />
      <div className="container p-5">
        <h1 className="text-center heading">Registration</h1>
        <hr></hr>
        {/* To be completed on or before 16/10/2022.<br></br>
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
        </ol> */}
        <div>
          <h5>
            <b>Steps for Registration</b>
          </h5>
          <ol>
            <li>
              Register yourself on{" "}
              <a
                href="https://vlabsdev.in/codingclub/"
                target={"_blank"}
                rel="noreferrer"
              >
                VLabsDev Coding Club Platform.
              </a>{" "}
            </li>
            <li>
              After logging in, under your dashboard, go through the Fundamental
              and Advanced Preparatory Coursework.
            </li>
            <li>Complete the Qualifying Tasks</li>
            <li>Submit the Gitlab links to the tasks on your dashboard.</li>
            <li>Finalists will be announced after the evaluation.</li>
          </ol>
          <b>Last Date for Step 4 is 27th Oct 2022.</b> The form link will be
          disabled after the last date.
        </div>
        {/* <div className="mb-4">
          Register to participate in the Bootcamp :&nbsp;
          <a
            href="https://vlabsdev.in/codingclub/"
            target={"_blank"}
            rel="noreferrer"
          >
            Click Here
          </a>
        </div>

        <div>
          To participate in the bootcamp, students need to submit the Qualifying
          Tasks(QTs).
          <br />
          <br />
          Only qualified students(QTs qualified) will be eligible for
          participation in the bootcamp.
          <br />
          <br />
          Details about the Evaluation process :&nbsp;
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vQXYz2fhr3ZSmdmXBWWMStXGMY1KgkFZZeTKdl2VChSODy_qv0_BPFy0RnvaDPXzYeAY5z9UtDJ6iI1/pub"
            target={"_blank"}
            rel="noreferrer"
          >
            Click Here
          </a>
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default QualifyingTask;
