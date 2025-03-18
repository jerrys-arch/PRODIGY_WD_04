import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiWebpack,
  SiNpm,
  SiVercel,
  SiGooglechrome,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglechrome />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebpack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNpm />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
