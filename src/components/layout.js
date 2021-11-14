/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */



import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Link } from 'gatsby'

import CookieConsent from "react-cookie-consent";

import {Header, HeaderCollapsible, NavbarSpace} from "./header"
import Footer from './footer'


import "../styles/start/start.css"
// import underline from '../assets/images/underline.svg'

// =====================

// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom-bootstrap/custom-bootstrap.css'
import '../styles/typography/typography.css'


import '../styles/layout/layout.css'


const StyledCookieConsent = (params) => (
  <div className="fixed-bottom bg-dark ">
    <CookieConsent 
      disableStyles={true}
      containerClasses="container  d-flex flex-row py-3 justify-content-between flex-wrap"
      contentClasses="text-white col-md"
      // debug={process.env.NODE_ENV === "development"}

      buttonWrapperClasses="cookie-consent-button d-flex flex-column justify-content-center col-sm-12 col-md"
      buttonClasses="btn btn-outline-light"
      buttonText="Rozumiem i zgadzam się"
    >
      <p className="py-2 me-5 m-0">Ta strona używa plików cookie. Korzystając z niej zgadzasz się na ich użycie. <Link to="/regulamin-strony">Dowiedz się więcej</Link></p>
    </CookieConsent>
  </div>
)

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
      <StyledCookieConsent/>
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
  mainClassName: PropTypes.string,
}


export default Layout
// export { Layout }
