import SbEditable from 'storyblok-react'
import Teaser from './teaser'

import * as React from "react"
import PropTypes from 'prop-types'

import * as UserInfo from './userInfo'

import * as Article from './article'

// const ArticleHeader = ({ blok }) => {
//   console.log("HELLO INTERNET! I'M HEDER ONE");
//   return(
//     <h1>HELLO INTERNET! I'M HEDER ONE</h1>
//   )  
// }

const Components = {
  'teaser': Teaser,
  'article-header': Article.Header,
  'article-body': Article.Body
}









/**
 * 
 * @param {*} props 
 * @param {*} props.blok 
 */
const DynamicComponent = ({ blok }) => {
  // debugger
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return (
      <SbEditable content={blok}>
        <Component blok={blok} />
      </SbEditable>
    )
  }
  return (
    <UserInfo.NotDefined
      blokName={blok.component}
    />
  )
}

DynamicComponent.propTypes = {
  blok: PropTypes.element.isRequired
}

 
export default DynamicComponent