import * as React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import { DynamicComponent } from '../dynamicComponent'

import { MyCarousel, CardBootTemplate } from '../../components/cards-&-carousel/cards-&-carousel'
import { RichTextResolver } from '../rich-text-old/rich-text-renderer'

import { defaultRichText } from '../rich-text-new'
import { MyModal } from '../../components/modal/modal'

// import "./cards-&-carousel.css"

const NewWindowIcon = ({onClick}) => (
  <svg onClick={onClick} style={styles.newWindowIcon} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-up-right-square cursor-pointer" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
  </svg>
  // <svg onClick={onClick} style={styles.newWindowIcon} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-up-right cursor-pointer" viewBox="0 0 16 16">
  //   <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
  // </svg>
)

const CarouselSb = ({ blok, ...props }) => {
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

  let modal_components = []
  const ModalContent = []
  if (blok.modal_body && blok?.modal_body?.length > 0) { // && blok.modal_body?.length > 0
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

  const cardHeadClasses = []
  let newWindow;
  if (ModalContent.length > 0) {
    cardHeadClasses.push('cursor-pointer');
    newWindow = <NewWindowIcon onClick={handleModalShow}/>
  }
  
  return(
    <>
      <div className="offer-card-col " >
        <div className="shadow-z1-md offer-card" >
          <div className="card-inner">
          {ModalContent.length > 0 ? newWindow : null}
            <div className={`card-head ${cardHeadClasses}`}>
              <h5 className="user-select-none" onClick={handleModalShow}>
                {title} 
              </h5>
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

const styles = {
  newWindowIcon: {
    position: 'absolute', 
    right: 10, 
    top: 10, 
    width: '1em', 
    opacity: .2,
  }
}