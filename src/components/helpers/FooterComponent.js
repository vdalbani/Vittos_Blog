import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import vLogo from '../../vLogo.png';
import {Link} from 'react-router-dom';

export class FooterComponent extends Component {
  render() {
    return (
      <footer className="mainFooter">
        <Container>
        <Row>
            <Col md="1">
                <div ><img className="logoFooter" src={vLogo}></img></div>            
            </Col>
            <Col md="4">
                <div className="contactFooter">
                    <h6 className="text">Victor Albani</h6>
                </div>
                <div class="contact-details">
                    <p>E-mail: vittoalbani@gmail.com</p>                
                </div>
            </Col>
            <Col md="3">
                <h6 className="text">Links</h6>
                <div className="menus d-flex">
                    <ul class="list-unstyled">
                        <li>
                            <Link style={{ color:'black', textDecoration:'none'}} to={`/projects`}>
                             Projects
                            </Link>
                        </li>
                        <li>
                            <Link style={{ color:'black', textDecoration:'none'}} to={`/contact`}>
                             Contact Page
                            </Link>
                        </li>
                        <li>
                            <Link style={{ color:'purple', textDecoration:'none'}} to={`/about`}>
                             About
                            </Link>
                        </li>
                    </ul>
                </div>
            </Col>
            <Col md="3">
                <h6 className="text">Social Media</h6>
                <div className="menus d-flex">
                    <ul className="list-unstyled">
                        <li className="list-inline-item">
                            <a href="https://www.linkedin.com/in/victoralbani"  target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-linkedin" style={{ fontSize: 30, color:'black'}}></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://github.com/vdalbani"  target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-github" style={{ fontSize: 30, color:'black' }}></i>   
                            </a>
                        </li>
                    </ul>
                </div>
            </Col>
        </Row>
        </Container>
        <br/>
        <div class="copyrights">
        <div class="container">
            <div class="row">
            <div class="col-md-6">
                <p>&copy; 2022. All rights reserved. Your great site.</p>
            </div>
            </div>
        </div>
        </div>
    </footer>
    )
  }
}

export default FooterComponent;