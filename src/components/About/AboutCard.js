import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there  <span className="intro"> Eyerus </span>  here.
            Born and raised in <span className="intro"> Debretabor, Ethiopia.</span>
            <br />I'm a software engineering third year student at Bahir Dar University.
            <br />
            <br />
            Apart from coding, what do I enjoy?
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
