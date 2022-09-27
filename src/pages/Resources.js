import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

function Resources() {
  return (
    <>
      <Navbar />
      <div className="text-center p-5 container">
        <h1 className="heading">Resources</h1>
        <hr></hr>
        <div>
          We have created a separate document for Resources, you can check it
          out! <br></br>
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vTiHVJHyGQBrSj_xGLmuwIQZL7MeNCrG3BFcEQu9-CB2Q5xg96fkR9lxH1Nnwk5hOTOCqp99L0OO1MN/pub"
            target={"_blank"}
            rel="noreferrer"
          >
            Resources
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Resources;
