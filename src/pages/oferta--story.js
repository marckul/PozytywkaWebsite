import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// ALL FOR STORYBLOK
import { useStaticQuery, graphql } from 'gatsby'
import { DynamicComponent } from '../components-story/dynamicComponent'
import useStoryblok from '../../lib/storyblok'


const OfferPageSb = ({data, location}) => {  
  let story = data.storyblokEntry
  story = useStoryblok(story, location)

  const pageContext = {
    full_slug: story.full_slug
  }

  let hasHeroImageArea = false
  let headerVariant = `transparent-light`
  
  const components = story.content.body.map( blok =>  {
    if (blok.component === "hero_image_area") {
      hasHeroImageArea = true
      headerVariant = `transparent-${blok.variant}`
    }
    
    return <DynamicComponent blok={blok} key={blok._uid} context={pageContext}/> 
  })

  
  return(
    <Layout header={headerVariant} >
      <Seo title="Oferta"/>
      {components}
    </Layout>
  )

}



export const query = graphql`
  query {
    storyblokEntry(full_slug: {eq: "oferta/"}) {
      full_slug
      content
      name
    }
  }
`





export default OfferPageSb