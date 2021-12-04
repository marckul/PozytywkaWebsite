import * as React from 'react'
import { useState } from 'react'

import { MyModal } from '../components/modal/modal'

import { DynamicComponent } from './dynamicComponent'
import { LinkSb } from './links/links--story'



const ModalSb = ({ blok, ...props }) => {
  // https://stackoverflow.com/questions/53146575/storing-non-state-variables-in-functional-components
  console.log("CarouselSb");

  const [show, setShow] = useState(false);
  const handleModalShow = () => {
    console.log("Modal");
    setShow(true)
  }
  
  const handleClose = () => {
    setShow(false)
  }

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
  blok.link_type = 'modal-link'

  return(
    <div>
      <LinkSb blok={blok} onClick={handleModalShow}/>
      {ModalContent}
    </div>
  )
}


export { ModalSb }