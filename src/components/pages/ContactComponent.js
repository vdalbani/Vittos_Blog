import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

export class ContactComponent extends Component {
  render() {
    return (
    <section className='section'>
      <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
    </section>
    )
  }
}

export default ContactComponent