import * as React from 'react'
import './components-bundle.css'

function HeroArea({ children, className, ...props }) {
  return (
    <div {...props} className={`${className} hero-area`}>
      <div className="container">
        {children}
      </div>
    </div>
  )
}


/** Hero Area Component
 * 
 * @param { object } props
 * @param { reactComponent } props.children
 * @param { string } props.className
 * @param { string } props.variant
 * @param { string } props.backgroundImage 
 */
function HeroImageArea({ children, className, variant, backgroundImage, ...props }) {
  const styles = {
    backgroundImage: `url("${backgroundImage}")`
  }
  if (backgroundImage !== undefined) {
    className += " text-shadow"
  }
  className += ` bg-${variant}`


  return (
    <div {...props}
      className={`hero-area ${className}`}
      style={styles}
    >
      <div className="container hero-area-inner">
        <div className="row">
          <div className="col-md-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
HeroImageArea.defaultProps = {
  className: ""
}




function Container({ children, className, ...props }) {
  return (
    <div {...props} className={`${className} container-box py-5`}>
      <div className="container my-5">{children}</div>
    </div>
  )
}
Container.defaultProps = {
  className: ""
}

function Phone({ children, tel, size }) {
  let propsSize = ""
  if (size === undefined) {
    propsSize = "16"
  } else {
    propsSize = size
  }

  // debugger;
  return (
    <a href={`tel:${tel}`} className="link-light text-nowrap mr-4 d-block">
      <svg xmlns="http://www.w3.org/2000/svg" width={propsSize} height={propsSize} fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
      </svg>
      <p className="ml-2 m-0 d-inline">{children}</p>
    </a>
  )
}

function NavbarSpace() {
  return (
    <div className="navbar-space"></div>
  )
}

function BgGradient({ children }) {
  return (
    <div className="index-page-gradient">
      {children}
    </div>
  )
}


function WavesContainer({ children }) {
  return (
    <div className="svg-container">
      <div className="svg-shape" style={{ "--background-color": "#fbf8e7" }}>
        <div className="svg-space pt-5"></div>
        <svg preserveAspectRatio="none" viewBox="0 0 1703 134" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 56.169L70.9583 43.2802C141.917 30.1493 283.833 4.73483 425.75 10.9675C567.667 17.4421 709.583 56.169 851.5 62.6437C993.417 68.8763 1135.33 43.4618 1277.25 49.6945C1419.17 56.1691 1561.08 94.896 1632.04 114.26L1703 133.623V0H1632.04C1561.08 0 1419.17 0 1277.25 0C1135.33 0 993.417 0 851.5 0C709.583 0 567.667 0 425.75 0C283.833 0 141.917 0 70.9583 0H0V56.169Z" fill="var(--background-color, #E4F3EA)" />
        </svg>
      </div>

      <div className="container-box py-5 my-5">
        {children}
      </div>

      <div className="svg-shape" style={{ "--background-color": "#fcfdf7" }}>
        <svg preserveAspectRatio="none" viewBox="0 0 1836 144" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 46.1691L76.5 33.2803C153 20.1494 306 -5.26509 459 0.967538C612 7.44221 765 46.1691 918 52.6438C1071 58.8764 1224 33.4619 1377 39.6945C1530 46.1692 1683 84.8961 1759.5 104.26L1836 123.623V144H1759.5C1683 144 1530 144 1377 144C1224 144 1071 144 918 144C765 144 612 144 459 144C306 144 153 144 76.5 144H0V46.1691Z" fill="var(--background-color, #E4F3EA)" />
        </svg>
        <div className="svg-space pb-5"></div>
      </div>

    </div>

  )
}

export { 
  HeroArea, 
  HeroImageArea, 
  Container, 
  Phone, 
  NavbarSpace, 
  BgGradient, 
  WavesContainer
} 