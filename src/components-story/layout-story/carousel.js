import * as React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import { DynamicComponent } from '../dynamicComponent'

import { MyCarousel, CardBootTemplate } from '../../components/cards-&-carousel/cards-&-carousel'
import { RichTextResolver } from '../rich-text-old/rich-text-renderer'

import { defaultRichText } from '../rich-text-new'
import { MyModal } from '../../components/modal/modal'



const CarouselSb = ({ blok, ...props }) => {
  console.log("CarouselSb");
  const components = blok.body.map( blok => (
    <DynamicComponent 
      blok={blok} 
      key={blok._uid} 
      {...props}
      // ComponentsRegister={Components}
    />
  ))

  const htmlClasses = []
  if (components.length < 3) {
    htmlClasses.push('justify-content-center')
  }
  
  return(
    <MyCarousel containerClass={htmlClasses.join(' ')}>
      {components}
    </MyCarousel>
  )    
}

const richTextResolver = new RichTextResolver()

const OfferCard = ({ blok, ...props }) => {
  // https://stackoverflow.com/questions/53146575/storing-non-state-variables-in-functional-components
  console.log("CarouselSb");

  const [show, setShow] = useState(false);
  const handleModalShow = () => {
    setShow(true)
  }

  
  const handleClose = () => {
    setShow(false)
  }

  const title = blok.title
  const main_text = blok.main_text
  const topNote = blok.top_note
  const bottomNote = blok.bottom_note

  // debugger

  let modal_components = []
  const ModalContent = []
  if (blok.modal_body) {
    modal_components = blok.modal_body.map( blok => (
      <DynamicComponent 
        blok={blok} 
        key={blok._uid} 
        {...props}
      />
    ))

    ModalContent.push(
      <>
        <MyModal centered show={show} onHide={handleClose} size="lg">
          {modal_components}
        </MyModal>
        <div className="visually-hidden">
          {modal_components}
        </div>
      </>
    )
  }
  
  return(
    <>
      <div className="offer-card-col " >
        <div className="shadow-z1-md offer-card" >
          <div className=" card-inner">
            <div className="card-head">
              <h5 className="user-select-none" onClick={handleModalShow}>{title}</h5>
              <p className="small sticky-note user-select-none">{topNote}</p>
            </div>
            <div className="card-body small">    
              <div className="main-text user-select-none">
                {defaultRichText.render(blok.main_text)}
              </div>
              <p className="small ms-auto m-0 sticky-note user-select-none">{bottomNote}</p>
            </div>
          </div>
        </div>
        {ModalContent}
      </div>
    </>
  )    
}

// const OfferCard = ({ blok, ...props }) => {
//   return(
//     <CardBootTemplate
//       title={blok.title}
//       topNote={blok.top_note}
//       bottomNote={blok.bottom_note}
//     >
//       {defaultRichText.render(blok.main_text)}
//     </CardBootTemplate>
//   )
// }

export { CarouselSb, OfferCard }