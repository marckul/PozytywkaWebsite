/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import {Header, HeaderCollapsible, NavbarSpace} from "./header"
import Footer from './footer'


import "../styles/start/start.css"


// =====================

// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom-bootstrap/custom-bootstrap.css'


import '../styles/layout/layout.css'


/**
 * 
 * @param {*} props
 * @param {*} props.header - object constins header props
 * @param {*} props.header.variant - object constins header variant
 * @param {*} props.header.space - object constins header variant
 */
const Layout = ({ children, header, mainClassName, topSpace }) => {

  return (
    <>
      <div className="main-wrapper">
        <Header variant={header} />
        <NavbarSpace addSpace={topSpace}/>
        <HeaderCollapsible />
        <main className={mainClassName}>{children}</main>
      </div>
      <Footer></Footer>
      {/* <footer className="bg-dark "> FOOTER </footer> */}
    </>
  )
}
Layout.defaultProps = {
  topSpace: false,
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
// export { Layout }
