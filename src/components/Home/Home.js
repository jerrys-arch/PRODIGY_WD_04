import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Intro from "./Intro";
import Type from "./Type";
import { motion } from "framer-motion";
import useScrollAnimation from "../../hooks/useScrollAnimation";

function Home() {
  const isInView = useScrollAnimation(100);
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: isInView ? 1 : 0 }} 
    transition={{ duration: 1 }}
  >
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi there!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name">  EYERUS MOLLA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Intro />
    </section>
    </motion.div>
  );

}

export default Home;
