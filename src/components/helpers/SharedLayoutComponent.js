import React, { Component } from 'react'
import {Link, Outlet} from 'react-router-dom';
import StyleNavbarComponent from '../helpers/StyleNavbarComponent';


export class SharedLayoutComponent extends Component {
  render() {
    return (
    <>
        <StyleNavbarComponent/>
        <Outlet/>
    </>

    )
  }
}

export default SharedLayoutComponent;