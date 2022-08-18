import React, { Component } from 'react';
import projects from '../../projectsData.js';
import Card  from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import vLogo from '../../vLogo.png';

export class HomeComponent extends Component {


  render() {
    return (
  <>
  <section className="hero">
    <Container>
      <Row>
        <Col lg="8">
          <h1 className="title_1"><strong>Vitto's Blog</strong></h1>
          <h3 className="title_2">A blog to showcase my personal projects</h3>
          <br/>
          <Link style={{ color:'white', fontSize:'1.3em'}} to={`/projects`}>
            <p className="discover">Discover More</p>
          </Link>
        </Col>
      </Row>
    </Container>
  </section>
  <section className="intro">
    <Container>
      <Row>
        <Col lg="8">
          <h2 className="h3">Portfolio</h2>
          <p className="info-text">
              <strong>Vitto's Blog </strong> has been created to showcase a portfolio that includes different personal projects.
               These projects have been written using a variety of programming languages, frameworks, environments, and tools 
               such as C#, JavaScript, Java, PHP and more. Each project demonstrate functionality using advanced principles and 
               techniques according to the programming language and framework.
            <br/> 
          </p>
        </Col>
      </Row>
    </Container>
  </section>
  <section className="section">
    <br/>
    <Row className="g-4">
      <h3>Latest Projects</h3>
    </Row>
    <br/>
    <Row xs={1} md={3} className="g-4">
      {projects.slice(0,3).map((project)=>{
        return(
          <Col key={project.id}>
            <Link style={{textDecoration: 'none', color:'black'}} to={`/projects/${project.id}`}>
            <Card >
              <Card.Header style={{background:'rgba(5, 5, 5, 0.836)', color:'white'}}>
                <Card.Title>{project.shortTitle}</Card.Title>
              </Card.Header>
              <Card.Img variant="top" src={project.img} />
            </Card>
            </Link>
          </Col>
        )
      })}
    </Row>
    <br/>
  </section>
  <br/>
  <section className="info">
    <Container>
      <Row className="myrow">
        <Col lg="8">
          <p className="info-text">
            <strong>Vitto's Blog</strong> is a web site created using ReactJS, JavaScript, HTML, CSS and Bootstrap. 
            The blog is hosted in a Heroku cloud repository and can be accessed from the repository 
            using a laptop or any mobile device with web browser. 
            This websire is design and adapted for desktop or mobile device view.
            <br/> 
          </p>
        </Col>
        {/* <Col md='4'>
          <Card.Img className="logoInfo" src={vLogo}></Card.Img>
        </Col> */}
      </Row>
    </Container>
  </section>
  </>
    )
  }
}

export default HomeComponent;