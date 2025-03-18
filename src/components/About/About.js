import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import { motion } from "framer-motion";
import useScrollAnimation from "../../hooks/useScrollAnimation";


function About() {
  const isInView = useScrollAnimation(100);
  return (
     <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }} 
        transition={{ duration: 1 }}
      >
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              A little about <strong className="intro">ME</strong>
            </h1>
            <Aboutcard />
          </Col>
         
        </Row>
        <h1 className="project-heading">
          Professional <strong className="intro">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="intro">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
    </motion.div>
  );
}

export default About;
