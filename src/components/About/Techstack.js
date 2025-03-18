import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiJava,
} from "react-icons/di";

import { FaCss3Alt, FaBootstrap } from "react-icons/fa";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiJava />
      </Col>
      
      <Col xs={4} md={3} className="tech-icons">
        <FaCss3Alt /> {/* This can represent TailwindCSS */}
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <FaBootstrap /> {/* This represents Bootstrap */}
      </Col>
    </Row>
  );
}

export default Techstack;
