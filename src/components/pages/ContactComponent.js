import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img from 'react-bootstrap/Image';
//Substitute with picture
import vLogo from '../../vLogo.png';

export class ContactComponent extends Component {
  render() {
    return (
      <>
      <section className="bannerTitle">
        <Container>
          <Row className="myrow">
            <Col lg="12">
              <h1 className="h1">Contact</h1>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="contactInfo">
        <Container>
          <Row>
            <Col lg='2'>
              <Img className='logoContact' src={vLogo}></Img>
            </Col>
            <Col lg="10">
              <h2 className="h4">Victor Albani</h2>
              <h6 className="h6">Computer Programmer</h6>
              <br/>
               <p className="info-text">
                <strong>E-  mail:</strong> vittoalbani@gmail.com
                <br/>
                <strong>Phone:   </strong> (306) 930-5792
                <br/>
              </p>
              <div className="menus d-flex">
                  <ul className="list-unstyled">
                      <li className="list-inline-item">
                          <a href="https://www.linkedin.com/in/victoralbani"  target="_blank" rel="noopener noreferrer">
                          <i className="bi bi-linkedin" style={{ fontSize: 30, color:'white'}}></i>
                          </a>
                      </li>
                      <li className="list-inline-item">
                          <a href="https://github.com/vdalbani"  target="_blank" rel="noopener noreferrer">
                          <i className="bi bi-github" style={{ fontSize: 30, color:'white' }}></i>   
                          </a>
                      </li>
                  </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      </>
    )
  }
}

export default ContactComponent