import * as React from 'react'
import ReactDOMServer from 'react-dom/server';

import StoryblokClient from 'storyblok-js-client'

function getContent(content, includeKeys) {

  if (Array.isArray(content) ) {
    return content
  }
  else if (typeof content === "object") {

    const contentArray = []
    for (const key in content) {
      if (Object.hasOwnProperty.call(content, key)) {
        const component = content[key];

        // take only content keys
        contentArray.push(component)
        
        getContent(contentArray)        
      }
    }
  }
}



 
let Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_API_KEY
})



Storyblok.richTextResolver.normalRenderNode = Storyblok.richTextResolver.renderNode


function Image(tag) {
  const floatSide = imageCounter % 2 == 0 ? "float-right" :  "float-left"
  imageCounter++

  console.log(imageCounter);
  const attrs = tag.attrs
  return `
    <img alt="${attrs.alt}" src="${attrs.src}" title="${attrs.title}" class="${floatSide} lonley-img" />
  `
}

function Paragraph(tag) {
  let result = Storyblok.richTextResolver.normalRenderNode(tag)

  if (Object.hasOwnProperty.call(tag, "content")) {
      
    if (tag.content.length === 1 && tag.content[0].type === "image") {
      const floatSide = imageCounter % 2 == 0 ? "float-right" :  "float-left"
      imageCounter++
      const attrs = tag.content[0].attrs

      const getConsoleLog = () => {
        console.log("FigureHTML")
      }

      const FigureHTML = ReactDOMServer.renderToString(
        <figure onClick={getConsoleLog} className={`${floatSide} figure border p-2  indented-figure `}>
          <img alt={`${attrs.alt}`} src={`${attrs.src}`} title={`${attrs.title}`} class="figure-img img-fluid" />
        </figure>
      );
      // debugger
      
      result = FigureHTML
      // `
      //   <figure class="${floatSide} figure border p-2  indented-figure ">
      //     <img alt="${attrs.alt}" src="${attrs.src}" title="${attrs.title}" class="figure-img img-fluid" />
      //   </figure>
      // `
    } 
    else if (tag.content.length === 1) {
      result = Storyblok.richTextResolver.normalRenderNode(tag)
    } 
    else {
      const innerHTML = tag.content.map( innerTag => {
        return Storyblok.richTextResolver.renderNode(innerTag)
      })

      result = `
       <p>${innerHTML.join("")}</p>
      `
    }
  } 
  return result
}


const Text = (tag) => {
  if (Array.isArray(tag.marks)) {
    
    const marks = [] // tag.marks
    for (let i = 0; i < marks.length; i++) {
      const mark = marks[i];

      if (mark.type === "link") {
        const link = mark.attrs
        // link.href
        const href = ""
        const parts = href.split("/")
        const internalSlug = parts[0] === ""

        if (internalSlug) {
          marks.splice(i, 1)


        }
      }
      
    }
    tag.marks.map( mark => {
      
    })
  }
  return null

  
}



const NodesMap = {
  'paragraph': Paragraph, //paragraph
  'image': Image, //paragraph
  'text': Text
}

let imageCounter;

Storyblok.richTextResolver.renderNode = (tag) => {
  // debugger
  let result = null
  if (typeof NodesMap[tag.type] !== "undefined") {
    const RenderNode = NodesMap[tag.type]
    result = RenderNode(tag)
  }

  if ( result === null ) {
    result = Storyblok.richTextResolver.normalRenderNode(tag)
  }
  return result
}



 
function createMarkup(storyblokHTML) {
  
  return {
    __html: Storyblok.richTextResolver.render(storyblokHTML),
  }
}

function createMarkup2(storyblokHTML) {
  return {
    __html: Storyblok.setComponentResolver(storyblokHTML),
  }
}



const RichTextField = ({ data }) => {
  
  imageCounter = 1;

  // ReactDOM.hydrate(element, container[, callback])

  return(
    <div 
      dangerouslySetInnerHTML={createMarkup(data)} 
      className="article-body rich-text"
    />
  )
}


export { RichTextField, createMarkup}
 
