import * as React from "react"
import PropTypes from 'prop-types'

import * as UserInfo from '../userInfo'
import { AnchorLink } from '../../components/components-bundle/components-bundle'
// AnchorLink




const Bold = ({node, innerContent, mark}) => {
  // debugger
  return <b>{innerContent}</b>
}


const Italic = ({node, innerContent, mark}) => {
  // debugger
  return <em>{innerContent}</em>
}

const Underline = ({node, innerContent, mark}) => {
  // debugger
  return <u>{innerContent}</u>
}

const Strike = ({node, innerContent, mark}) => {
  // debugger
  return <strike>{innerContent}</strike>
}

const LinkNode = ({node, innerContent, mark}) => {
  if (mark.attrs.linktype === "story") {
    return <AnchorLink  to={mark.attrs.href} addRoot>{innerContent}</AnchorLink>
  } 
  else if (mark.attrs.linktype === "url") {
    return <a  href={mark.attrs.href} target={mark.attrs.target}>{innerContent}</a>
  }
}

const Styled = ({node, innerContent, mark}) => {
  // debugger
  return <span className={mark.attrs.class}>{innerContent}</span>
}

const Code = ({node, innerContent, mark}) => {
  // debugger
  return <code>{innerContent}</code>
}

 







// Tomożna rozwinąć tak samo jak DynamicNodes
const Text = ({ node, ...props }) => {
  // const node = 1
  // debugger

  let idx = 0;
  let content = node.text
  
  // debugger
  if (typeof node.marks !== "undefined") {
    if (Array.isArray(node)) {
      debugger
    }
    if (node.marks.length === 0) {
      debugger      
    }
    // debugger

    const MarkContent = ({node, mark, idx, ...props}) => (
      <DynamicMark
        node={node}
        mark={mark}
        key={`${mark.type}-${idx}`} 
        {...props}
      />
    )



    // WERSJA 2
    node.innerContent = node.text

    let innerContent = node.text
    
    for (let idx = 0; idx < node.marks.length; idx++) {
      const mark = node.marks[idx];

      innerContent = MarkContent({node, innerContent: innerContent, mark, idx, ...props})
    }
    content = innerContent

  
    // content = node.innerContent
  } else {
    content = node.text
    
  }  

  return(content)    
}





/* MARKS
  bold: ()=>({tag:"b"})
  code: ()=>({tag:"code"})
  italic: ()=>({tag:"i"})
  link: ƒ link(t)
  strike: ()=>({tag:"strike"})
  strong: ()=>({tag:"strong"})
  styled: t=>({tag:[{tag:"span",attrs:t.attrs}]})
  underline: ()=>({tag:"u"})
*/ 
// wszystkie
const Marks = {
  'bold': Bold,
  'italic': Italic,
  'link': LinkNode,  
  'strike': Strike,  
  'underline': Underline,
  'styled': Styled,
  'code': Code,
  
}



/**
 * 
 * @param {*} props 
 * @param {*} props.node 
 */
function DynamicMark({ node, mark, MarksRegister, ...props }) {
  let Node = null
  if (typeof MarksRegister[mark.type] !== 'undefined') {
    Node = MarksRegister[mark.type]
  }
  else if (typeof Marks[mark.type] !== 'undefined') {
    // component fallback
    Node = Marks[mark.type]
  }
  else {
    return (
      <span className="alert-danger"> Marker <b>{mark.type}</b> nie został zdefiniowany </span>
    )
  }

  return (
    <Node node={node} mark={mark} {...props} />
  )
}
DynamicMark.propTypes = {
  // mark: PropTypes.string,
}
DynamicMark.defaultProps = {
  MarksRegister: {}
}


/**
 * 
 * @param {*} props 
 * @param {*} props.node 
 * @param {*} props.nodeType 
 */
const FullDynamicNode = ({ node, nodeType, NodesRegister, ...props }) => {
  // debugger
  let Node = null

  if (typeof NodesRegister[nodeType] !== 'undefined') {
    Node = NodesRegister[nodeType]
  } 
  else if (typeof Marks[nodeType] !== 'undefined') { 
    // component fallback
    Node = Marks[nodeType]
  } 
  else {
    return (
      <UserInfo.NotDefined
        blokName={nodeType}
      />
    )
  }
  return (
    <Node node={node} {...props} />
  )
}
FullDynamicNode.propTypes = {
  // blok: PropTypes.element.isRequired,
}
FullDynamicNode.defaultProps = {
  NodesRegister: {}
}


export { Text }