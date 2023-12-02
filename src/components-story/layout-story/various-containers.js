import * as React from 'react'
import { DynamicComponent } from '../dynamicComponent'


import * as TextBloks  from '../text-bloks'

import { IsNotEmpty as String_IsNotEmpty, Slugify } from '../../functions/stringTools'

  
const Components = {
  'text_header': ({blok}) => (
    <TextBloks.TextHeader
      rootTag='h2'
      blok={blok}
    />
  ),
  'text_lead': TextBloks.TextLead
}



const DefaultClasses = {
  "style_padding": "py-5"
}
// const ClassRegister = {
//   "style_justify_content": ["justify-content-center", "justify-content-start", "justify-content-between"]
//   "style_padding": ["py-5"]
// }
const ClassRegister = ["style_justify_content", "style_padding"] // Blok fields names

/**
 * 
 * @param { object } blok 
 * @returns { array }
 */
const GetStyleClass = (blok) => {
  const classesArray = ClassRegister.map( fieldName => {
    
    if (Object.hasOwnProperty.call(blok, fieldName)) {
      return blok[fieldName]
    } 
    else {
      return DefaultClasses[fieldName]
    }
    
  })
  
  return classesArray
}

const SectionSb = ({ blok, ...props }) => {
  // const defaultClasses = ["py-5"] // 
  
  const htmlClassesStr = GetStyleClass(blok).join(" ")
  
  const sectionProps = {}
  if (String_IsNotEmpty(blok.html_id)) {
    sectionProps.id = Slugify(blok.html_id)
  }
  
  
  const components = blok.body.map( blok => (
    <DynamicComponent 
      blok={blok} 
      key={blok._uid} 
      {...props}
      ComponentsRegister={Components}
    />
  ))
  
  
  return(
    <section className={`container-box ${htmlClassesStr}`} {...sectionProps} >      {/* id={html_id} */}
      {components}
    </section>
  )    
}


const ContainerSb = ({ blok, context, ...props }) => {
  
  let default_container = "container"
  if (context) {
    if (context.default_container) {
      default_container = context.default_container
    }
  }

  const components = blok.body.map( blok => (
    <DynamicComponent 
      blok={blok} 
      key={blok._uid} 
      {...props}
      ComponentsRegister={Components}
    />
  ))

  return(
    <div className={`${default_container} py-5`} >{components}</div>
  )    
}


export { SectionSb, ContainerSb }