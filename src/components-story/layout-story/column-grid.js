import * as React from 'react'
import PropTypes from 'prop-types'

import { DynamicComponent } from '../dynamicComponent'
import { TextHeader } from '../text-bloks'

import './styles/column-grid.css'

// import SbEditable from 'storyblok-react'



const Components = {
  'text_header': ({blok}) => (
    <TextHeader
      rootTag='h3'
      blok={blok}
    />
  ),
}




// columns_blok
const ColumnSb = ({ blok, columnContext, ...props }) => {
  const { colWidthLg } = columnContext
  
  const imageContext = {
    imageSize: "small"
  }
  
  const columnSizes = {
    3: "col-12 col-md-6 col-lg-3",
    4: "col-12 col-lg-4",
    6: "col-12 col-lg-6",
  }

  const classArray = ["story-column", "auto-margin", columnSizes[colWidthLg], "py-3", "my-4"] // story-column
  
  let components = [<div className="py-5">{'\u00A0'}</div>]
  if (blok.body) {
    components = blok.body.map( blok => (
      <DynamicComponent 
        blok={blok} 
        key={blok._uid} 
        {...props}
        ComponentsRegister={Components}
        imageContext={imageContext}
      />
    ))
    
  }

  return(
  <div className={classArray.join(" ")}>
    {components}
  </div>
  )
}
ColumnSb.defaultProps = {
  columnContext: {
    colWidthLg: 4
  }
}
ColumnSb.propTypes = {
  columnContext: PropTypes.object
}



const ColumnsGridSb = ({ blok, ...props }) => {
  // debugger

  const columnContext = {
    colWidthLg: 4,
    columnsNumber: blok.body.length
  }
  // debugger
  if (blok.column_width_lg) {
    columnContext.colWidthLg = blok.column_width_lg    
  }

  const components = blok.body.map( blok => (
    <DynamicComponent 
      blok={blok} 
      key={blok._uid} 
      columnContext={columnContext}
      {...props}
    />
  ))

  return(
    <div className="story-row row justify-content-center">
      {components}
    </div>
  )
  

}

export { ColumnsGridSb, ColumnSb }