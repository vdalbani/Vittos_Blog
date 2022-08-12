import React, { Component } from 'react'
import {Link, Outlet} from 'react-router-dom';
import StyleNavbarComponent from '../helpers/StyleNavbarComponent';
import FooterComponent from './FooterComponent';


export class SharedLayoutComponent extends Component {
  render() {
    return (
    <>
        <StyleNavbarComponent/>
        <Outlet/>
        <FooterComponent/>
    </>

    )
  }
}

export default SharedLayoutComponent;