import * as React from "./react"
import PropTypes from './prop-types'
// import  Container from "react-bootstrap/Container"

import { graphql, Link } from "./gatsby"
import { StaticImage } from "./gatsby-plugin-image"
import * as StringTools from '../functions/stringTools'

import Layout from "../components/layout"
import Seo from "../components/seo"

import {  HeroImageArea, Container, PostShort2 } from '../components/components-bundle/components-bundle'
import HeroImage from '../assets/images/aktualnosci-hero.jpg'

import img1 from '../assets/images/artykul-zdjecie.jpg'
import img2 from '../assets/images/chlopczyk-na-molo.jpg'


/**
 * 
 * @param { array } componentsArray 
 * @param { string } componentName 
 */
const GetComponentByName = (componentsArray, componentName) => {
  let desiredComponent = undefined
  componentsArray.forEach( component => {
    if (component.component === componentName) {
      desiredComponent = component
    }
  })

  return desiredComponent
}

const STORY_BLOK_CONFIGS = {
  image: {
    assetPath: "https://a.storyblok.com",
    imageServicePath: "https://img2.storyblok.com"
  }
}

/**
 * 
 * @param { string } imgSource - image source path
 * @param { array } size - 2 elements array: [width, height]
 * @param { boolean } smartCropping - 
 * 
 * https://www.storyblok.com/docs/image-service
 */
const ImageResizing = (imgSource, size, smartCropping) => {
  // https://www.storyblok.com/docs/image-service
  if (StringTools.IsNotEmpty(imgSource)) {
    const { assetPath, imageServicePath} = STORY_BLOK_CONFIGS.image


    
    const parts = imgSource.split(assetPath)
    
    
    if (parts[0] !== "") {
      console.warn(`Unexpected image source URL. Image resource URL should starts with ${assetPath}.`)
      return ""      
    }

    const smart = smartCropping ? "/smart" : ""

    let param = `/${size[0]}x${size[1]}` 
    param += smart

    const resource = parts[1]
    const newImgSource = `${imageServicePath}${param}${resource}`

    return newImgSource
  }
  return ""
}
/**
 * 
 * @param { string } text 
 */
function GetPostIntercept(text) {
  // Poprawić usuwanie kropek na koncu zeby dzialalo tex dla 3 ...
  const words = text.trim().split(" ")
  const firstWords = words.slice(0,20)

  const lastWordIdx = firstWords.length - 1
  const lastWord = firstWords[lastWordIdx]
  const lastSignIdx = lastWord.length - 1
  const lastSign = lastWord[lastSignIdx]

  if (lastSign === ".") {
    firstWords[lastWordIdx] = lastWord.slice(0,lastWord.length - 1)
  }
  return firstWords.join(" ")    
}


const NewsPage = ({data}) => {
  // let story = data.allStoryblokEntry
  
  const postsArchive = data.allStoryblokEntry.nodes.map( story => {
    
    const content = JSON.parse(story.content)
    
    const articleHeader = GetComponentByName(content.article_content, "article-header")

    if (typeof articleHeader !== "undefined") {
      const imageFilename = ImageResizing(articleHeader.image.filename, [400, 400], true)
      const publishDate = StringTools.FormatDate(articleHeader.publish_date)
    
      // const fullSlug = StringTools.GetRelativePath(story.full_slug, "aktualnosci/")
      let fullSlug = story.full_slug;
      if (fullSlug[0] !== "/") {
        fullSlug = `/${fullSlug}`
      }

      const intercept = GetPostIntercept(articleHeader.intro)

      return(
        <PostShort2
          title={articleHeader.title}
          publishDate={publishDate}
          imgSrc={imageFilename}         

          postSlug={fullSlug}
        >
          {intercept}...
        </PostShort2>
      )
    }
  })

  return(
  <Layout header="transparent-light">
    <Seo title="Aktualnosci"/>
    <HeroImageArea  backgroundImage={HeroImage} variant="light">
      <h1><u>Aktualności</u></h1>
      <p className="lead">
        Quas unde fugiat accusantium voluptatibus facilis dolor distinctio dignissimos quidem iste labore.
      </p>
    </HeroImageArea>
    <Container>
      <div className="posts-archive-2 row">
        {postsArchive}
      </div>
    </Container>
  </Layout>
)}

export default NewsPage

export const query = graphql`
  query {
    allStoryblokEntry(filter: {full_slug: {regex: "/aktualnosci\/./"}}) {
      nodes {
        content
        full_slug
        slug
      }
    }
  }
`


