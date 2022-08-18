import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class AboutComponent extends Component {

  render() {
    return (
      <>
      <section className="bannerTitle">
        <Container>
          <Row className="myrow">
            <Col lg="12">
              <h1 className="h1">About</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="aboutInfo">
        <Container>
          <Row>
            <Col lg="12">
              <p className="info-text">
              <strong>Vitto's Blog </strong> has been created to showcase a portfolio that includes different personal projects.
               These projects have been written using a variety of programming languages, frameworks, environments, and tools 
               such as C#, JavaScript, Java, PHP and more. Each project demonstrate functionality using advanced principles and 
               techniques according to the programming language and framework.
                <br/> 
              </p>
            </Col>
          </Row>
          <Row >
            <Col lg="12">
              <p className="info-text">
                Select any of the items listed in the “Projects” page and it will provide a brief introduction to the 
                project. In addition, the “SingleProject” page will provide you more details about each one 
                of the items selected as well as a link that will redirect you to the project’s link or repository.
                <br/> 
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <p className="info-text">
              <strong>Vitto's Blog </strong> is a web site created using ReactJS, JavaScript, HTML, CSS and Bootstrap. The blog is 
              hosted in a Heroku cloud repository and can be accessed from the repository using a laptop or any mobile 
              device with web browser. This website has been designed and adapted for desktop and mobile device view.
              <br/> 
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      </>
    )
  }
}

export default AboutComponent