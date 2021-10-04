import * as React from 'react'

import * as Grid from '../css-grid/css-grid'


class CenteredContent2 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      lifeState: "measure"
    }

    this.lifeStates = {
      MEASURE: "measure",
      NORMAL: "normal",
    }
    this.refsParent = React.createRef()
    this.refsChild = React.createRef()

    this.setMeasureState()
  }
  measures = {
    parentRatio: undefined,
    childArea: undefined,
  }
  parentData = {
    ratio: undefined,
  }
  childRequiredArea = undefined

  componentDidMount() {
    console.log("COMPONENT DID MOUNT");
    if (typeof window !== 'undefined') {
      console.log("component Did Mount");

      // this.setMeasureState()
      // this.addRatioWidth()      
      this.getMeasures()
      this.addRatioWidth()
      
      this.setState({
        lifeState: this.lifeStates.NORMAL,
      })

      window.addEventListener(
        "resize", 
        () => this.updateRatioWidth() 
      )
    }   
  }
  
  setMeasureState() {
    this.childStyles = {
      "white-space": "nowrap",
      "float": "left",
    }

    this.setState({
      lifeState: this.lifeStates.MEASURE
    })
  }
  componentDidUpdate( prevProps, prevState) {    
    console.log("COMPONENT DID UPDATE");
    console.log(prevState);
    console.log(this.state);

    if (this.state.lifeState === this.lifeStates.MEASURE) {
      this.getMeasures()
      this.addRatioWidth()    
      this.setState({
        lifeState: this.lifeStates.NORMAL
      })        
    }
  }

  getMeasures() {
    /*
      Measures to collect:
      + parent ratio
      + children area 
     */
    if (this.state.lifeState === this.lifeStates.MEASURE) {
      /* 
        PRZECHWYCENIE SUROWYCH STYLI RODZICA
        1. Przechwycenie wymiarów rodzica
        1. Wyznaczenie proporcji rodzica
      */ 
      
      const parentStyles = window.getComputedStyle(this.refsParent.current)
      const parentHeight = parseFloat(parentStyles.height)
      const parentWidth = parseFloat(parentStyles.width)
      const ratio =  parentWidth / parentHeight

      this.measures.parentRatio = ratio

      /* 
        PRZECHWYCENIE SUROWYCH STYLI DZIECKA 
        1. Wyznaczenie wymaganego pola powierzchni dziecka
      */
      const childStyles = window.getComputedStyle(this.refsChild.current)
      const childRequiredArea = parseFloat(childStyles.width) * parseFloat(childStyles.height)

      this.measures.childArea = childRequiredArea
      console.log("MEASURES", this.measures);
      
    }
  }
  updateRatioWidth() {
    console.log("UPDATE RATIO WIDTH");    
    this.setMeasureState()

  }
  addRatioWidth() {
    /*     
      1. Wyznaczenie szerokości dziecka na podstawie proporcji
    */ 
    console.log("ADD RATIO WIDTH");
    const ratio =  this.measures.parentRatio
    const childArea = this.measures.childArea

    const width = Math.sqrt(childArea*ratio)

    this.childStyles = {
      "max-width": `${width}px`,
    }
  }

  render() {
    // const ParentTag = this.props.parentComponent
    const ParentTag = "section"
    const ChildTag = this.props.childTag

    console.log(ParentTag);
    // debugger;

    return(
      <ParentTag ref={this.refsParent} className="centered-content some-class">
        <div ref={this.refsChild} className="inner" style={this.childStyles}>
          {this.props.children}
        </div>
      </ParentTag>
    )
  }

}

/**
 * Class definition
 * @property { object } algoSteps - propriety description
 * ...
 */


/**
 * CenteredComponent - here will be definition
 * @class
 * @constructor
 * @public
 */
class CenteredContent extends React.Component {
  constructor(props) {
    console.log("CONSTRUCTOR CenteredContent");
    super(props)

    this.refsParent = React.createRef()
    this.refsChild = React.createRef()

    this.state.step = this.algoSteps.step1
    this.childStyles = {}
    // this.setStep(this.algoSteps.step1)
  }

  state = {
    step: undefined,
  }
  /** parentRatio - aspect ratio of parent component 
   * @type { number } */
  parentRatio = undefined

  childStyles = {}

  /** property that contain algoritm states  */
  algoSteps = {
    step1: "measure state",
    step2: "finding ROI",
    step3: "finding minimum error",
    STOP: true,
  }
  algo = {
    sign: undefined,
    lambda: .01
  }

  setStep(step) {
    console.log("SETING STEP");
    console.log(step);
    
    this.setState({
      step: step,
    })

    if (step === this.algoSteps.step1) {
      this.childStyles = {}
    }

  }
  getCurrentStep() {
    return this.state.step
  }


  componentDidMount() {
    this.getMeasures()
    // this.algoritmRouter()
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("\n COMPONENT DID UPDATE");

    // if (this.state.STOP) {
      
    // }
    this.getROI(prevProps, prevState)
  }

  getROI(prevProps, prevState) {
    console.log("getROI");
    const childRatio = this.getAspectRatio(this.refsChild)
    
    
    const L = this.algo.lambda

    const error = (this.parentRatio - childRatio) / this.parentRatio
    const errorAbs = Math.abs(error)

    console.log("RATIOS", 
      this.parentRatio, 
      this.childStyles,
      childRatio, 
      this.algo.sign,
      this.algo.lambda,
      `${Math.round(error*10000)/100}%`
    );

    
    if (errorAbs < .05) {

      // bez set state komponent się nie wyrenderuje
      this.algo.sign = undefined;
      return;
    }

    let S = 0
    if (error < 0) {
      S = -1

    } else {
      S = 1
    }

    let prevSign = this.algo.sign;
    if (prevSign === undefined) {
      prevSign = S
    }
    this.algo.sign = S
    const childWidth = parseInt(getComputedStyle(this.refsChild.current).width)

    if (typeof childWidth !== "number" ) {
      throw Error("childWidth should be a number")      
    }

    
    if (S === prevSign) {
      // const dW = S*L*childWidth // dW can be positive or negative
      
      const newWidth = childWidth*(1 + S*L)
      console.log(childWidth, newWidth, L);
      // newWidth = childWidth + dW

      this.childStyles = {
        "width": `${newWidth}px`
      }

      this.setState({
        counter: this.state++
      })
      
    } 
    else {
      // preparation for next algorith run
      this.algo.lambda = this.algo.lambda/2
      this.getROI(prevProps, prevState)
      // this.algo.sign = undefined;
    }
    
  }

  getAspectRatio(refs) {
    const refsParent = refs
    const parentStyle = getComputedStyle(refsParent.current)
    const parentData = {
      w: parseFloat(parentStyle.width),
      h: parseFloat(parentStyle.height)
    }
    const ratio = parentData.w / parentData.h

    return ratio    
  }
  getMeasures() {
    console.log("GET MEASURES");

    
    const ratio = this.getAspectRatio(this.refsParent)
    
    console.log("ratio", ratio);

    // debugger
    const childStyle = getComputedStyle(this.refsChild.current)
    // console.log("childStyle", childStyle);
    
    const childSize = {
      w: parseFloat(childStyle.width),
      h: parseFloat(childStyle.height),
    }
    
    const childArea =  childSize.w * childSize.h

    const childWidth = Math.sqrt(childArea*ratio)

    this.childStyles = {
      "width": `${childWidth}px`
    } 
    this.parentRatio = ratio

    console.log("childSize", childSize);
    console.log(this.childStyles);

    
    this.setState({
      step: this.algoSteps.step2,
    })


    
    
  }

  algoritmRouter() {
    console.log("ALGORITM SWITCH");
    console.log(this.getCurrentStep());
    if (this.getCurrentStep() === this.algoSteps.step1 ) {
      this.rawState()
    }
  }

  rawState() {
    console.log("LUNCHING RAW STATE");    
  }



  render() {
    const ParentTag = "div"

    return(
      <ParentTag ref={this.refsParent} className="centered-content flex-grow-1 " >
        <Grid.Quotation ref={this.refsChild} style={this.childStyles}>
          Wydaje mi się, że do sukcesu w nauce czy sztuce nieodzowna jest pewna doza autyzmu. Jeżeli ktoś pragnie osiągnąć sukces, niezbędna może okazać się konieczność odłączenia od świata, od domeny praktycznej, przemyślenia konkretnej koncepcji i wykazania się oryginalnością, by móc stworzyć coś nowego
        </Grid.Quotation>
      </ParentTag>
    )
  }

}





export {CenteredContent2, CenteredContent}