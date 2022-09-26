import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <>
      <Navbar />
      <div className="container p-5">
        <div className="text-center">
          <h1 className="heading">About Us</h1>
          <hr></hr>
        </div>
        <div className="py-4">
          <Card>
            <Card.Header as="h4" className="text-center">
              Virtual Labs
            </Card.Header>
            <Card.Body>
              {/* <Card.Title></Card.Title> */}
              <Card.Text>
                Virtual Labs is an initiative of Ministry of Education (MoE)
                under the National Mission on Education through ICT. <br></br>
                <p className="mt-3">
                  {" "}
                  <b>
                    <i>Objective of Virtual Labs</i>
                  </b>{" "}
                  <br></br> To provide a complete Learning Management System
                  around the Virtual Labs where the students can perform
                  laboratory experiments online in an interactive and engaging
                  manner on a simulator, and seek an improved insight of the
                  fundamentals through simulations, animated demonstrations, lab
                  manual and self-evaluation pretests, and posttest.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="py-4">
          <Card>
            <Card.Header className="text-center" as="h4">
              What is BootCamp?
            </Card.Header>
            <Card.Body>
              {/* <Card.Title>Special title treatment</Card.Title> */}
              <Card.Text>
                Virtual Labs project aims to develop Virtual Experiments for the
                science and engineering disciplines. There are over 1000
                experiments developed and hosted in the recent past. However,
                with more than 700 universities in the country, there is a need
                to develop more content to fill the syllabus gap. Towards these
                efforts, the VLabs IITB team has extended the development
                efforts with its partners (Nodal centers) to expedite the
                content creation.
                <br></br>
                This involves creating a. Ideation boards and b. Coding for the
                ready Ideation to develop the simulator. This event aims to
                develop the simulator for the existing Ideations in various
                science and engineering domains with the help of the student and
                teacher community.
                <br></br>
                About the event: The coding Bootcamp is open for the students.
                It is going to be a two-week hybrid event. The participation is
                based on a qualification test submission, which the potential
                participants need to qualify. The two-week-long event will
                involve training and content development to build virtual lab
                simulators. The developed content is going to be beta-hosted on
                the VLabsDev server and will be visible with the credits to all
                contributors.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
          </Card>
        </div>

        <div className="py-4">
          <Card>
            <Card.Header className="text-center" as={"h4"}>
              PVG’s College of Engineering and Technology and G. K. Pate (Wani)
              Institute of Management,Pune
            </Card.Header>
            <Card.Body>
              <Card.Text>
                The parent institute Pune Vidyarthi Griha (PVG) is a well-known
                charitable institution in Maharashtra, established in 1909, by a
                group of dedicated and visionary educationists. The primary
                mission of the Institute is to provide progressive and
                value-added education facilities for the deserving, poor
                students of society. Pune Vidyarthi Griha’s College of
                Engineering and Technology and G.K. Pate (Wani) Institute of
                Management is established as a pioneering institute for the
                degree course in PrintingEngineering in 1985 and is affiliated
                to the SPPU, Pune and accredited ‘A’ by NAAC in 2nd cycle. The
                institute is one of the reputed engineering colleges in India
                and is well-known for its strong academics, ICT-based
                innovations, students' participation in R&D and funded Projects,
                and cultural heritage. The institute has a strong industry
                liaison with leading industries and established a Product
                Innovation Lab funded by Dassault Systems, France along with a
                Texas Instruments Center of Excellence. The R&D wing is
                empowered with Kattakar Research Lab with advanced R&D
                facilities. The institute is promoting education using ICT
                through the development of a Smart Classroom with state-of-art
                facilities for video-conferencing and e-content generation. The
                Training and Placement Cell of the institute is continuously
                engaged in grooming students with a unique program of Asia to
                Japan through which students are placed in core Japanese
                companies such as Mitsubishi, Yamaha, YKK, Soliaz, etc.PVG’s
                COET & GPIOM has continuing coordination with IIT, Bombay on
                some of the most advanced platforms like Virtual laboratories
                (VLABs), Spoken Tutorials, and eYantra.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
          </Card>
        </div>

        <div className="py-4">
          <Card>
            <Card.Header className="text-center" as={"h4"}>
              Virtual Labs Regional Centre
            </Card.Header>
            <Card.Body>
              {/* <Card.Title>Special title treatment</Card.Title> */}
              <Card.Text>
                PVG’s COET was designated as Nodal Centre in 2015 and soon in
                2017 was designated as the First Regional center in the country
                by VLabs IIT Bombay. The Regional Centre mentors around 60
                Virtual Labs Nodal centers in the West zone of Maharashtra.
                PVG’s COET is the first private unaided institute in the country
                to develop virtual labs under the mentorship of IIT Bombay. The
                Regional Centre plays a major role in the development of virtual
                labs in close coordination with IIT Bombay in the community
                model of development with other regional teams from Mumbai,
                Aurangabad, Gujarat, and UP. Champion Institutes can apply to
                the Regional Centre for being a Nodal Centre and be a part of
                the VLAB community and contribute to development. During
                Covid-19, 1001 students took online 6500 + experiments from
                home.
                <br></br>
                <div className="mt-4">
                  <h5>Regional Centre Highlights:</h5>
                </div>
                <ul>
                  {" "}
                  <li>
                    PVG’s COET VLabs team of students and faculty initiated the
                    community model & have given a massive contribution of 118
                    virtual experiments and are hosted by IIT Bombay Virtual
                    Labs on National portals of MOE VLabs and VLabsDEV-IIT
                    Bombay.{" "}
                  </li>
                  <li>
                    {" "}
                    The very first Students Club in Virtual Lab Community was
                    established viz.
                  </li>
                  <li>
                    The Digitizers Club. First Regional Centre in the country,
                    declared as the Best Performing Shining Nodal Centre in
                    ‘ABHASI’ MHRD VLab newsletter 2018 & 2019 for excellent
                    rollout and new lab development.
                  </li>{" "}
                </ul>
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
