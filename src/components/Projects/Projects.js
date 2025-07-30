import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import EXP from "../../Assets/Projects/EXP Tracker.png";

import PYBOT from "../../Assets/Projects/PYBOT.jpeg";
import DFD from "../../Assets/Projects/DFD (1).png";

import RES from "../../Assets/Projects/RES.png";

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
              imgPath={DFD}
              isBlog={false}
              title="DEEP FAKE DETECTION SYSTEM"
              description="A Deep Fake Detection System is a technology-driven solution designed to identify and differentiate between genuine and manipulated digital content, specifically videos, images, or audio. It aims to combat the misuse of deepfake technology, which leverages artificial intelligence (AI) to create highly realistic but fake content."
              ghLink="https://github.com/Devasiva08/Deep-fake-detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RES}
              isBlog={false}
              title="RESTAURENT WEBSITE"
              description="A modern and visually appealing restaurant website that provides essential information about the restaurant, its menu, services, and contact details. The website offers an interactive and user-friendly experience to engage customers and encourage table reservations or food orders."
              ghLink="https://github.com/Devasiva08/Restaurent-website"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PYBOT}
              isBlog={false}
              title="PYBOT"
              description="PYBOT, a beginner-friendly Python chatbot that helps users learn programming by answering Python-related questions. The chatbot features an intuitive interface built with Tkinter, making it easy for users to engage and interact."
              ghLink="https://github.com/Devasiva08/PYBOT"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EXP}
              isBlog={false}
              title="EXPENSE TRACKER"
              description="An Expense Tracker is a tool or application designed to help individuals or businesses manage and monitor their financial expenses effectively. It is useful for tracking daily, weekly, or monthly spending, ensuring better financial control and planning."
              ghLink="https://github.com/Devasiva08/Expense-tracker"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
