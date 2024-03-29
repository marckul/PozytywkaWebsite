import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { useState } from "react"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

// 

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import logoLight from '../assets/images/logo-light.png'
import LogoSVG from '../assets/svg/logo.svg'



const Logo = () => {
  return(
    <Link className="navbar-brand" to="/">
      <div className="logo-light">
        <LogoSVG />        
      </div>
      <div className="logo-text">
        <span>Pozytywka{'\u00A0'}</span>
        <span className="odt">ODT</span>
      </div>
    </Link>
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
  const collapseStates = ["" ,"show"]

  const eventhandler = data => {
    setNavbarCollapsed(!navbarCollapsed)
  }

  const stateClass = collapseStates[+navbarCollapsed]

  

  return(
    <Navbar {...props} className={`${className} ${stateClass}`} expand="md" bg={bg} variant={text}>
      <Container fluid>
        <Logo/>
        <Navbar.Toggle aria-controls="main-navbar"  onClickCapture={eventhandler}/>
        <Navbar.Collapse id="main-navbar" >
          <Nav className="me-auto">
            <NavLink to="/">Start</NavLink>
            <NavLink to="/oferta">Oferta</NavLink>
            <NavLink to="/nasz-zespol">Nasz Zespół</NavLink>
            <NavLink to="/kontakt">Kontakt</NavLink>
            <NavLink className="nav-link" to="/aktualnosci">Aktualności</NavLink>
          </Nav>
          <Nav>
          <div className="btn-block">
            <Link className={`btn btn-${button}`} to="/kontakt#rejestracja" role="button">Rejestracja</Link>
          </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Navigation.defaultProps = {
  variant: `light`,
}


const convertRem2Px = (remValue) => {
  if (typeof window !== 'undefined' ) {
    const pxPerRem = parseFloat(getComputedStyle(document.documentElement).fontSize) // [px/rem]
    return remValue*pxPerRem
  }
}

/**
 * 
 * @param { Object } props
 * @param { string } props.siteTitle - Site Title
 * @param { number } props.screensOnHide - number of screens where navbar is hide
 */
const HeaderCollapsible = ({ siteTitle, screensOnHide }) => {
  const HIDDEN_Y = -convertRem2Px(4)
  const HIDDEN_Y_SHIFT = HIDDEN_Y*1.5
  const DRAG_COEFF = 2;
  const isBrowser = typeof window !== "undefined"
  const windowHeight = isBrowser ? window.innerHeight : 0
  const breakpointY = windowHeight*screensOnHide
  
  const [hideOnScroll, setHideOnScroll] = useState(true)
  const [currentPosition, setCurrentPosition] = useState(HIDDEN_Y_SHIFT)

  useScrollPosition( ({ prevPos, currPos }) => {
    const isHidden = Math.abs(currPos.y) < breakpointY  

    if (isHidden !== hideOnScroll) {
      setHideOnScroll(isHidden)
      if (isHidden) {
        setCurrentPosition(HIDDEN_Y)
      }
    }

    if (!isHidden) {
      const dy = -(prevPos.y - currPos.y)/DRAG_COEFF
      let newPosition = currentPosition + dy

      if (newPosition >= HIDDEN_Y_SHIFT) {
        if (dy < 0) {
          newPosition = (newPosition < HIDDEN_Y) ? HIDDEN_Y_SHIFT : newPosition        
        } else {
          newPosition = (newPosition > 0) ? 0 : newPosition
        }
        setCurrentPosition(newPosition)
      }
    } 
  }, [hideOnScroll, currentPosition])


  let triggerClass = "hidden"
  if (!hideOnScroll) {
    triggerClass = "showed"
  }

  const styles = {
    top: currentPosition
  }
  return(
    <div className={`collapsibleNavbar fixed-top ${triggerClass}`} style={styles}>
      <Navigation className="my-navbar border-bottom " />
    </div>
  )
}

HeaderCollapsible.defaultProps = {
  siteTitle: ``,
  screensOnHide: 1.5
}
HeaderCollapsible.propTypes = {
  siteTitle: PropTypes.string,
}




const Header = ({ siteTitle, ...props }) => (
  <header className="">
    <Navigation {...props} className="my-navbar" />
  </header>
)

function NavbarSpace({addSpace, className}) {
  if (addSpace) {
    className += " navbar-space"
  }
  return (
    <div className={className}></div>
  )
}
NavbarSpace.defaultProps = {
  addSpace: false,
  className: ""
}



export {HeaderCollapsible, Header, NavbarSpace}
