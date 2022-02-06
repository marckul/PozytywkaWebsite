import * as React from "react"
import PropTypes from 'prop-types'
import * as UserInfo from '../userInfo'

import { Text } from './rich-nodes'




// NODES COMPONENTS
const HeadingLevels = {
  1: ({children}) => (<h1>{children}</h1>),
  2: ({children}) => (<h2>{children}</h2>),
  3: ({children}) => (<h3>{children}</h3>),
  4: ({children}) => (<h4>{children}</h4>),
  5: ({children}) => (<h5>{children}</h5>),
}
const Heading = ({ node: nodes, ...props }) => {
  // 
  const HX = HeadingLevels[nodes.attrs.level]

  let components = RichTextResolver(nodes, props)
  return(
    <HX>{components}</HX>
  )    
}

const Paragraph = ({ node: nodes, ...props }) => {
  let components = RichTextResolver(nodes, props)
  if (components.length === 0) {
    components = [<span>{'\u00A0'}</span>] // to make empty parahgraph
  }
  return(
    <p>{components}</p>
  )    
}

const OrderedList = ({ node: nodes, ...props }) => {
  let components = RichTextResolver(nodes, props)
  return(
    <ol>{components}</ol>
  )    
}
const BulletList = ({ node: nodes, ...props }) => {
  let components = RichTextResolver(nodes, props)
  return(
    <ul>{components}</ul>
  )    
}

const ListItem = ({ node: nodes, ...props }) => {
  let components = RichTextResolver(nodes, props)
  return(
    <li>{components}</li>
  )    
}
const HardBreak = ({ node: nodes, ...props }) => {
  return(
    <br/>
  )    
}

const BlockQuote = ({ node: nodes, ...props }) => {
  let components = RichTextResolver(nodes, props)
  return(
    <blockquote class="blockquote">
      {components}
      {/* <p>A well-known quote, contained in a blockquote element.</p> */}
    </blockquote>
  )    
}

let imageCounter = 1; 
const Image = ({node, innerContent, mark}) => {
  // TODO: MAKING FIGURE WITH CAPTION IF THERE IS NOT EMPTY TITLE 
  const attrs = node.attrs
  const floatSide = imageCounter % 2 === 0 ? "float-right" : "float-left"
  
  imageCounter++
  return(
    <img alt={attrs.alt} src={attrs.src} title={attrs.title} class={`${floatSide} lonley-img`} />
  )
}


const CodeBlock = ({ node: nodes, ...props }) => {
  let components = RichTextResolver(nodes, props)
  
  return( <pre><code> {components} </code></pre> )    
}
/**
 * 
 * @param {*} param0 
 */
const Blok = ({ node: nodes, ...props }) => {
  let components = RichTextResolver(nodes, props)  
  return( <pre><code> {components} </code></pre> )    
}

/* NODES
  blockquote: t=>({tag:"blockquote"})
  bullet_list: t=>({tag:"ul"})
  code_block: t=>({tag:["pre",{tag:"code",attrs:t.attrs}]})
  hard_break: t=>({singleTag:"br"})
  heading: t=>({tag:"h"+t.attrs.level})
  horizontal_rule: t=>({singleTag:"hr"})
  image: t=> {…}
  list_item: t=>({tag:"li"})
  ordered_list: t=>({tag:"ol"})
  paragraph: t=>({tag:"p"})
*/ 
// Wszstko a nawet wiecej
const Nodes = { 
  'heading': Heading,
  'paragraph': Paragraph,
  'text': Text,
  'ordered_list': OrderedList,
  'bullet_list': BulletList,
  'list_item': ListItem,
  'hard_break': HardBreak,
  'blockquote': BlockQuote,
  'image': Image,
  'code_block': CodeBlock,
}

/**
 * 
 * @param {*} props 
 * @param {*} props.node 
 */
const DynamicNode = ({ node, NodesRegister, ...props }) => {
  let Node = null

  if (typeof NodesRegister[node.type] !== 'undefined') {
    Node = NodesRegister[node.type]
  } 
  else if (typeof Nodes[node.type] !== 'undefined') { 
    // component fallback
    Node = Nodes[node.type]
  } 
  else {
    return (
      <span className="alert-danger" >Węzeł <b>{node.type}</b> nie został zdefiniowany</span>
    )
  }

  return (
    <Node node={node} {...props} />
  )

}
DynamicNode.propTypes = {
  // blok: PropTypes.element.isRequired,
}
DynamicNode.defaultProps = {
  NodesRegister: {}
}



const ReactRichText = ({ data, ...props }) => {
  imageCounter = 1; // reseting image counter
  

  const components = RichTextResolver(data, props)
  
  return(
    <>{components}</>
  )    
}


/** 
 * 
 * @param { object }  nodes - object that is returned from contains of Storyblok rich text - REQUIRED
 * 
 * @param { object }  props - object contains react properties that should be send 
 * to nodes functional components. (optional argument)
 * 
 * @param { object }  props.NodesRegister - object in key value format where key is 
 * name of rich text node and value is optional React component that overwrites 
 * rendering of that component
 * (optional argument)
 * 
 * @returns { array }  array of React components
 */
function RichTextResolver(nodes, props) {
  let idx = 0
  let components = null

  if (typeof nodes.content !== "undefined") {
    components = nodes.content.map(node => {
      idx++
      return (
        <DynamicNode
          node={node}
          key={`${node.type}-${idx}`}
          // NodesRegister={NodesRegister}
          {...props} 
        />
      )
    })
  } else {
    components = []
  }
  return components
}

export { ReactRichText, RichTextResolver } 

