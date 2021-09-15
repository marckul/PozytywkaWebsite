/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import {Header, HeaderCollapsible} from "./header"
import Footer from './footer'


import "../styles/start/start.css"


// =====================

// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom-bootstrap/custom-bootstrap.css'
import '../styles/layout/layout.css'


const Layout = ({ children, header }) => {

  return (
    <>
      <div className="main-wrapper">
        <Header variant={header} />
        <HeaderCollapsible />
        <main>{children}</main>
      </div>
      <Footer></Footer>
      {/* <footer className="bg-dark "> FOOTER </footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
