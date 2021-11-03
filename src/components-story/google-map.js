import * as React from 'react'


const GoogleMap = ({ blok }) => {
  return(
    <div className="map-iframe my-5 shadow-z1-md">
      <iframe className="responsive-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.178177663404!2d18.77778711589221!3d50.3072669055524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711326d01eb1e33%3A0x28e374498c230805!2sO%C5%9Brodek%20Diagnostyczno-Terapeutyczny%20Pozytywka!5e0!3m2!1spl!2sus!4v1633958137760!5m2!1spl!2sus" width="100%"  allowfullscreen="" loading="lazy"></iframe>
    </div>
  )
}

export default GoogleMap
