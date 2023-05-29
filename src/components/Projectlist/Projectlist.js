import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import dashboard1 from '../../Assets/dashboard1.png';
import trello1 from '../../Assets/trello1.png';
import fileupload1 from '../../Assets/fileupload1.png';

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
           

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={dashboard1}
                isBlog={false}
                title="Dashboard"
                description="
                A dashboard web application built with React.js is a user interface that provides a visual representation of various data and metrics in a concise and organized manner. It typically offers a summary of key information, statistics, and insights for a specific domain or set of data."
                ghLink="https://github.com/Pushpagtm/Dashboard"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={trello1}
                isBlog={false}
                title="Trello-Clone"
                description="A Trello clone is a web application designed to replicate the functionality and features of Trello, a popular project management tool. It allows users to create  lists, and cards to organize tasks and projects visually"
                ghLink="https://github.com/Pushpagtm/Trello_Clone"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={fileupload1}
                isBlog={false}
                title="File upload System"
                description="A file upload system is a software component or feature that enables users to upload files from their local devices to a server or storage system. It facilitates the transfer of files, such as documents, images, videos, or any other type of file, to a designated location for storage, processing, or sharing purposes."
                ghLink="https://github.com/Pushpagtm/File_Upload_System"
              />
            </Col>

           
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist