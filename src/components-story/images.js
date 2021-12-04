import * as React from 'react'
import PropTypes from 'prop-types'


import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-storyblok-image'



const allImageSizes = {
  small: 500,
  medium: 750,
  large: 1020,
  xlarge: 1440,
}

const ImageSb = ({ blok, imageContext, ...props }) => {
  /**
   * TODO:
   * Dojśc do tego dlaczego w Rich text renderuje się dyży obraz mimo że jset ustawiony średni obraz
   */
  let { maxWidth, imageSize } = imageContext

  if (typeof maxWidth === "undefined") {
    maxWidth = allImageSizes[imageSize]
  }

  const fluidProps = getFluidGatsbyImage(blok.image.filename, {
    base64Width: 40,
    // wyglada na to że funkcja storyblok z jakiegoś powodu podwaja 
    // liczbę pikseli (retina image?)
    maxWidth: maxWidth,
    width: maxWidth,
  })
  
  return (
    <Img 
      fluid={fluidProps} 
      alt={blok.image.alt}
      placeholderClassName="img-blurred"
      {...props}
    />
  )
}
ImageSb.defaultProps = {
  imageContext: {
    imageSize: "large",
    // maxWidth: 100
  }
}


const ImageStatic = ({ blok }) => {
  const fluidProps = getFluidGatsbyImage(blok.image.filename, {
    base64Width: 40,
  })
  
  return (
    <Img 
      fluid={fluidProps} 
      alt={blok.image.alt}
      placeholderClassName="img-blurred"
    />
  )
}



class StyleClasses {
  static ClassesProps = {
    margin_bottom: "",
  }

  static resolve(blok) {
    const ClassesProps = this.ClassesProps
    const classesArray = []
    for (const key in ClassesProps) {
      if (Object.hasOwnProperty.call(blok, key)) {
        const htmlClassesSet = blok[key];
        classesArray.push(htmlClassesSet)
      } 
      else {
        const defaultClasses = ClassesProps[key];
        classesArray.push(defaultClasses)
      }
    }

    return classesArray.join(" ")
  }
}


const ImageBlokSb = ({ blok, imageContext, ...props }) => {
  const htmlClasses = StyleClasses.resolve(blok)
  return( 
    <ImageSb blok={blok} imageContext={imageContext} className={htmlClasses}/>
  )

}
ImageBlokSb.defaultProps = {
  imageContext: { 
    imageSize: "large",
  }
}
ImageBlokSb.propTypes = {
  columnContext: PropTypes.object
}







export { ImageSb, ImageStatic, ImageBlokSb }