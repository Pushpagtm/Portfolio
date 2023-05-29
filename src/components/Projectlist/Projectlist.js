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
                imgPath={useradminpanel}
                isBlog={false}
                title="Dashboard Panel"
                description="User Admin Dashboard created with React js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, four different Charts, three different Data Table Pages, FAQ Page, Form Page, and Calendar Integration."
                ghLink="https://rahul-dashboard-pannel.netlify.app"
              />
            </Col>

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

            {/* <Col md={4} className="project-card">
              <ProjectCard
                imgPath={charlespizza}
                isBlog={false}
                title="Charlestown Pizza"
                description="Charlestown pizza is a static website completely build with bootstrap with fully responsive."
                ghLink="https://rahulvijay81.github.io/Pizzastore-bootstrap/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink="https://todolist-rahul81.netlify.app/"

              />
            </Col> */}
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist