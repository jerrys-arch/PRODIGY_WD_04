import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs"; // Import GitHub icon

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body className="project-card-body">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>

        {/* Tech Tags (Tech Stack) */}
        <div
          className="tech-tags"
          style={{ textAlign: "center", margin: "10px 0" }}
        >
          {/* Dynamically render technology tags for the project */}
          {props.techStack.map((tech, index) => (
            <span key={index} className="badge">
              {tech}
            </span>
          ))}
        </div>

        {/* If the component contains GitHub link and it's not a Blog then, render the GitHub button */}
        {!props.isBlog && props.githubLink && (
          <Button
            variant="primary"
            href={props.githubLink}
            target="_blank"
            style={{ marginLeft: "10px", backgroundColor: "#982483" }}
          >
            <BsGithub /> &nbsp; Code
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
