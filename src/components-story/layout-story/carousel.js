import * as React from 'react'
import { DynamicComponent } from '../dynamicComponent'

import { MyCarousel, CardBootTemplate } from '../../components/cards-&-carousel/cards-&-carousel'
import { RichTextResolver } from '../rich-text-renderer'




// import * as TextBloks  from '../text-bloks'
  
// const Components = {
//   'text_header': ({blok}) => (
//     <TextBloks.TextHeader
//       rootTag='h2'
//       blok={blok}
//     />
//   ),
//   'text_lead': TextBloks.TextLead
// }





const CarouselSb = ({ blok, ...props }) => {
  console.log("CarouselSb");


  // debugger
  const components = blok.body.map( blok => (
    <DynamicComponent 
      blok={blok} 
      key={blok._uid} 
      {...props}
      // ComponentsRegister={Components}
    />
  ))

  // debugger
  
  return(
    <MyCarousel>
      {components}
    </MyCarousel>
  )    
}


const richTextResolver = new RichTextResolver()

const OfferCard = ({ blok, ...props }) => {
  console.log("CarouselSb");

  // debugger
  // const components = blok.body.map( blok => (
  //   <DynamicComponent 
  //     blok={blok} 
  //     key={blok._uid} 
  //     {...props}
  //     // ComponentsRegister={Components}
  //   />
  // ))

  // debugger

  
  
  return(
    <CardBootTemplate
      title={blok.title}
      topNote={blok.top_note}
      bottomNote={blok.bottom_note}
    >
      <span
        dangerouslySetInnerHTML={richTextResolver.createMarkup(blok.main_text)}
      />
    </CardBootTemplate>
  )    
}



export { CarouselSb, OfferCard }