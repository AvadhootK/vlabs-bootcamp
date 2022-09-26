import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

function FAQs() {
  return (
    <div>
      <Navbar />
      <div className="container p-5">
        <h1 className="text-center heading">Frequently Asked Questions</h1>
        <hr></hr>
        <div class="accordion p-5" id="accordionExample">
          {/* First */}
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is the aim of the Bootcamp?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                The boot camp aims to develop the simulator for the existing
                virtual experiment ideations in various science and engineering
                domains with the help of the student and teacher community.
              </div>
            </div>
          </div>
          {/* Second */}
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Are there any registration fees?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                No. Participation is FREE of cost.
              </div>
            </div>
          </div>
          {/* Three */}
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Will there be accommodation for qualified participants ?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Students have to manage accommodation on their own. No
                accommodation will be provided by the hosting Institute.
              </div>
            </div>
          </div>
          {/* Four */}
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Is there any qualification process?
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Yes. Participants should submit the qualification task within
                the given deadline. The selected participants' list will be
                displayed on the website.
              </div>
            </div>
          </div>
          {/* Five */}
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Do I need to form the team?
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                No. A team will be formed at the bootcamp.
              </div>
            </div>
          </div>
          {/* Six */}
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingSix">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Is the bootcamp online?
              </button>
            </h2>
            <div
              id="collapseSix"
              class="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                The boot camp will be conducted in hybrid mode I.e. One week
                online followed by one week offline.
              </div>
            </div>
          </div>
          {/* Seven */}
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingSeven">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                What is the duration of the bootcamp?
              </button>
            </h2>
            <div
              id="collapseSeven"
              class="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                The duration of boot camp is two weeks (Dates : to be added).
              </div>
            </div>
          </div>
          {/* Eight */}
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingEight">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                Do I need a Laptop for the Bootcamp?
              </button>
            </h2>
            <div
              id="collapseEight"
              class="accordion-collapse collapse"
              aria-labelledby="headingEight"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Yes. Participants should carry their laptop for both online and
                offline mode of boot camp.
              </div>
            </div>
          </div>
          {/* Nine */}
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingNine ">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNine"
                aria-expanded="false"
                aria-controls="collapseNine"
              >
                Is the boot camp open to all the students?
              </button>
            </h2>
            <div
              id="collapseNine"
              class="accordion-collapse collapse"
              aria-labelledby="headingNine"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Boot camp is open to Engineering students (UG /PG) of all
                branches.
              </div>
            </div>
          </div>
          {/* Ten */}
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTen ">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTen"
                aria-expanded="false"
                aria-controls="collapseTen"
              >
                Can I attend only in Online mode?
              </button>
            </h2>
            <div
              id="collapseTen"
              class="accordion-collapse collapse"
              aria-labelledby="headingTen"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Attendance for online plus offline is mandatory.
              </div>
            </div>
          </div>
          {/* Eleven */}
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingEleven">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEleven"
                aria-expanded="false"
                aria-controls="collapseEleven"
              >
                Why should I submit my contact details?
              </button>
            </h2>
            <div
              id="collapseEleven"
              class="accordion-collapse collapse"
              aria-labelledby="headingEleven"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                To receive notification emails regarding the event.
              </div>
            </div>
          </div>
          {/* Twelve */}
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwelve">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwelve"
                aria-expanded="false"
                aria-controls="collapseTwelve"
              >
                Do I get any certificate?
              </button>
            </h2>
            <div
              id="collapseTwelve"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwelve"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Yes, on succesful completion of the two weeks (both online and
                offline modes) of the bootcamp.
              </div>
            </div>
          </div>
          {/* Thirteen */}
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThirteen">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThirteen"
                aria-expanded="false"
                aria-controls="collapseThirteen"
              >
                What are the tentative timings?
              </button>
            </h2>
            <div
              id="collapseThirteen"
              class="accordion-collapse collapse"
              aria-labelledby="headingThirteen"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Online Event Time: 10 am to 9:00 pm <br></br>Offline Event Time
                : 9 am to 4:30 pm
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
}

// write about mode(online/offline)
export default FAQs;
