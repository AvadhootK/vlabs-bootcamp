import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { MdDateRange } from "react-icons/md";
// import Card from "react-bootstrap/Card";

function about() {
  return (
    <div className="container p-5">
      <div className="mb-5">
        <h1
          className="text-center mt-4 heading"
          style={{ textDecoration: "none" }}
        >
          Timeline
        </h1>
      </div>
      <div className="pb-5">
        <VerticalTimeline lineColor="black">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#3f414d", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #3f414d" }}
            // date="21/09/2022"
            iconStyle={{ background: "#3f414d", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h4 className="vertical-timeline-element-title mb-2">
              Qualifying Task
            </h4>
            <p>
              <MdDateRange />
              &nbsp;21/09/2022
            </p>
            <Link
              to="/qualifyingtask"
              className="navlink text-light text-decoration-underline"
            >
              <Nav.Link href="qualifyingtask">Qualifying Task Link</Nav.Link>
            </Link>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#3f414d", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #3f414d" }}
            // date="16/10/2022"
            iconStyle={{ background: "#3f414d", color: "#000" }}
            // icon={<WorkIcon />}
          >
            <h4 className="vertical-timeline-element-title ">
              Qualifying Task Submission ends
            </h4>
            <p className="d-flex align-items-center">
              <MdDateRange />
              &nbsp;16/10/2022
            </p>
            {/* <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#3f414d", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #3f414d" }}
            // date="19/10/2022"
            iconStyle={{ background: "#3f414d", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h4 className="vertical-timeline-element-title">
              Announcement of selected participants for the bootcamp
            </h4>
            <p>
              <MdDateRange />
              &nbsp;19/10/2022
            </p>
            {/* <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#3f414d", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #3f414d" }}
            // date="31/10/2022 to 4/11/2022"
            iconStyle={{ background: "#3f414d", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h4 className="vertical-timeline-element-title">Online event</h4>
            <p>
              <MdDateRange />
              &nbsp;31/10/2022 to 4/11/2022
            </p>
            {/* <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#3f414d", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #3f414d" }}
            // date="5/11/2022 to 11/11/2022"
            iconStyle={{ background: "#3f414d", color: "#fff" }}
            // icon={<SchoolIcon />}
          >
            <h4 className="vertical-timeline-element-title">Offline Event</h4>
            <p>
              <MdDateRange />
              &nbsp;5/11/2022 to 11/11/2022
            </p>
            {/* <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p> */}
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(70, 70, 109)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(70, 70, 109)" }}
          date="November 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(70, 70, 109)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(70, 70, 109)" }}
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement> */}
          {/* <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          // icon={<StarIcon />}
        /> */}
        </VerticalTimeline>
      </div>
      {/* <div className="mt-5">
        <Card
          className="text-center"
          style={{ width: "25rem", margin: "auto" }}
        >
          <Card.Header as="h4">Resources</Card.Header>
          <Card.Body>
            <Card.Text>
              We have created a separate document for Resources, you can check
              it out!
            </Card.Text>
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vTiHVJHyGQBrSj_xGLmuwIQZL7MeNCrG3BFcEQu9-CB2Q5xg96fkR9lxH1Nnwk5hOTOCqp99L0OO1MN/pub"
              target={"_blank"}
              rel="noreferrer"
            >
              Resources
            </a>
          </Card.Body>
        </Card>
      </div> */}
    </div>
  );
}

export default about;
