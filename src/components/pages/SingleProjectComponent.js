import React from 'react'
import {useParams} from 'react-router-dom'
import projects from '../../projectsData'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import '../../index.css'
import CardImg from 'react-bootstrap/CardImg'

const SingleProjectComponent = () =>{
    // console.log(useParams());

    const {projectId} = useParams();
    const project = projects.find((project)=>{return project.id === projectId});
    const {name, description, img, url, guides} = project;

    return(
        <>
        <section className="sectionSingleComponent" style={{  padding: '1em', margin:'0', background:'#301934', color:'white',}}>
            {/* NEW BANNER */}
                <Row className='g-0' style={{alignItems:'center'}}>
                    <Col md='5'>
                        <CardImg src={img}></CardImg>
                    </Col>
                    <Col md='7'>
                        <Card.Body>
                            <Card.Title><strong>{name}</strong></Card.Title>
                            <Card.Text>{description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href={url} target="_blank" rel='noreferrer' style={{textDecoration: 'none'}}>
                            <Button className='btn btn-outline-dark' style={{background: '#e1affd'}}>      
                                    Check Project Online...
                            </Button>
                            </a>
                        </Card.Footer>
                    </Col>
                </Row>

            {/* NEW BANNER ENDS */}   
        </section>
        <section className="section">
            {/* NEW CARD */}
            <Container style={{padding:'0'}}>
                <Card>
                    <Row style={{alignItems:'center'}}>
                        <Col md='5'>
                            <CardImg src={guides.guide1.img} alt="..."></CardImg>
                        </Col>
                        <Col md='7'>
                            <Card.Body>
                                <Card.Title>{guides.guide1.title}</Card.Title>
                                <Card.Text>{guides.guide1.desc}</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
            <br/>
            <Container style={{padding:'0'}}>
                <Card>
                    <Row style={{alignItems:'center'}}>
                        <Col md='5'>
                            <CardImg src={guides.guide2.img}></CardImg>
                        </Col>
                        <Col md='7'>
                            <Card.Body>
                                <Card.Title>{guides.guide2.title}</Card.Title>
                                <Card.Text>{guides.guide2.desc}</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
            <br/>
            <Container style={{padding:'0'}}>
                <Card>
                    <Row style={{alignItems:'center'}}>
                        <Col md='5'>
                            <CardImg src={guides.guide3.img}></CardImg>
                        </Col>
                        <Col md='7'>
                            <Card.Body>
                                <Card.Title>{guides.guide3.title}</Card.Title>
                                <Card.Text>{guides.guide3.desc}</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
            {/* NEW CARD ENDS */}
        </section>           
        </>
    )
}

export default SingleProjectComponent