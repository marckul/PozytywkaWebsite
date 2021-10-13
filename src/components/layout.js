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
// import underline from '../assets/images/underline.svg'

// =====================

// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom-bootstrap/custom-bootstrap.css'
import '../styles/typography/typography.css'


import '../styles/layout/layout.css'

// console.log("$$$$$ underline", underline);

/**
 * 
 * @param {*} props
 */
function Layout({ children, header, mainClassName, topSpace }) {

  return (
    <>
      <div className="main-wrapper">
        <Header variant={header} />
        <NavbarSpace addSpace={topSpace} />
        <HeaderCollapsible />
        <main className={mainClassName}>{children}</main>
      </div>
      <Footer/>
    </>
  )
}
Layout.defaultProps = {
  topSpace: false,
  header: "light",
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
}


export default Layout
// export { Layout }
