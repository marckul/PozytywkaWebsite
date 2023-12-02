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
const Column = React.forwardRef(
  ({children, position, className}, ref) => {

  if (children !== undefined ) {
    if (children.type === "img") {
      className += " img-grid"
    }
    else {
      className += " text"
    }
  }

  const style = {
    "--grid-column-position": position
  }

  return(
    <div ref={ref} className={`${className} css-grid--column`} style={style}>
      {children}
    </div>
  )
})

Column.defaultProps = {
  className: ""
}


const Quotation = React.forwardRef(
  (props, ref) => {

    const { children } = props
    const quote = children[0] ? children[0] : children
    const caption = children[1] || null;
    
    return(
      <figure ref={ref} {...props} className="h4 big-blockquote">
        <blockquote  className={`blockquote ${!caption && 'pb-0'}`}>
          {quote}
        </blockquote >
        {caption &&
          <figcaption className="blockquote-footer lead">
            {caption}
          </figcaption>
        }
      </figure>
    )
  }
);


// const Quotation = ({children, ref, ...props}) => {
//   return(
//     <figure ref={ref} {...props} className="h4 big-blockquote">
//       {/* <h3> </h3> */}
//       <blockquote  className="blockquote">
//         {children}
//       </blockquote >
//       <figcaption className="blockquote-footer lead">
//         Hans Asperger <i>Neuroplemiona</i>
//       </figcaption>
//     </figure>
//   )
// }





export {Row, Column, Quotation}
