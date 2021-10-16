import * as React  from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import PropTypes from 'prop-types'
import DynamicComponent from '../components-story/dynamicComponent'

import useStoryblok from '../../lib/storyblok'


const IS_BROWSER = typeof window !== "undefined"

if (IS_BROWSER) {
  // window.story = {  }
}

const StartPageQL = ({data, location}) => {
  let story = data.storyblokEntry
  story = useStoryblok(story, location)

  const components = story.content.body.map( blok =>  (
    <DynamicComponent blok={blok} key={blok._uid} />
  ))
  

  return(
    <Layout topSpace>
      <div className="container">
        <h1>{story.content.title}</h1>
        {components}
        
      </div>
    </Layout>   
  )
}

export default StartPageQL

export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: {eq: "home"}) {
      content
      name
    }
  }
`


