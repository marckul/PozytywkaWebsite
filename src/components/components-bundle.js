import * as React from 'react'


const HeroArea = ({children, className, ...props}) => {
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
const HeroImageArea = ({children, className, variant, backgroundImage, ...props}) => {
  const styles = {
    backgroundImage: `url("${backgroundImage}")`
  }
  if (backgroundImage !== undefined) {
    className += " text-shadow"
  }
  className+= ` bg-${variant}`

  
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




const Container = ({children, className, ...props}) => (
  <div {...props} className={`${className} container-box py-5`}> 
    <div className="container my-5">{children}</div> 
  </div>
)


const Phone = ({children, tel, size}) => {
  let propsSize = "";
  if (size === undefined) {
    propsSize = "16"
  } else {
    propsSize = size;
  }
  
  // debugger;

  return(
    <a href={`tel:${tel}`} className="link-light text-nowrap mr-4 d-block">
      <svg xmlns="http://www.w3.org/2000/svg" width={propsSize} height={propsSize} fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
      </svg>
      <p className="ml-2 m-0 d-inline">{children}</p> 
    </a>
  )
}

const NavbarSpace = () => (
  <div className="navbar-space"></div>
)

const BgGradient = ({children}) => (
  <div className="index-page-gradient">
    {children}    
  </div>
)

export { HeroArea, HeroImageArea, Container, Phone, NavbarSpace, BgGradient} 