import * as React from 'react'

import { RichTextRender } from './rich-text-new'
import {  NODE_PARAGRAPH } from 'storyblok-rich-text-react-renderer';


const Paragraph = (children) => {
  return children
}
const nodeResolvers = {
  [NODE_PARAGRAPH]: Paragraph
}
const HeaderRichText = new RichTextRender({nodeResolvers})
// const HeaderRichText = new RichTextRender()


const H1 = (props) => {
  // debugger
  return(
    <h1 {...props} />
  )
}
const H2 = (props) => (
  <h2 {...props} />
)
const H3 = (props) => (
  <h3 {...props} />
)
const H4 = (props) => (
  <h4 {...props} />
)
const H5 = (props) => (
  <h5 {...props} />
)
const HeadersRegister = {
  "h1": H1,
  "h2": H2,
  "h3": H3,
  "h4": H4,
  "h5": H5,
}
const TitlesRegister = {
  "page_title": H1,
  "section_title": H2,
  "container_title": H3,
  "h4": H4,
  "h5": H5,
}

const TextHeader = ({ blok, context, rootTag, ...props }) => {
  // console.log("TextHeader", rootTag);

  
  let Header = HeadersRegister[rootTag];
  if (blok.header_type) {    
    Header = TitlesRegister[blok.header_type];
  }
  // debugger
  // console.log(Header);
  
  return(
    <Header> {/* className="py-4" */}
      {HeaderRichText.render(blok.text)}
    </Header>
  ) 
}
TextHeader.defaultProps = {
  rootTag: "h1"
}



const TextLead = ({ blok }) => {
  return(
    <p className="lead">
      {/* {blok.text} */}
      {HeaderRichText.render(blok.text)}
    </p>
  ) 
}


export { TextHeader, TextLead }
