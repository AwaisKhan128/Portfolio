import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/muneerapp.png";
import emotion from "../../Assets/Projects/tbcopters.png";
import editor from "../../Assets/Projects/taraki.png";
import chatify from "../../Assets/Projects/talkinghead.jpg";
import suicide from "../../Assets/Projects/soundwave.jpeg";
import bitsOfCode from "../../Assets/Projects/brrring.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Talking Head"
              description="A US based company works for chrome extension and allows user to call from any browser search pages to the selected app via onClick action. Similar functionality has embedded in an Android App for users to use there mobile app with the same sense. App can be found here 
              https://play.google.com/store/apps/details?id=talk.android.talkinghead&hl=en&gl=US"
              link="https://github.com/AwaisKhan128/talkinghead"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Brrring"
              description="A Foreign based company delivering amazing peer shopping experience where peer traveller can pickup any product ondemand and can be reward accordingly. I developed this application on React Native framework powered by Expo. https://brrring.polt.pk/"
              link="https://github.com/Brrring/brring"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Tarakki Android App"
              description="A Complete White collar Job portal for people seeking for good job opportunities in the area around them. Solution Include complete registration. Job Collections, Connects, Profile, Chat functionalities and much more. App is live on https://play.google.com/store/apps/details?id=com.taraki.android "
              link="https://github.com/taraki-tech-org/taraki-android-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Inventory Control Android App"
              description="A complete solution for super mart inside inventory to customer management system developed for special owners ondemand.  "
              link="https://github.com/AwaisKhan128/MuneerApps"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Soundwave Art"
              description="A US based company ask to develop and application that can scan a soundwave and better answer them in good sense and redirect user to specific voice that save to listen. Python based Deep learning model prediction with the accuracy of 90% and above" 
              link="https://github.com/AwaisKhan128/soundwave"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Tb Copters"
              description="Working as a Senior Android Developer/Engineer in the leading drone based company in germany. They used to deliver seemless experience to their customer in an agriculture field to find problems in the field and solve it related to crops (Coping with the corn borer). Visit https://www.tb-copters.de/en/homepage/"
              link="https://github.com/blaab2/tbcopters_app2"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
