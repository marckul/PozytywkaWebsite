import * as React from 'react'

import { DynamicComponent } from '../components-story/dynamicComponent'

import { HeroImageArea, Container } from '../components/components-bundle/components-bundle'
import { Link } from 'gatsby'

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
  console.log("HeroImageAreaSb");

  // debugger
  const components = blok.body.map( blok => (
    <DynamicComponent 
      blok={blok} 
      key={blok._uid} 
      ComponentsRegister={Components}
      {...props}
    />
  ))
  
  return(
    
    <HeroImageArea variant={blok.variant} backgroundImage={blok.background_image.filename} >
      {components}
      {/* <Link to="#diagnoza" className="btn btn-dark">Zobacz więcej</Link> */}
    </HeroImageArea>
  )    
}

export default HeroImageAreaSb