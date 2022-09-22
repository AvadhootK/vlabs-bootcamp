import React from "react";

function footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="mx-auto container row row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div className="col mb-4">
          {/* <a
          href="/"
          className="d-flex align-items-center mb-3 link-dark text-decoration-none"
        >
          Footer
        </a> */}
          <div>
            <h5>Organised By</h5>
            <p>
              Pune Vidhyarthi Griha's College of Engineering and Technology &
              GKPIM, Pune
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.859051596745!2d73.85019321442843!3d18.490042587426778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c004bc8e1d8f%3A0x12df641707ea878e!2sPVG&#39;S%20COET!5e0!3m2!1sen!2sin!4v1663841538738!5m2!1sen!2sin"
            style={{ border: "0", width: "15rem", height: "15rem" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>

        <div className="col mb-4">
          <h5>Location</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              PVG's COET & GKPIM, 44, Shiv Darshan Rd, Parvati, Nirmal Baug
              Colony, Vidya Nagari, Parvati Paytha, Pune, Maharashtra, 411009
            </li>
          </ul>
        </div>

        <div className="col mb-4">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                About
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Registration
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Selected Participants
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Resources
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/" className="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div> */}
      </div>
      <div>
        <p className="text-muted text-center" style={{ margin: 0 }}>
          © 2022, All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default footer;
