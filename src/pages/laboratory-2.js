import * as React from 'react'
import Layout from '../components/layout'

import { Container } from '../components/components-bundle/components-bundle'
import { Link } from 'gatsby'

import * as Grid from '../components/css-grid/css-grid'
import boyOnMolo from '../assets/images/chlopczyk-na-molo.jpg'
import spacerWGorach from '../assets/images/spacer-w--gorach--30.jpg'

// import HeroImage from '../assets/images/offer-page-hero--prod.jpg'

// import {MyCarousel, CardBootTemplate} from '../components/cards-&-carousel/cards-&-carousel'

// function Container({ children, rootElem, ...props }) {
//   props.className += " container-box py-5"

//   const template = <div className="container my-5">{children}</div>
//   const element = React.createElement(
//     rootElem, props, template
//   )
//   return(element)
// }

// class Container2 extends React.Component {

// }

Container.defaultProps = {
  className: "",
  rootElem: "div"
}


const Wrapper = ({children, ...props}) => {
  return(
    <section {...props} >
      {children}
    </section>
  )
}


function ConditionalTag({tag}) {
  const Tag = tag

  // debugger


  return (
    <Tag className="hello" >
      Conditional rendering
    </Tag>
  )

}

/**
 * @param { object } props.style - the parent element styles 
 * @param { object } props.minPadding - minimal padding for the element
 */
class EqualPadding extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      padding: this.props.minPadding
    }    

    this.setMinPadding(this.props.minPadding)
    this.textStyles = {  }

    this.wrapperStyles = props.style
    this.wrapperStyles.padding = this.props.minPadding
    
    
    this.refsWrapper = React.createRef()
    this.refsText = React.createRef()
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.fetchChildrenStyles()
      this.fetchParentStyles()
      this.addEqualPadding()

      
      window.addEventListener(
        'resize', 
        () => this.updateEqualPadding()
      )
    }
  }
  setMinPadding(string) {
    this.minPadding = parseInt(string)
  }

  wrapperData = {
    proportion: undefined,
    wrapperWidth: undefined
  }
  
  fetchChildrenStyles() {
    const stylesText = window.getComputedStyle(this.refsText.current)
    
    const textWidth = parseInt(stylesText.width)
    const textHeight = parseInt(stylesText.height)
    const textArea = textWidth * textHeight

    this.textRequiredArea = textArea;
  }
  fetchParentStyles() {
    const stylesWrapper = window.getComputedStyle(this.refsWrapper.current)

    const wrapperWidth = parseInt(stylesWrapper.width)
    const wrapperHeight = parseInt(stylesWrapper.height)

    const allWrapperPaddings = this.getPaddingNumbers(stylesWrapper.padding)
    const minWrapperPadding = Math.min(...allWrapperPaddings)
    const wrapperArea = wrapperWidth * wrapperHeight
    
    const proportion = wrapperHeight / wrapperWidth

    this.wrapperData = {
      proportion: proportion,
      wrapperWidth: wrapperWidth
    }

  }

  

  updateEqualPadding() {
    console.log("### UPDATE EQUAL PADDING ###");
    // RAW RENDERING
    this.setNewPadding(0)

    // FETCHING STYLES AND 
    this.fetchChildrenStyles()
    this.fetchParentStyles()

    this.addEqualPadding()

  }
  addEqualPadding() {
    console.log("EqualPadding.addEqualPadding()");

    const { proportion, wrapperWidth } = this.wrapperData

    const requiredArea = this.textRequiredArea

    const newHeight = Math.sqrt(proportion * requiredArea)
    const newWidth = requiredArea / newHeight
    const newPadding = (wrapperWidth - newWidth) / 2

    if (this.minPadding < newPadding) {

      this.setNewPadding(newPadding)
      // console.log(this.textStyles)
    }
  }

  /**
   * @param { number } newPadding 
   */
  setNewPadding(newPadding) {

    this.wrapperStyles = {
      ...this.wrapperStyles,
      padding: `${newPadding}px`,
    }
    this.setState({
      padding: newPadding
    })

  }

  /**
   * 
   * @param { string } paddingStr 
   */
  getPaddingNumbers(paddingStr) {

    const numbers = [];
    paddingStr.split(" ").forEach( string => {
      const number = parseFloat(string)
      // return number;

      if (!isNaN(number)) {
        numbers.push(number)
      }
    })

    return numbers
  }
  
  render() {
    return(
      <div  ref={this.refsWrapper} className={`${this.props.className} equal-padding`} style={this.wrapperStyles}>
        <div  ref={this.refsText} style={this.textStyles}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
EqualPadding.defaultProps = {
  minPadding: "0px"
}



const styles = {
  "min-height": "90vh",
  "padding": "10vh",
  "background-color": "teal",
}


const LaboratoryPage2 = () => {  
  return(
    <Layout header="transparent-light" topSpace={true} >
      <Container rootElement="section" >
        <h1>Testing conditional rendering</h1>
        <ConditionalTag tag="h3" />
      </Container>
      <Container rootElement="section" >
        <EqualPadding className=" my-5" style={styles} minPadding="2rem">
          <h3 className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorum ab minima nihil maxime eligendi ullam voluptate. Odio, similique deserunt.</h3>
        </EqualPadding>
        <div className="row">
          <div className="col-md-6" style={styles}>
            <h3 className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorum ab minima nihil maxime eligendi ullam voluptate. Odio, similique deserunt.</h3>
          </div>
          <div className="col-md-6" >
            Tekst
          </div>
        </div>

        <div className="container-box py-5">
          <Grid.Row>
            <Grid.Column position="left"> 
              <img src={`${boyOnMolo}`} alt="" className="img-grid"/>
            </Grid.Column>
            <Grid.Column position="right">
              <Grid.Quotation>
                Wydaje mi się, że do osiągnięcia sukcesu w nauce czy sztuce nieodzowna jest pewna doza autyzmu. Jeżeli ktoś pragnie osiągnąć sukces, niezbędna może okazać się konieczność odłączenia od świata, od domeny praktycznej, przemyślenia konkretnej koncepcji i wykazania się oryginalnością, by móc stworzyć coś nowego
              </Grid.Quotation>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column position="right"> 
              <img src={`${spacerWGorach}`} alt="" className=""/>
            </Grid.Column>
            <Grid.Column position="left">
              <h3>W Pozytywce wierzymy, że każdy człowiek ma coś do zaoferowania światu</h3>
              <p className="lead">
                Wiele jest serc które czekają na ewangelę, a w każdym dziecku tkwi potencjał. 
              </p>
              <p className="lead">
                Pomóż nam go odnaleźć. 
              </p>
              <p>Umów się na konsultacje lub na diagnozę</p>
              <Link className="btn btn-light" to="/kontakt">Zarejestruj się</Link>
            </Grid.Column>
          </Grid.Row>
        </div>
      </Container>
    </Layout>
  )
}

export default LaboratoryPage2