import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export class HomeComponent extends Component {


  render() {
    return (
    <>
  <section className="hero">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <br/>
          <br/>
          <h1 className="title_1"><strong>Victor's Portfolio</strong></h1>
          <h3 className="title_2">A blog to showcase my personal projects</h3>
          <p className="discover">Discover More</p>
        </div>
      </div><a href="#" className="continue link-scroll"><i className="fa fa-long-arrow-down"></i> Scroll Down</a>
    </div>
  </section>
    </>
    )
  }
}

export default HomeComponent;