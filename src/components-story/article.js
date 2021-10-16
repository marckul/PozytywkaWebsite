import * as React from 'react'
import RichTextField from '../components-story/rich-text'

import { Figure } from '../components/components-bundle/components-bundle';

import * as StringTools from '../functions/stringTools'



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
      src={blok.image.filename}
      // caption="A caption for the above image."
      // alt="A caption for the above image."
    />
  }

  const publish_date = blok.publish_date;

  let dateString = StringTools.FormatDate(publish_date);


  console.log(dateString); // 9/17/2016
  

  console.log("HELLO INTERNET! I'M HEDER ONE");
  return(
    <div className="article-header">
      <h1 className="h2" >{blok.title}</h1>
      {Intro}
      <p>{dateString}</p>
      {FigureContent}
    </div>
    
  )
}


function Body({ blok }) {
  return (
    <RichTextField
      data={blok.long_text}
    />
  ) 
}


export {
  Header, Body
}

