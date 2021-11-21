import * as React from 'react'
import { useRef } from 'react'

import ModalB from 'react-bootstrap/Modal'

const MyModal = ({children, show, onHide}) => {
  const windowOffset = useRef(0)
  console.log('MyModal > windowOffset', windowOffset);

  const onClose = () => {
    onHide()
    console.log('scrolling to ', windowOffset.current);
    setTimeout(()=> {
      document.body.classList.remove('modal-open-new')
      window.scrollTo(0, windowOffset.current)
      document.body.style.top = ''
    }, 300)
  }

  if (show) {
    console.log("handleModalShow");
    windowOffset.current = window.scrollY
    document.body.style.top = `-${window.scrollY}px`// `position: fixed; top: -${windowOffset.current}px; right: 17px`   
    document.body.classList.add('modal-open-new')
  } 

  return(
    <ModalB show={show} onHide={onClose} size="lg" contentClassName="custom">
      <ModalB.Header closeButton></ModalB.Header>
      <ModalB.Body >{children}</ModalB.Body>
    </ModalB>
  )
}



export {MyModal}