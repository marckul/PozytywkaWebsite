import * as React from 'react'
import { useState, useRef } from 'react'
import { Link } from 'gatsby'
import { DynamicComponent } from '../dynamicComponent'

import { MyCarousel, CardBootTemplate } from '../../components/cards-&-carousel/cards-&-carousel'
import { RichTextResolver } from '../rich-text-old/rich-text-renderer'

import { defaultRichText } from '../rich-text-new'

import Modal from 'react-bootstrap/Modal'




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

/*
const MyModal = ({children, show, onHide}) => {
  const windowOffset = useRef(0)
  const inputEl = useRef(null);
  const [remove, setRemove] = useState(false)

  console.log(windowOffset);
  console.log(ReactDOM);

  if (show) {
    setRemove()
    console.log("handleModalShow");
    windowOffset.current = window.scrollY
    
    document.body.classList.add('modal-open')
    // document.body.style.position = 'fixed'// `position: fixed; top: -${windowOffset.current}px; right: 17px`
    // document.body.style.top = `-${windowOffset.current}px`// `position: fixed; top: -${windowOffset.current}px; right: 17px`   
    // document.body.style.paddingRight = `90px`
  } else {
    // document.body.style.position = ''
    // document.body.style.top = ''
    // window.scrollTo(0, windowOffset.current)
    // document.body.style = ''
    document.body.classList.remove('modal-open')
  }

  // return(
  //   <Modal centered show={show} onHide={onHide} size="lg" backdrop="static">
  //     <Modal.Header closeButton />
  //     <Modal.Body scrollable="false">{children}</Modal.Body>
  //   </Modal>
  // )
  const domNode = document.getElementsByTagName('body')[0]
  const element = (
    <div ref={inputEl} remove={remove}>
      <div class={`modal fade ${show ? 'show' : ''}`} id="exampleModal" tabindex="-1" aria-hidden="true" onClick={onHide}>
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onHide}></button>
            </div>
            <div class="modal-body">
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className={`modal-backdrop fade ${show ? 'show' : ''}`} onClick={onHide}></div>
    </div>
  );

  if (show) {
    return ReactDOM.createPortal(
      element,
      domNode
    );
  } else {
    return null
  }  
}
 */

const MyModal = ({children, show, onHide}) => {
  const windowOffset = useRef(0)
  console.log('MyModal > windowOffset', windowOffset);

  const onClose = () => {
    onHide()
    console.log('scrolling to ', windowOffset.current);
    // document.body.classList.remove('modal-open')
    // document.body.style.position = ''
    setTimeout(()=> {
      // window.scrollTo(0, windowOffset.current)
      document.body.classList.remove('modal-open-new')
      window.scrollTo(0, windowOffset.current)
      document.body.style.top = ''
      // document.body.style = ''
    }, 300)
    
  }
  

  if (show) {
    console.log("handleModalShow");
    windowOffset.current = window.scrollY
    document.body.style.top = `-${window.scrollY}px`// `position: fixed; top: -${windowOffset.current}px; right: 17px`   
    document.body.classList.add('modal-open-new')
  } 
  // else {
  //   // document.body.style.position = ''
  //   // document.body.style.top = ''
  //   window.scrollTo(0, windowOffset.current)
  //   // document.body.style = ''
  // }

  return(
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body >{children}</Modal.Body>
    </Modal>
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