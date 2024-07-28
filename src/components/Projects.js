import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Ground-breaking 1.png";
import projImg2 from "../assets/img/Modern design.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const projects = [
          {
            title: "Personal Practice projects",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Personal Portifolio",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) => 
                                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    <h2>Projects</h2>
                                    <p>The projects listed in this section are primarily personal endeavors, developed either 
                                        independently or in collaboration with peers who share similar skills and interests. 
                                        These projects have been undertaken to foster growth and refine my abilities. I am confident 
                                        that my skills and corporate experience equip me to successfully execute business projects, 
                                        whether working as part of a team or individually.<br/>
                                        All the projects are present on my GitHub.
                                    </p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="project-tab" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link>Projects List</Nav.Link>
                                </Nav.Item>
                                
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                        />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}