import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/to do .png";
import taskmaster from "../../Assets/Projects/task master.png";
import ecommerce from "../../Assets/Projects/e-commerce.png";
import led from "../../Assets/Projects/3ed led.png";
import { motion } from "framer-motion";
import useScrollAnimation from "../../hooks/useScrollAnimation";


function Projects() {
  const isInView = useScrollAnimation(100);
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }} 
        transition={{ duration: 1 }}
      >
        
    <Container fluid className="project-section">
      <Particle />
      <Container className="projects">
        <h1 className="project-heading">
          My Recent <strong className="intro">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Fashionista"
              description="Fashion E-commerce mockup website"
              githubLink="https://github.com/jerrys-arch/fashion-ecommerce-mockup"
              techStack={["HTML", "CSS", "Javascript"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={led}
              isBlog={false}
              title="YeneAD"
              description="3ED Led Advertisement mockup website"
              githubLink="https://github.com/jerrys-arch/yenead-3d-led-screens"
              techStack={["React", "Tailwindcss", "Vite"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskmaster}
              isBlog={false}
              title="Task Master"
              description="Responsive product landing page"
              githubLink="https://github.com/jerrys-arch/PRODIGY_WD_01"
              techStack={["HTML", "CSS", "JavaScript"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo List App"
              description="Responsive ToDo List Web App"
              githubLink="https://github.com/jerrys-arch/to-do-list-app"
              techStack={["HTML", "CSS", "JavaScript"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
     </motion.div>
  );
}

export default Projects;

