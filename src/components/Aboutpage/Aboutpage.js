import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              About <span>Me</span>
            </h3>
            <p className="aboutdetails">
              I'm a self-taught Front End developer. I build websites with a
              focus on providing the experience for everyone using them and
              responsiveness. Curious to learn more about developing scalable
              distribution systems, and care about writing and maintainable
              code. A responsive design makes your website accessible to all
              users, regardless of their devices.
            </p>
            <ul className="skilllist">
              <Row>
                <h3>Skills</h3>
                <Col md={4}>
                  <li>HTML5/CSS3</li>
                  <li>JavaScript</li>
                  <li>Bootsrap 5</li>
                  <li>Python</li>
                </Col>
                <Col md={4}>
                  <li>React Js</li>
                  <li>Next Js</li>
                  <li>React-Bootsrap</li>
                  <li>Git/Github</li>
                </Col>
                <Col md={4}>
                  <li>Python tools</li>
                  <li>Jupyter Notebook</li>
                  <li>Pandas</li>
                  <li>NumPy</li>
                  <li>Matplotlib</li>
                  <li>Seaborn</li>
                  <li>Scikit-learn</li>
                  <li>geoPandas</li>
                </Col>
              </Row>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;
