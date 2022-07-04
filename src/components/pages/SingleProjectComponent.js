import React from 'react'
import {useParams} from 'react-router-dom'
import projects from '../../projectsData'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import defaultImage from '../../logo.svg'
import '../../index.css'

const SingleProjectComponent = () =>{
    console.log(useParams());

    const {projectId} = useParams();
    const project = projects.find((project)=>{return project.id === projectId});
    const {name, description, img, url, guides} = project;

    return(
        <section className="section">
            <Card>
                <Card.Body>
                    <Card.Img variant='top'style={{width: "cover",height:"10rem"}} src={defaultImage} />
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Button variant="warning">
                        <a href={url} target="_blank" rel='noopener'>
                            Check Project Online
                        </a>
                    </Button>
                </Card.Body>
            </Card>            
            <br/>
            <Card style={{flexDirection:"row"}}>
                <Card.Img style={{width:"30%"}} src={guides.guide1.img} />
                <Card.Body>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                        {guides.guide1.desc}
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <Card style={{flexDirection:"row"}}>
                <Card.Body>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                        {guides.guide2.desc}
                    </Card.Text>
                </Card.Body>
                <Card.Img style={{width:"30%"}} src={guides.guide2.img} />
            </Card>
            <br/>
            <Card style={{flexDirection:"row"}}>
                <Card.Img style={{width:"30%"}} src={guides.guide3.img} />
                <Card.Body>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Text>
                        {guides.guide3.desc}
                    </Card.Text>
                </Card.Body>
            </Card>

        </section>
    )
}

export default SingleProjectComponent