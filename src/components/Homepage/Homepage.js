import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import About from '../../pages/About';
import Project from '../../pages/Project';

function Home() {
  return (
    <>
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello </h2>
            <h2 className='nametext'>I'm Puspa Gautam</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/Pushpagtm");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/puspa-gautam-65b99a199/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
           
            <button onClick={() => {
              window.open("https://www.instagram.com/pushpagautam8/");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <About/>
    <Project/>
    </>
  )
}

export default Home