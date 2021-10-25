import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// ALL FOR STORYBLOK
import { useStaticQuery, graphql } from 'gatsby'
import { DynamicComponent } from '../components-story/dynamicComponent'
import useStoryblok from '../../lib/storyblok'

import { NoContentAlert } from '../components-story/userInfo'


const getPageContext = (story) => {
  const pageContext = {
    full_slug: story.full_slug,
    default_container: story.content.default_container
  }
  
  // const default_container = story.content.default_container

  // if (default_container) {
  //   pageContext.default_container = default_container
  // }


  return pageContext
}

const PageTemplate = ({data, location}) => { 

  let story = data.storyblokEntry
  story = useStoryblok(story, location)

  const pageContext = getPageContext(story)

  let hasHeroImageArea = false
  let headerVariant = `light`
  

  let components = <NoContentAlert/>;
  if (story.content.body) {
    components = story.content.body.map( blok =>  {
      if (blok.component === "hero_image_area") {
        hasHeroImageArea = true
        headerVariant = `transparent-${blok.variant}`
      }
      
      return <DynamicComponent blok={blok} key={blok._uid} context={pageContext}/> 
    })
  } else {

  }

  
  return(
    <Layout header={headerVariant} >
      <Seo title="Oferta"/>
      {components}
    </Layout>
  )

}



export default PageTemplate



export const query = graphql`
  query ($fullSlug: String!) {
    storyblokEntry (full_slug: {eq: $fullSlug}) {
      content
      name
    }
  }
`
