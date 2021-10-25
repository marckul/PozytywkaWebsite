import * as React from 'react'
import { AnchorLink } from '../components/components-bundle/components-bundle'

import { IsNotEmpty as String_IsNotEmpty, Slugify } from '../functions/stringTools'


const ButtonSb = ({ blok, ...props }) => {
  
  // debugger
  
  const linkProps = { }
  const variant = blok.variant
  
  if (!String_IsNotEmpty(variant)) {
    variant = "dark"
  }


  if (String_IsNotEmpty(blok.anchor)) {
    const htmlId = Slugify(blok.anchor)
    linkProps.to = `#${htmlId}`
  } 
  else if (String_IsNotEmpty(blok.link.cached_url)) {
    const htmlId = Slugify(blok.link.anchor)

    linkProps.to = `${blok.link.cached_url}/#${htmlId}`
  }
  
  return(
    <AnchorLink className={`btn btn-${variant}`} {...linkProps} >Zobacz Więcej</AnchorLink>
  ) 
}
ButtonSb.defaultProps = {
  
}

export { ButtonSb }