import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export class HomeComponent extends Component {


  render() {
    return (
    <section className='section'>
      <Card>
        <Card.Body>Home description Here</Card.Body>
      </Card>
    </section>
    )
  }
}

export default HomeComponent;