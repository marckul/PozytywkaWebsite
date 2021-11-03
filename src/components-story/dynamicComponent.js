import SbEditable from 'storyblok-react'

import * as React from "react"
import PropTypes from 'prop-types'

import * as UserInfo from './userInfo'

import * as Article from './article'
// import { PostsArchive } from './posts-archive'
import PostsArchive from './posts-archive'

import HeroImageAreaSb from './HeroImageAreaSb'
import * as TextBloks  from './text-bloks'

import * as Carousel from './layout-story/carousel'
import * as LayoutContainers from './layout-story/various-containers'
import { ColumnsGridSb, ColumnSb } from './layout-story/column-grid'

import { ButtonSb } from './buttons--story'

import { ImageSb, ImageBlokSb } from './images'
import GoogleMap from './google-map'






// const SectionSb = ({ blok }) => {
//   console.log("HELLO INTERNET! I'M Section ONE");
//   return(
//     <h1>HELLO INTERNET! I'M HEDER ONE</h1>
//   )  
// }

const Components = {
  'teaser': GoogleMap,
  'article-header': Article.Header,
  'article-body': Article.Body,
  'posts_archive': PostsArchive,

  // LAYOUT
  'hero_image_area': HeroImageAreaSb,
  'section': LayoutContainers.SectionSb,
  'container': LayoutContainers.ContainerSb,
  
  'columns_blok': ColumnsGridSb,
  'column': ColumnSb,
  
  // CAROUSEL
  'multi_carousel': Carousel.CarouselSb,
  'carousel_card': Carousel.OfferCard,
  

  // TEXT
  'text_header': TextBloks.TextHeader,
  'text_lead': TextBloks.TextLead,
  'rich_text_blok': TextBloks.RichTextBlok,

  
  'button': ButtonSb,

  // IMAGES
  'image-blok': ImageSb, // ???
  'image_blok': ImageBlokSb,

  google_map: GoogleMap,
  
}


/**
 * 
 * @param {*} props 
 * @param {*} props.blok 
 */
const DynamicComponent = ({ blok, ComponentsRegister, ...props }) => {
  // debugger
  let Component = null

  if (typeof ComponentsRegister[blok.component] !== 'undefined') {
    Component = ComponentsRegister[blok.component]
  } 
  else if (typeof Components[blok.component] !== 'undefined') { 
    // component fallback
    Component = Components[blok.component]
  } 
  else {
    return (
    <SbEditable content={blok}>
      <UserInfo.NotDefined
        blokName={blok.component}
      />
    </SbEditable>
    )
  }

  return (
    <SbEditable content={blok}>
      <Component blok={blok} {...props} />
    </SbEditable>
  )

}


DynamicComponent.propTypes = {
  // blok: PropTypes.element.isRequired,
}
DynamicComponent.defaultProps = {
  ComponentsRegister: {}
}



 
export { DynamicComponent } 