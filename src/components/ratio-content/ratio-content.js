import * as React from 'react'
import PropTypes from 'prop-types';

import * as Grid from '../css-grid/css-grid'

import * as CSS from './ratio-content.module.css'


// TO REMOVE 
class CenteredContent0 extends React.Component {
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


function randomNumber(lower = 0, upper = 1) {
  const range = upper - lower
  return range*Math.random() + lower
    
}



/**
 * RatioContent - here will be definition
 * 
 * @param { } props
 * @param { } props.childComponent - Component wrapping child 
 * 
 */
class RatioContent extends React.Component {

  static propTypes = {
    children: PropTypes.string,
    childComponent: PropTypes.elementType,
    debugMode: PropTypes.bool,
  }
  
  state = {
    step: undefined,
    counter: 0
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

  algoInitial = {
    sign: undefined,
    lambda: .01,
    minError: {
      /** absolute error */
      absErr: Infinity,
      /** element width in px */
      width: "",
    },
    STOP: false
  }

  algo = this.algoInitial
  
  /**
   * 
   * @param { object } props
   * @param { string } props.childComponent
   * 
   */
  constructor(props) {
    // console.log("CONSTRUCTOR CenteredContent");
    super(props)

    this.refsParent = React.createRef()
    this.refsChild = React.createRef()

    this.state.step = this.algoSteps.step1
    this.childStyles = {}
    // this.setStep(this.algoSteps.step1)
  }

  printLogs(...args) {
    if (this.props.debugMode) {
      console.log(...args)
    }
  }


  setStep(step) {
    this.printLogs("SETING STEP");
    this.printLogs(step);
    
    this.setState({
      step: step,
    })

    if (step === this.algoSteps.step1) {
      this.algo = this.algoInitial
      this.state.counter = 0
      this.childStyles = {}
    }

  }
  getCurrentStep() {
    return this.state.step
  }


  minimizeRatioError() {
    this.printLogs("getROI");
    if (this.algo.STOP) {
      this.printLogs("STOP");    
      this.printLogs("childStyles", this.childStyles);
      return  
    }
    
    const childRatio = this.getAspectRatio(this.refsChild)
    
    let L = this.algo.lambda

    const error = (this.parentRatio - childRatio) / this.parentRatio
    const errorAbs = Math.abs(error)

    this.printLogs("RATIOS", 
      this.parentRatio, 
      this.childStyles,
      childRatio, 
      this.algo.sign,
      this.algo.lambda,
      `${Math.round(error*10000)/100}%`
    );

    const childWidthStr = getComputedStyle(this.refsChild.current).width
    this.printLogs(childWidthStr);

    if (this.algo.minError.absErr > errorAbs) {
      this.algo.minError.width = childWidthStr
      this.algo.minError.absErr = errorAbs
    }
    
    this.printLogs(this.algo.minError);

    if (errorAbs < .02 || this.state.counter >= 49) {
      this.childStyles = {
        width: this.algo.minError.width
      }

      this.algo.STOP = true
      this.setState({
        counter: this.state.counter + 1,
      })
      
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
    
    
    const childWidth = parseFloat(childWidthStr)

    if (typeof childWidth !== "number" ) {
      throw Error("childWidth should be a number")      
    }

    
    if (S !== prevSign) {
      L = L/2
      this.algo.lambda = L      
    } 
    
    const dW = S*L*childWidth // dW can be positive or negative
    const newWidth = childWidth + dW
    this.printLogs(childWidth, newWidth, L);

    
    

    this.childStyles = {
      "width": `${newWidth }px`
    }

    // this.printLogs(this.state);
    
    this.setState({
      counter: this.state.counter + 1
    })

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
    this.printLogs("GET MEASURES");

    
    const ratio = this.getAspectRatio(this.refsParent)
    
    this.printLogs("ratio", ratio);

    // debugger
    const childStyle = getComputedStyle(this.refsChild.current);
    // this.printLogs("childStyle", childStyle);
    
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

    this.printLogs("childSize", childSize);
    this.printLogs(this.childStyles); 
    
  }

  runAlgoritm() {
    this.printLogs("\n\nRESIZE WINDOW");
    this.printLogs("ALGORITM INIT");
    
    this.setStep(this.algoSteps.step1)
    this.rawState()
  }
  algoritmRouter() {    
    this.printLogs(
      `%c\n  CURRENT STEP ${this.getCurrentStep()}`, 
      "color: #00a879"
    );   
    if (this.getCurrentStep() === this.algoSteps.step1 ) {
      this.getMeasures()
      this.setStep(this.algoSteps.step2)
    }
    else if (this.getCurrentStep() === this.algoSteps.step2 ) { 
      this.minimizeRatioError()
    }
  }

  rawState() {
    this.printLogs("LUNCHING RAW STATE"); 
    this.childStyles = { }  
  }

  
  componentDidMount() {
    this.getMeasures()
    this.setStep(this.algoSteps.step2)

    window.addEventListener(
      "resize", () => this.runAlgoritm()
    )
  }

  componentDidUpdate(prevProps, prevState) {
    this.algoritmRouter()
  }

  render() {
    const ParentTag = "div"
    const {children, childComponent, ...props} = this.props
    const ChildComponent = childComponent;

    return(
      <ParentTag ref={this.refsParent} className={`${CSS.centered} flex-grow-1`} style={this.parentStyles} >
        <ChildComponent {...props} ref={this.refsChild} style={this.childStyles}>
          {children}
        </ChildComponent>
      </ParentTag>
    )
  }
}


RatioContent.defaultProps = {
  children: "",
  childComponent: "div"
}




export { RatioContent }