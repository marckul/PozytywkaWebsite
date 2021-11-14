import * as React from 'react'
import { AnchorLink, PrepareHrefBlok } from './links/common'
import { Link } from 'gatsby'

import { IsNotEmpty, IsNotEmpty as String_IsNotEmpty, Slugify } from '../functions/stringTools'
import { NoLinkTypeError } from './userInfo'

// import { Phone } from '../components/components-bundle/components-bundle'




const ArrowSVG = () => (
  <svg className="bi bi-arrow-right" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg>
)

const ArrowLink = ({children, className, ...linkProps}) => {
  // klasa arrow-link-component jest dodawana w komponencie rodzica
  return(
    <AnchorLink 
      className={`${className}`} 
      {...linkProps} 
    >
      {children} <ArrowSVG />
    </AnchorLink>
  )
}



// function AnchorLink({ to, addRoot, children, link_type, ...props }) {
//   let toHref = to !== "" ? toHref = to : undefined

//   if ( ["story","anchor"].includes(link_type) ) {
//     return <Link to={toHref} {...props}> {children} </Link>
//   }

//   if (link_type === "phone-number") {
//     return(
//       <Phone tel={toHref} {...props}>
//         {toHref}
//       </Phone>
//     )
//   }

//   return(
//     <a href={toHref} {...props}>
//       {children} 
//     </a>
//   )
// }


const ResolveStylesClasses = (blok) => {
  const ClassesProps = {
    variant: "link-block",
    horizontal_position: "me-auto",
    stretched_link: "",
  }

  const classesArray = []
  for (const key in ClassesProps) {
    if (Object.hasOwnProperty.call(blok, key)) {
      const htmlClassesSet = blok[key];
      classesArray.push(htmlClassesSet)
    } 
    else {
      const defaultClasses = ClassesProps[key];
      classesArray.push(defaultClasses)
    }
  }
  return classesArray.join(" ")
}


function CheckLinkType0(blok) {
  // debugger
  let type = ""
  if (IsNotEmpty(blok.phone_number)) {
    type = "phone-number"
  }
  else if (IsNotEmpty(blok.link.cached_url) || IsNotEmpty(blok.link.email)) {
    // story, url, email
    type = blok.link.linktype
  }
  else if (blok.anchor) {
    type = "anchor"
  }
  return type
}


function CheckLinkType(blok) {
  
  let type = blok.link_type
  if (typeof blok.link_type === "undefined") {
    blok.content = `PROSZE PODAĆ TYP LINKU W ZAKŁADCE "LINK" PO PRAWEJ STRONIE`
    type = "no_link_type_error"
  } 
  else if (type === "link") {
    type = blok.link.linktype
  }
  return type
}


const ButtonSb = ({ blok, buttonContext, ...props }) => {
  
  const type = CheckLinkType(blok)
  if (type === "no_link_type_error") {
    return <NoLinkTypeError/>
  }

  const linkProps = { 
    link_type: type
  }
  const variant = blok.variant
  
  // DEFAULT VARIANT
  if (!String_IsNotEmpty(variant)) {
    variant = "link-block"
  }

  // SLUGIFY
  const HREF = PrepareHrefBlok(blok, linkProps.link_type)   
  const htmlClasses = ResolveStylesClasses(blok)
  linkProps.to = HREF 

  if(variant === "arrow-link-component") {
    return(
      <ArrowLink className={`${htmlClasses}`} {...linkProps} linkProps={linkProps} >
        {blok.content}
      </ArrowLink>
    )
  }
  
  const buttonStyle = `${variant}` 
  return(
    <AnchorLink className={`${htmlClasses}`} {...linkProps} >{blok.content}</AnchorLink>
  ) 
}
ButtonSb.defaultProps = {
  
}

export { ButtonSb }

