import * as React from 'react'


const Teaser = ({ blok, context }) => {
  console.log("page context", context);
  return(
    <div className="teaser">
      <h2>
        {blok.headline}
      </h2>
      <p>
        {blok.intro}        
      </p>
    </div>
  )
}

export default Teaser
