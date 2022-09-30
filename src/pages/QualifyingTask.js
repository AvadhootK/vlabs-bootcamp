import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

function QualifyingTask() {
  return (
    <>
      <Navbar />
      <div className="container p-5">
        <h1 className="text-center heading">Qualifying Tasks</h1>
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
        <div className="mb-4">
          To participate in the Bootcamp, you need to qualify for the tasks
          given here :&nbsp;
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vSIsrggH4Q8Cwgr2K24zJizw9OptiDLdsL_3CCxShMcxg5mPpEjHxT4eFjhzN3HgDX3JGMvSQnqsdSp/pub"
            target={"_blank"}
            rel="noreferrer"
          >
            Link for Qualifying Tasks(QTs)
          </a>
        </div>
        <div className="mb-4">
          Link for QTs Submission :&nbsp;
          <iframe
            frameborder="0"
            style={{ height: "100%", width: "100%", marginTop: "10px" }}
            title={"form"}
            src="https://forms.zohopublic.in/vlabsbootcamp/form/EventRegistration/formperma/f77GUb0nQ-fFYnQhfMu697RflLJB-rAAbEdWPzBcZTE%27%3E"
          ></iframe>
        </div>
        <div>
          Link for the evaluation process for Qualifying Tasks :&nbsp;
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vQXYz2fhr3ZSmdmXBWWMStXGMY1KgkFZZeTKdl2VChSODy_qv0_BPFy0RnvaDPXzYeAY5z9UtDJ6iI1/pub"
            target={"_blank"}
            rel="noreferrer"
          >
            Evaluation Process
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default QualifyingTask;
