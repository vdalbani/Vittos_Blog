import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import projects from '../../projectsData.js'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export class ProjectsComponent extends Component {

  
  render() {
    return (
    <>
    <section className="bannerProjects">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="title_3"><strong>Projects</strong></h1>
          </div>
        </div>
      </div>
    </section>
    <section className = 'section'>
      <Row xs={1} md={2} className="g-4">
        {projects.map((project)=>{
          return(
          <Col key={project.id}>
            <Link style={{textDecoration: 'none', color:'black'}} to={`/projects/${project.id}`}>
            <Card >
              <Card.Img variant="top" src={project.img} />
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>
                  {project.overview}
                </Card.Text>
                <p>
                  <strong>See more ...</strong>
                </p>
              </Card.Body>
            </Card>
            </Link>
          </Col>
          )
        })}
      </Row>
    </section>  
  </>
    )
  }
}

export default ProjectsComponent