import * as React from 'react'

import { graphql, useStaticQuery, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as StringTools from '../functions/stringTools'
import { PostShort2 } from '../components/components-bundle/components-bundle'

import { GetPublishDate } from './posts/posts-functions'

import archiveThumbnail from '../assets/images/aktualnosci-hero.jpg'





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

  return archiveThumbnail
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

  // debugger
  
  // if (lastWord)
  return firstWords.join(" ")    
}

/**
 * @returns { array } 
 */
const PostsQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      allStoryblokEntry(filter: {full_slug: {regex: "/aktualnosci\/./"}}) {
        nodes {
          created_at
          published_at
          content
          full_slug
          slug
        }
      }
    }
  `)

  return data.allStoryblokEntry.nodes
}


const PostsArchive = () => {
  const nodes = PostsQuery()
  
  const nodes2sort = []
  for (let i = 0; i < nodes.length; i++) {

    const story = nodes[i];
    // debugger

    const content = JSON.parse(story.content)
    const publish_date = GetPublishDate(story, content)
    
    const node = {
      key: publish_date,
      content: content,
      publish_date: publish_date,
      date: new Date(publish_date),
      full_slug: story.full_slug,
    }

    nodes2sort.push(node)
    
  }
  const nodesSorted = nodes2sort.sort( (a, b) => b.date - a.date )

  
  
  const postsArchive = nodesSorted.map( node => {

    // const content = JSON.parse(node.content)
    const content = node.content

    let title = "BRAK DANYCH DO WYSWIETLENIA"
    let intercept = "BRAK DANYCH DO WYSWIETLENIA"
    let publishDate = "BRAK DANYCH DO WYSWIETLENIA"
    let imageFilename = ""
    let fullSlug = ""
    

    if (content.article_content) {
      console.log(content.article_content);
      const articleHeader = GetComponentByName(content.article_content, "article-header")
      console.log(articleHeader);
  
      if (typeof articleHeader !== "undefined") {
        imageFilename = ImageResizing(articleHeader.image.filename, [400, 400], true)
        publishDate = StringTools.FormatDate(node.publish_date)
      
        fullSlug = node.full_slug;
        if (fullSlug[0] !== "/") {
          fullSlug = `/${fullSlug}`
        }
  
        intercept = GetPostIntercept(articleHeader.intro)

        title = articleHeader.title
    }

      return(
        <PostShort2
          title={title}
          publishDate={publishDate}
          imgSrc={imageFilename}
          imgAlt=""
          postSlug={fullSlug}
        >
          {intercept}...
        </PostShort2>
      )
    }
  })

  return(
    <div className="posts-archive-2 row">
      {postsArchive}
    </div>
  )

}


export default PostsArchive
