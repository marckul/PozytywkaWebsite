import * as React from 'react'

import StoryblokClient from 'storyblok-js-client'


 
let Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_API_KEY
})
Storyblok.richTextResolver.normalRenderNode = Storyblok.richTextResolver.renderNode

// Storyblok.richTextResolver.renderNode = (tag) => {
//   let result = Storyblok.richTextResolver.normalRenderNode(tag)
//   if (typeof NodesMap[tag.type] !== "undefined") {
//     const RenderNode = NodesMap[tag.type]
//     result = RenderNode(tag)
//   }
//   return result
// }



 


class RichTextResolver {
  // NodesRegister = {
  //   'paragraph': null, 
  //   'image': null, 
  // }
  // Storyblok = Storyblok

  /**
   * 
   * @param { object } NodesRegister - object in key: value format where
   * key is proper storyblok rich-text node name and value is one parameter
   * FUNCTION that takes tag and renders it. In given FUNCTION "this" object 
   * of RichTextResolver instance is binding and methods of instance can be 
   * using
   */
  constructor(NodesRegister) {

    
    if (typeof NodesRegister === "object") {
  
      // BINDING THIS TO RENDERING FUNCTIONS
      // https://ponyfoo.com/articles/binding-methods-to-class-instance-objects
      for (const key in NodesRegister) {
        if (Object.hasOwnProperty.call(NodesRegister, key)) {
          NodesRegister[key] = NodesRegister[key].bind(this)
        }
      }

      this.NodesRegister = NodesRegister
    }
    
    let Storyblok = new StoryblokClient({
      accessToken: process.env.STORYBLOK_API_KEY
    })
    Storyblok.richTextResolver.normalRenderNode = Storyblok.richTextResolver.renderNode
    Storyblok.richTextResolver.NodesMap = this.NodesRegister
    // debugger

    this.Storyblok = Storyblok
    if (typeof window !== "undefined") {
      window.richTextResolver = Storyblok.richTextResolver
    }
    

    this.Storyblok.richTextResolver.renderNode = (tag) => {
      const NodesMap = this.Storyblok.richTextResolver.NodesMap

      // debugger

      let result = this.Storyblok.richTextResolver.normalRenderNode(tag)

      if (typeof NodesMap[tag.type] !== "undefined") {
        const RenderNode = NodesMap[tag.type]
        result = RenderNode(tag)
      }
      return result
    }
  }
  NodesRegister = {

  }
  
  createMarkup(storyblokHTML) {
    return {
      __html: this.Storyblok.richTextResolver.render(storyblokHTML),
    }
  }
  

}



export { RichTextResolver, Storyblok}



 
