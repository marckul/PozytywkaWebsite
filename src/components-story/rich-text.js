import * as React from 'react'
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
      // debugger
      
      // '<img alt="" src="https://a.storyblok.com/f/130598/1440x961/a441bc0ff8/dziewczynka-na-plazy.jpg" title="" />'
      // debugger;
      const attrs = tag.content[0].attrs

      result = `
        <figure class="${floatSide} figure border p-2  indented-figure ">
          <img alt="${attrs.alt}" src="${attrs.src}" title="${attrs.title}" class="figure-img img-fluid" />
        </figure>
      `
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

const NodesMap = {
  'paragraph': Paragraph, //paragraph
  'image': Image, //paragraph
}

let imageCounter;

Storyblok.richTextResolver.renderNode = (tag) => {
  let result = Storyblok.richTextResolver.normalRenderNode(tag)
  if (typeof NodesMap[tag.type] !== "undefined") {
    const RenderNode = NodesMap[tag.type]
    result = RenderNode(tag)
  }
  return result
}


Storyblok.setComponentResolver( (component, blok) => {
  switch(component) {
    case 'image':
      return `<button>${blok.button_text}</button>`
      break;
    case 'contact_form':
      return `<a href="mailto:${blok.mail}">Mail me at: ${blok.mail}</a>`
      break;
  }
})

 
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

  return(
    <div 
      dangerouslySetInnerHTML={createMarkup(data)} 
      className="article-body rich-text"
    />
  )
}


export default RichTextField
 
