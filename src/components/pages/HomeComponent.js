import React, { Component } from 'react'

export class HomeComponent extends Component {


  render() {
    return (
  <>
  <section className="hero">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          {/* <br/>
          <br/>
          <br/> */}
          <h1 className="title_1"><strong>Vitto's Blog</strong></h1>
          <h3 className="title_2">A blog to showcase my personal projects</h3>
          <p className="discover">Discover More</p>
          {/* <br/>
          <br/> */}
        </div>
      </div>
      {/* <a href="#" className="continue link-scroll"><i className="fa fa-long-arrow-down"></i> Scroll Down</a> */}
    </div>
  </section>
  <section className="intro">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <h2 className="h3">Portfolio</h2>
          <p className="text-big">
            <strong>Vitto's Blog </strong> has been created to showcase a portfolio that includes projects using different programming languages. 
            These projects have been written using different programming languages, frameworks, environments, and tools such as C#, JavaScript,
             Java, PHP and more.
            <br/> 
          </p>
        </div>
      </div>
    </div>
  </section>
  <br/>
  </>
    )
  }
}

export default HomeComponent;