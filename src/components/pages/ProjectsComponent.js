import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import projects from '../../projectsData.js'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export class ProjectsComponent extends Component {

  
  render() {
    return (

    <section className="section">
      <section className='section'>
        <Card>
          <Card.Body>
            <Card.Title>PROJECTS SCREEN</Card.Title>
            A home page is a webpage that serves as the starting point of website. It is the default webpage that loads when you visit a web address 
            that only contains a domain name. For example, visiting https://techterms.com will display the Tech Terms home page. 
            <br/>
            The home page is located in the root directory of a website. Most web server allow the home page to have one of several 
            different filenames. Examples include index.html, index.htm, index.shtml, index.php, default.html, and home.html. 
            The default filename of a website's home page can be customized on both Apache and IIS servers. Since the home page file is 
            loaded automatically from the root directory, the home page URL does not need need to include the filename.
          </Card.Body>
        </Card>
      </section>
      <section className = 'section'>
        <Row xs={1} md={2} className="g-4">
          {projects.map((project)=>{
            return(
            <Col key={project.id}>
              <Card >
                <Card.Img variant="top" src={project.img} />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>
                    {project.overview}
                  </Card.Text>
                  <Button variant="warning">
                    <Link style={{textDecoration: 'none', color:'black'}} to={`/projects/${project.id}`}>
                      SEE MORE ...
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            )
          })}

         
        </Row>
        
            {/* // <section className='section'>
            // <Card key={project.id}>
            //   <Card.Header>{project.name}</Card.Header>
            //   <Card.Body>
            //     <Card.Title>Not sure this title</Card.Title>
            //     <Card.Text>
            //       {project.description}
            //     </Card.Text>
            //     <Button variant="primary">Go somewhere</Button>
            //   </Card.Body>
            // </Card>
            // </section>  */}

      </section>
        

    </section>
    )
  }
}

export default ProjectsComponent