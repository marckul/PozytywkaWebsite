import * as React from 'react'
import { RichTextField } from '../components-story/rich-text'
import { ReactRichText } from '../components-story/react-rich-text/react-rich-text'

import { ArticleRichText } from './rich-text-new'





// import { Figure } from '../components/components-bundle/components-bundle';
import SbEditable from 'storyblok-react'

import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-storyblok-image'

import * as StringTools from '../functions/stringTools'

// window.getFluidGatsbyImage = getFluidGatsbyImage


// const ImgBlurred = 

const StoryImg = ({ blok }) => {
  const fluidProps = getFluidGatsbyImage(blok.image.filename, {
    base64Width: 40,
    // width: 100,
    // maxWidth: 900,
    // tracedSVG: true,
    // width:100,
    // quality: 100,
    // jpegQuality: 100,
    // placeholder: `dominantColor`,
  })
  console.log(fluidProps);
  /* // Test przypadku kiedy nie uda sie wczytać obrazu
  fluidProps.src = "helo"
  fluidProps.srcSet = "helo"
  fluidProps.srcSetWebp = "helo"
  fluidProps.srcWebp = "helo"
  */
  
  
  

  // debugger

  return (
    <SbEditable content={blok}>
      
      <Img 
        fluid={fluidProps} 
        // durationFadeIn={10000}
        // title="Tytuł obrazu"
        alt=""
        placeholderClassName="img-blurred"
      />
    </SbEditable>
  )
}



function Figure({alt, blok, caption, indented, className, imgClassName}) {
  // console.log("Figure src", blok);
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
  // debugger;
  if (filed === null || filed === undefined || filed === "") {
    return false    
  } 

  return !StringTools.ContainsOnlySpaces(filed)
}



function Header({ blok }) {

  let Intro;
  if (IsNotEmptyField(blok.intro)) {
    Intro = (<p className="lead pb-3">
      {blok.intro}
    </p>)
  }

  let FigureContent
  if (IsNotEmptyField(blok.image.filename)) {
    FigureContent = <Figure
      blok={blok}
    />
  }

  let DateString
  if (IsNotEmptyField(blok.publish_date)) {
    const publish_date = blok.publish_date;
    let dateString = StringTools.FormatDate(publish_date);
    console.log(dateString); // 9/17/2016

    DateString = <p>{StringTools.FormatDate(publish_date)}</p>

  }

  function ConsoleLog() {
    console.log("I'M HEDER ONE");
    
  }

  return(
    <div className="article-header" onClick={ConsoleLog}>
      <h1 className="h2" >{blok.title}</h1>
      {Intro}
      {DateString} 
      {FigureContent}
    </div>
    
  )
}


function BodOld1({ blok }) {
  return (
    <RichTextField
      data={blok.long_text}
    />
  ) 
}

function BodOld2({ blok }) {
  // NEW
  return (
    <div className="article-body rich-text">
      <ReactRichText  data={blok.long_text}  />
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

