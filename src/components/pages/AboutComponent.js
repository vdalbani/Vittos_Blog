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
                <strong>Vitto's Blog </strong> has been created to showcase a portfolio that includes projects using different programming languages. 
                These projects have been written using different programming languages, frameworks, environments, and tools such as C#, JavaScript,
                Java, PHP and more.
                <br/> 
              </p>
            </Col>
          </Row>
          <Row className="myrow">
            <Col lg="12">
              <p className="info-text">
                <strong>Vitto's Blog</strong> is a web site created using ReactJS, JavaScript, HTML, CSS and Bootstrap. 
                The blog is hosted in a Heroku cloud repository and can be accessed from the repository 
                using a laptop or any mobile device with web browser. 
                This website has been designed and adapted for desktop or mobile device view.
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