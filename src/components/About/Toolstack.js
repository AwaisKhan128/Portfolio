import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiAmazonaws,
  SiAdobephotoshop,
  SiFigma,
  SiAdobexd,
  SiAndroid,
  SiReact,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAndroid />
      </Col>
    </Row>
  );
}

export default Toolstack;
