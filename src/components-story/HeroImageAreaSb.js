import * as React from 'react'
import { Link } from 'gatsby'

import { DynamicComponent } from './dynamicComponent'

import { HeroImageArea, Container } from '../components/components-bundle/components-bundle'

import { HexToRgbStr } from '../functions/stringTools'

import { TextHeader, TextLead } from './text-bloks'


const Components = {
  'text_header': TextHeader,
  'text_lead': TextLead
}


/**
 * 
 * @param { array } props.blok.Body
 */
const HeroImageAreaSb = ({ blok, ...props }) => {

  let textShadowRGB
  if (blok.shadow_color) {
    textShadowRGB = HexToRgbStr(blok.shadow_color.color)
  }

  const components = blok.body.map( blok => (
    <DynamicComponent 
      blok={blok} 
      key={blok._uid} 
      ComponentsRegister={Components}
      {...props}
    />
  ))

  // https://img2.storyblok.com/1440x0/smart/filters:quality(100):format(webp)/f/130598/1440x961/a441bc0ff8/dziewczynka-na-plazy.jpg

  
  
  return(
    
    <HeroImageArea 
      variant={blok.variant} 
      backgroundImage={blok.background_image.filename} 
      
      textShadow={blok.text_shadow}
      textShadowRGB={textShadowRGB}
    >
      {components}
      {/* <Link to="#diagnoza" className="btn btn-dark">Zobacz więcej</Link> */}
    </HeroImageArea>
  )    
}

export default HeroImageAreaSb