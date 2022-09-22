import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function about() {
  return (
    <>
      <div className="py-5">
        <h1
          className="text-center mt-4"
          style={{ textDecoration: "underline" }}
        >
          Timeline
        </h1>
      </div>
      <div className="time-line">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            //   whatsapp kia hai ha
            contentStyle={{ background: "rgb(70, 70, 109)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(70, 70, 109)" }}
            date="21st Sept 2022"
            iconStyle={{ background: "rgb(70, 70, 109)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h4 className="vertical-timeline-element-title text-light">
              Qualifying Task Submission
            </h4>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(70, 70, 109)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(70, 70, 109)" }}
            date="16th Oct 2022"
            iconStyle={{ background: "rgb(70, 70, 109)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h4 className="vertical-timeline-element-title text-light">
              Qualifying Task Submission ends
            </h4>
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
            contentStyle={{ background: "rgb(70, 70, 109)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(70, 70, 109)" }}
            date="19th Oct 2022"
            iconStyle={{ background: "rgb(70, 70, 109)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h4 className="vertical-timeline-element-title text-light">
              Announcement of selected participants for the bootcamp
            </h4>
            {/* <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(70, 70, 109)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(70, 70, 109)" }}
            date="31st Oct to 4th Nov 2022"
            iconStyle={{ background: "rgb(70, 70, 109)", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <h4 className="vertical-timeline-element-title text-light">
              Online event
            </h4>
            {/* <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(70, 70, 109)", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(70, 70, 109)" }}
            date="April 2013"
            iconStyle={{ background: "rgb(70, 70, 109)", color: "#fff" }}
            // icon={<SchoolIcon />}
          >
            <h4 className="vertical-timeline-element-title text-light">
              Offline Event
            </h4>
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
    </>
  );
}

export default about;
