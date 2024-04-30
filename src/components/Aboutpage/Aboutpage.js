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
              Transitioning web developer ready to excel in a hybrid role as a
              developer and analyst. Ready to leverage my expertise in web
              development to craft innovative and user-friendly websites while
              also delving into data analysis to inform strategic decisions.
              Committed to remaining updated on emerging web technologies and
              harnessing analytical tools to optimize website performance and
              user experience. Equipped with strong problem-solving abilities
              and a collaborative mindset, adept at working in cross-functional
              teams to deliver high-quality solutions that surpass client
              expectations.
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
