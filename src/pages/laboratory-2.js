import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

// 

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Offcanvas from 'react-bootstrap/Offcanvas'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { useState } from "react"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import logoLight from '../assets/images/logo-light.png'
import LogoSVG from '../assets/svg/logo.svg'


import '../styles/labor/laboratory-2.css'



const Logo = () => {
  return(
    <Link className="navbar-brand" to="/">
      <div className="logo-light">
        <LogoSVG />        
      </div>
      <div className="logo-text">
        Muzyczka<br/>ODT
      </div>
    </Link>
  )
}

const NavbarToggler = ({onClickCapture}) => {
  return (
    <button
      className="navbar-toggler collapsed"
      onClickCapture={onClickCapture} 
      type="button"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  )
}


const NavLink = ({children, ...props}) => (
  <Link activeClassName="active" {...props} className="nav-link">{children}</Link>
)

const Navigation = ({className, variant, ...props}) => {
  
  const allVariants = {
    "light": {
      bg: "light",
      variant: "light",
      button: "dark"
    },
    "dark": {
      bg: "dark",
      variant: "dark",
      button: "light"
    },
    "transparent-light": {
      bg: "transparent-light",
      variant: "light",
      button: "dark"
    },
    "transparent-dark": {
      bg: "transparent-dark",
      variant: "dark",
      button: "light"
    }
  }


  const {button, bg, variant: text } = allVariants[variant]
  

  const [navbarCollapsed, setNavbarCollapsed] = useState(false)
  // const [handleClose, setHandleClose] = useState(false)
  
  const collapseStates = ["" ,"show"]

  const eventhandler = data => {
    setNavbarCollapsed(!navbarCollapsed)
    console.log("eventhandler", data)
  }

  const handleClose = event => {
    setNavbarCollapsed(false)

  }

  const stateClass = collapseStates[+navbarCollapsed] // convert bool to number

  

  return(
    <Navbar {...props} className={`${className} px-md-5`} expand="md" bg={bg} variant={text}>
      <Container fluid>
        <Logo/>
        <NavbarToggler aria-controls="main-navbar"  onClickCapture={eventhandler} />
        <Navbar.Collapse  id="main-navbar" >
          <Nav className="me-auto">
            <NavLink to="/">Start</NavLink>
            <NavLink to="/oferta">Oferta</NavLink>
            <NavLink to="/nasz-zespol">Nasz Zespół</NavLink>
            <NavLink to="/kontakt">Kontakt</NavLink>
            <NavLink className="nav-link" to="/aktualnosci">Aktualności</NavLink>
          </Nav>
          <Nav>
          <Link className={`btn btn-${button}`} to="/rejestracja" role="button">Rejestracja</Link>
          </Nav>
        </Navbar.Collapse>

        <Offcanvas show={navbarCollapsed} onHide={handleClose} className={`bg-${bg} new-test-class p-4`}>
          <nav >
            <Offcanvas.Header className="" closeButton>
              <Logo/>
            </Offcanvas.Header>
            <Offcanvas.Body className="h5">
              <Nav className="me-auto">
                <NavLink to="/">Start</NavLink>
                <NavLink to="/oferta">Oferta</NavLink>
                <NavLink to="/nasz-zespol">Nasz Zespół</NavLink>
                <NavLink to="/kontakt">Kontakt</NavLink>
                <NavLink className="nav-link" to="/aktualnosci">Aktualności</NavLink>
              </Nav>
              <Nav>
              <Link className={`btn btn-${button}`} to="/rejestracja" role="button">Rejestracja</Link>
              </Nav>
            </Offcanvas.Body>
            
          </nav>
        </Offcanvas>
      </Container>
    </Navbar>
  )
}

Navigation.defaultProps = {
  variant: `light`,
  className: ``,
}


const Laboratory = () => {
  return(
    <Navigation variant="dark" className="navbar-off" />
  )
}

export default Laboratory