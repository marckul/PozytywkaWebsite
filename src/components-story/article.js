import * as React from 'react'

import SbEditable from 'storyblok-react'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-storyblok-image'

import { ArticleRichText } from './rich-text-new'
import * as StringTools from '../functions/stringTools'
import { ImageSb } from './images'

// window.getFluidGatsbyImage = getFluidGatsbyImage


// const ImgBlurred = 

const StoryImg = ({ blok }) => {
  return (
    <SbEditable content={blok}>
      <ImageSb blok={blok}/>
    </SbEditable>
  )
}



function Figure({alt, blok, caption, indented, className, imgClassName}) {
  if (indented) {
    className += " indented-figure" 
  }

  return(
    // <figure className={`figure border p-2 ${className} `}>
    //   <figcaption class="small text-center">{caption}</figcaption>
    // </figure>
      <StoryImg blok={blok} className={`${imgClassName} img-fluid`} /> 
  )
}
Figure.defaultProps = {
  className: "",
  indented: false,
}






function IsNotEmptyField(filed) {
  if (filed === null || filed === undefined || filed === "") {
    return false    
  } 

  return !StringTools.ContainsOnlySpaces(filed)
}



function Header({ blok, context, ...props }) {

  let Intro;
  if (IsNotEmptyField(blok.intro) && blok.show_intro) {
    Intro = (<p className="lead pb-3">
      {blok.intro}
    </p>)
  }

  let FigureContent
  if (IsNotEmptyField(blok.image.filename)) {
    FigureContent = <Figure blok={blok} />
  }

  let DateString
  if (IsNotEmptyField(context.publish_date)) {
    const publish_date = context.publish_date;
    DateString = <p>{StringTools.FormatDate(publish_date)}</p>
  }
  else if (IsNotEmptyField(blok.publish_date)) {
    const publish_date = blok.publish_date;
    // let dateString = StringTools.FormatDate(publish_date);

    DateString = <p>{StringTools.FormatDate(publish_date)}</p>
  }

  return(
    <div className="article-header" >
      <h1 className="h2" >{blok.title}</h1>
      {Intro}
      {DateString} 
      {FigureContent}
    </div>
    
  )
}


function Body({ blok }) {

  const content = ArticleRichText(blok.long_text)

  return (
    <div className="article-body rich-text">
      {content}
    </div>
    
  ) 
}

export {
  Header, Body
}

