import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Awais Ahmed Khan </span>
            from <span className="purple"> Mirpurkhas, Pakistan.</span>
            <br />I am a master's graduate in Computer Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Youtubing
            </li>
            <li className="about-activity">
              <ImPointRight /> Project Management
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Making things possible even in insane environment!"{" "}
          </p>
          <footer className="blockquote-footer">Awais</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
