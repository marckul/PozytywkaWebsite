import * as React from 'react'
import './css-grid.css'


const Row = ({children, colsNumber}) => {
  return(
    <div className="css-grid-row " style={{"--bs-columns": colsNumber}}>
      {children}
    </div>
  )
}
Row.defaultProps = {
  colsNumber: "5",
  colsWidth: [2, 3]

}

/**
 * 
 * @param { object } props 
 * @param { object } props.position - left or right 
 */
const Column = ({children, position, className}) => {

  if (children !== undefined ) {
    if (children.type === "img") {
      className += " img-grid"
      console.log("I'm image!");    
    }
    else {
      className += " text"
    }
  }

  // debugger;
  const style = {
    "--grid-column-position": position
  }

  return(
    <div className={`${className} css-grid--column`} style={style}>
      {children}
    </div>
  )
}

Column.defaultProps = {
  className: ""
}



const Quotation = ({children}) => {
  return(
    <figure className="h4 big-blockquote">
      {/* <h3> </h3> */}
      <blockquote  className="blockquote">
        {children}
      </blockquote >
      <figcaption className="blockquote-footer lead">
        Hans Asperger <i>Neuroplemiona</i>
      </figcaption>
    </figure>
  )
}





export {Row, Column, Quotation}
