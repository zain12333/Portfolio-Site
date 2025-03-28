import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/ProImg4.png";
import projImg5 from "../assets/img/ProImg2.png";
import projImg6 from "../assets/img/ProImg3.png";
import projImg7 from "../assets/img/ProImg7.png";
import projImg8 from "../assets/img/ProImg8.png";
import projImg9 from "../assets/img/ProImg9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  // First Tab Images
  const firstTabProjects = [
    { title: "Business Startup", description: "Design & Development", imgUrl: projImg1 },
    { title: "Business Startup", description: "Design & Development", imgUrl: projImg2 },
    { title: "Business Startup", description: "Design & Development", imgUrl: projImg3 },
  ];

  // Second Tab Images
  const secondTabProjects = [
    { title: "Business Startup", description: "Design & Development", imgUrl: projImg4 },
    { title: "Business Startup", description: "Design & Development", imgUrl: projImg5 },
    { title: "Business Startup", description: "Design & Development", imgUrl: projImg6 },
  ];
  const thirdTabProjects = [
    { title: "Business Startup", description: "Design & Development", imgUrl: projImg7 },
    { title: "Business Startup", description: "Design & Development", imgUrl: projImg8 },
    { title: "Business Startup", description: "Design & Development", imgUrl: projImg9 },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>A MERN Stack Developer designs, develops, and maintains full-stack applications using MongoDB, Express.js, React.js, and Node.js...</p>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                    {/* First Tab */}
                    <Tab.Pane eventKey="first">
                      <Row>
                        {firstTabProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    {/* Second Tab */}
                    <Tab.Pane eventKey="second">
                      <Row>
                        {secondTabProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    {/* Third Tab */}
                    <Tab.Pane eventKey="third">
                      <Row>
                      {thirdTabProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                       
                      </Row>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
