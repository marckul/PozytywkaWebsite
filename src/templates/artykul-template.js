import * as React from 'react'
import { graphql } from 'gatsby'

import Seo from '../components/seo'
import { GetSEO } from '../components-story/SEO/seo'

import useStoryblok from '../../lib/storyblok'
import SbEditable from 'storyblok-react'


import { DynamicComponent } from '../components-story/dynamicComponent'

import Layout from '../components/layout'
import * as UserInfo from '../components-story/userInfo'
import { NoContentAlert } from '../components-story/userInfo'


import '../components/article/article.css'
import { Figure } from '../components/components-bundle/components-bundle'

import { GetPublishDate } from '../components-story/posts/posts-functions'


const IS_BROWSER = typeof window !== "undefined"


function Layout2({children, ...props}) {  
  return(
    <Layout {...props} topSpace={true} mainClassName="" >
      {children}
    </Layout>
  )
}






const ArticleTemplate = ({data, location}) => {
  let story = data.storyblokEntry
  story = useStoryblok(story, location)

  const seoData = GetSEO(story)
  

  let allDynamicComponents = <NoContentAlert/>;
  if (story.content.article_content) {
    allDynamicComponents = story.content.article_content.map( blok =>  {
      // blok
      const context = {}
      if (blok.component === "article-header" ) {
        context.publish_date = GetPublishDate(story, blok)
        
      }
      // console.log(
      //   story
      // );
      // debugger
      return (
        <DynamicComponent blok={blok} key={blok._uid} context={context} />
      )
    })

  }

  if (IS_BROWSER) {
    window.storyblok = {  
      story: story,
      // Storyblok: Storyblok
    }
  }
  const includeKeys = [
    'image', 'intro', 'title', 
    'author', 'component', 'long_text'
  ]
  
  return(
    <Layout2 header="light">
      <Seo title={seoData.title} description={seoData.description} type="article"/>
      <div className="container">
        <div className="article-container row">
          <SbEditable content={story.content}>
            <article className="article readable-width col-md-12 pt-3">
              {allDynamicComponents}
            </article>
          </SbEditable>
        </div>
      </div>    
    </Layout2>
  )
  
}

export default ArticleTemplate

export const query = graphql`
  query ($fullSlug: String!) {
    storyblokEntry (full_slug: {eq: $fullSlug}) {
      created_at
      published_at
      content
      name
    }
  }
`

