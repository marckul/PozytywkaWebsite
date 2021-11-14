import * as React from 'react'

import { render as defaultRender, 
  MARK_LINK, 
  NODE_IMAGE, NODE_QUOTE, NODE_PARAGRAPH 
} from 'storyblok-rich-text-react-renderer';


// import {AnchorLink} from '../components/components-bundle/components-bundle'
import {AnchorLink, PrepareHref} from './links/common'

import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-storyblok-image'
import { ImageSb } from './images'




/* ==========================
    DEFAULT MARK RESOLVERS
============================= */

const LinkNode = (children, props) => {
  // debugger
  const HREF = PrepareHref(props, props.linktype);

  return <AnchorLink  to={HREF} link_type={props.linktype} target={props.target}>{children}</AnchorLink>
}

/* ==========================
    DEFAULT NODE RESOLVERS
=============================*/

const BlockQuote = (children) => {
  return(
    <blockquote class="blockquote">
      {children}
    </blockquote>
  )    
}

const ImageNode = (children, props) => {

  // // image:
  // //   alt: ""
  // //   copyright: ""
  // //   fieldtype: "asset"
  // //   filename: "https://a.storyblok.com/f/130598/1440x961/a441bc0ff8/dziewczynka-na-plazy.jpg"
  // //   focus: null
  // //   id: 3054416
  // //   name: ""
  // //   title: ""

  // debugger
  // return(
  //   ImageSb
  // )

  const filename = props.src
  const fluidProps = getFluidGatsbyImage(filename, {
    base64Width: 40,
  })
  console.log(fluidProps);

  return (
    <Img 
      fluid={fluidProps} 
      alt={props.alt}
      title={props.title}

      placeholderClassName="img-blurred"
    />
  )
}

const Paragraph = (children) => {
  // let children = RichTextResolver(nodes, props)
  // debugger

  if (typeof children === "undefined" || children === null) {
    children = [<span>{'\u00A0'}</span>] // to make empty parahgraph
  }
  return(
    <p>{children}</p>
  )    
}

// const defaultMarkResolvers = {
//   [MARK_LINK]: LinkNode
// }
// const defaultNodeResolvers = {
//   [NODE_QUOTE]: BlockQuote,
//   [NODE_IMAGE]: ImageNode,
//   [NODE_PARAGRAPH]: Paragraph, 
// }


/**
 * 
 */
class RichTextRender {
  /** DEFAULT RESOLVERS */
  RESOLVERS = {
    markResolvers: {
      [MARK_LINK]: LinkNode
    },
    nodeResolvers: {
      [NODE_QUOTE]: BlockQuote,
      [NODE_IMAGE]: ImageNode,
      [NODE_PARAGRAPH]: Paragraph, 
    }
  }

  /**
   * 
   * @param {*} document 
   * @param { object } resolvers - object containing resolver functions
   * @param { object } resolvers.markResolvers - object containing mark resolvers
   * @param { object } resolvers.nodeResolvers - object containing mark resolvers
   * 
   * @example
   * ```
      const resolvers = {
          nodeResolvers: {
            [NODE_IMAGE]: (children, { src, alt, title }) => { ... }
          },
          markResolvers: {
            [MARK_LINK]: (children, { href, target, linktype }) => { ... }
          }
      }
  * ```
  */
  constructor( resolvers = {} ) {
    // const key = "nodeResolvers"

    this.OverwriteResolverSet(resolvers, "nodeResolvers");
    this.OverwriteResolverSet(resolvers, "markResolvers");

  } 

  OverwriteResolverSet(resolvers, key) {
    const RESOLVERS = this.RESOLVERS;

    if (Object.hasOwnProperty.call(resolvers, key)) {
      for (const resolverName in resolvers[key]) {
        const resolverFunction = resolvers[key][resolverName];
        RESOLVERS[key][resolverName] = resolverFunction;
      }
    }
    this.RESOLVERS = RESOLVERS
  }

  render(document) {    
    const RESOLVERS = this.RESOLVERS
    return defaultRender(document, RESOLVERS)
  }
}



/* ========================== 
    ARTICLE NODE RESOLVERS
============================= */

let imageCounter = 1; 
const ArticleFloatImage = (children, props) => {
  

  const blok = {
    image: {
      filename: props.src,
      alt: props.alt,
    }
  }
  // debugger
  // image:
  //   alt: ""
  //   copyright: ""
  //   fieldtype: "asset"
  //   filename: "https://a.storyblok.com/f/130598/1440x961/a441bc0ff8/dziewczynka-na-plazy.jpg"
  //   focus: null
  //   id: 3054416
  //   name: ""
  //   title: ""

  // debugger
  // return(
  //   ImageSb
  // )


  // TODO: MAKING FIGURE WITH CAPTION IF THERE IS NOT EMPTY TITLE 
  const floatSide = imageCounter % 2 === 0 ? "float-right" : "float-left"

  const filename = props.src
  const fluidProps = getFluidGatsbyImage(filename, {
    base64Width: 40,
  })
  // console.log(fluidProps);

  imageCounter++
  return (
    <ImageSb 
      blok={blok} 
      className={`${floatSide} lonley-img`}
      imageContext={ {imageSize: "medium"} }
    />

    // <Img 
    //   fluid={fluidProps} 
    //   alt={props.alt}
    //   title={props.title}
    //   className={`${floatSide} lonley-img`}

    //   durationFadeIn={500} 
    //   loading="lazy"
    //   fadeIn={true}
    //   placeholderClassName="img-blurred"
    // />
  )
}

const newNodeResolvers = {
  [NODE_IMAGE]: ArticleFloatImage, 
}

const richTextRender = new RichTextRender({nodeResolvers: newNodeResolvers})
const ArticleRichText = (document) => {
  imageCounter = 1; // imageCounter reset 
  return richTextRender.render(document)
}


const defaultRichText = new RichTextRender()


export { RichTextRender, ArticleRichText, defaultRichText }



