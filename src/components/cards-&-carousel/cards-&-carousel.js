import * as React from 'react'

import Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./cards-&-carousel.css"


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1205 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1205, min: 750 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 750, min: 0 },
    items: 1
  }
};



function CardBootTemplate({title, topNote, children, bottomNote}) {
  return(
    <div className="offer-card-col ">
      <div className="shadow-z1-md offer-card" >
        <div className=" card-inner">
          <div className="card-head">
            <h5 className="">{title}</h5>
            <p className="small sticky-note">{topNote}</p>
          </div>
          <div className="card-body small">    
            <div className="main-text">{children}</div>
            <p className="small ms-auto m-0 sticky-note">{bottomNote}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// TO DELETE
/*
function CardBoot({number}) {
  return(
    <CardBootTemplate
      title={`Diagnoza dla dzieci ${number}`}
      topNote="Tu bedzie notatka"
      bottomNote="Cena: 750 zł"
    >
      <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <p>Voluptate qui labore aut eaque aperiam error doloremque, laudantium ex, obcaecati fugiat nulla voluptatem? Debitis minus quas illo consequuntur </p>
    </CardBootTemplate>
  )
}
*/ 

function MyCarousel({children, containerClass, ...props}) {
  return(
    <div className="react-carousel-container mt-4" >
      <small className="react-carousel-info d-block text-muted">
        <em>
          <p className="info my-0" >Aby zobaczyć dostępne opcje przesuwaj karty, aby zobaczyć szczegóły naciśnij tytuł karty</p>
          <p className="info-touch my-0" >Aby zobaczyć dostępne opcje przesuwaj karty, aby zobaczyć szczegóły naciśnij  tytuł karty</p>
        </em>
      </small>
      <Carousel 
        {...props}
        // centerMode={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={500}
        keyBoardControl={true}
        containerClass={`react-carousel ${containerClass}`}
        removeArrowOnDeviceType={[ "tablet", "mobile"]}
        itemClass="card-container"
        dotListClass="cards-dots-controls"
        renderDotsOutside={true}
      >
        {children}
      </Carousel>
    </div>
  )
}


function CircleImgCard({ title, imgSrc, children }) {
  const style = {
    "--border-color": "var(--color-teal--medium)"
    // $color-teal--medium
  }
  return (
    <div className="circle-image-card col-md-4 py-5"
      style={style}
    >
      <div className="pb-5">
        <img src={imgSrc} alt="" className="img-fluid shadow-z1-md border border-5 rounded-circle" />
      </div>
      <h4>{title}</h4>
      <p>
        {children}
      </p>
    </div>
  )
}


export {MyCarousel, CardBootTemplate, CircleImgCard}