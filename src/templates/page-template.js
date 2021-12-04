import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import { GetSEO } from '../components-story/SEO/seo'

// ALL FOR STORYBLOK
import { DynamicComponent } from '../components-story/dynamicComponent'
import useStoryblok from '../../lib/storyblok'

import { NoContentAlert } from '../components-story/userInfo'




const getPageContext = (story) => {
  const pageContext = {
    full_slug: story.full_slug,
    default_container: story.content.default_container,
  }
  return pageContext
}

const PageTemplate = ({data, location}) => { 
  let story = data.storyblokEntry
  story = useStoryblok(story, location)

  const seoData = GetSEO(story)

  const pageContext = getPageContext(story)
  const mainClassNames = story.content.headings_reduction

  // const { headings_reduction } = story.content.headings_reduction
  

  let hasHeroImageArea = false
  let headerVariant = `light`
  
  // debugger
  let components = <NoContentAlert/>;
  if (story.content.body && story.content.body.length > 0) {
    components = story.content.body.map( blok =>  {
      if (blok.component === 'hero_image_area') {
        hasHeroImageArea = true
        headerVariant = `transparent-${blok.variant}`
      }
      else if(blok.component === 'all_start_page_content') {
        hasHeroImageArea = true
        headerVariant = `transparent-dark`
      }
      return <DynamicComponent blok={blok} key={blok._uid} context={pageContext}/> 
    })
  } 

  
  
  return(
    <Layout header={headerVariant} mainClassName={mainClassNames} topSpace={!hasHeroImageArea}>
      <Seo title={seoData.title} description={seoData.description}/>
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
