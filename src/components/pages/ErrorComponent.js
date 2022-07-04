import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export class ErrorComponent extends Component {
  render() {
    return (
        
    <section className='section'>
      <Card>
        <Card.Body>Error: this page cannot be reached</Card.Body>
      </Card>
    </section>

    )
  }
}

export default ErrorComponent