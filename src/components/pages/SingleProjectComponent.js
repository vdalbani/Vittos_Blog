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
                <Card.Header style={{backgroundColor:'#800080', color:'white'}}>
                    <br />
                    <h3>
                        {name}
                    </h3>
                </Card.Header>
                <Card.Body>
                    {/* <Card.Img variant='top'style={{width: "cover",height:"10rem"}} src={defaultImage} /> */}
                    <Card.Img variant='top'style={{width: "cover"}} src={img} />
                    <br/><br/>
                    {/* <Card.Title>{name}</Card.Title> */}
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Button variant="warning">
                        <a href={url} target="_blank" rel='noopener' style={{textDecoration: 'none', color:'black'}}>
                            CHECK PROJECT ONLINE
                        </a>
                    </Button>
                </Card.Body>
            </Card>            
            <br/>
            <Card style={{flexDirection:"row"}}>
             {/* <Card> */}
                <Card.Img style={{width:"50%"}} src={guides.guide1.img} />
                <Card.Body>
                    <Card.Title>{guides.guide1.title}</Card.Title>
                    <Card.Text>
                        {guides.guide1.desc}
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <Card style={{flexDirection:"row"}}>
                <Card.Body>
                    <Card.Title>{guides.guide2.title}</Card.Title>
                    <Card.Text>
                        {guides.guide2.desc}
                    </Card.Text>
                </Card.Body>
                <Card.Img style={{width:"50%"}} src={guides.guide2.img} />
            </Card>
            <br/>
            <Card style={{flexDirection:"row"}}>
                <Card.Img style={{width:"50%"}} src={guides.guide3.img} />
                <Card.Body>
                    <Card.Title>{guides.guide3.title}</Card.Title>
                    <Card.Text>
                        {guides.guide3.desc}
                    </Card.Text>
                </Card.Body>
            </Card>

        </section>
    )
}

export default SingleProjectComponent