import * as React from 'react'

import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import VisibilitySensor from 'react-visibility-sensor'

const IS_BROWSER = typeof window !== `undefined`;

class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      toTurnOn: props.toTurnOn
    }
    this.wasSwitched = false

    const number = this.props.number // 
    const fullTime = Math.pow(number, .1) + .1 // [s]
    // const delta = fullTime/Math.pow(this.props.number, 0.5)
    
    const delta = number / (Math.pow(number, .6)+20)
    const interval = fullTime*delta/number
    
    this.interval = Math.round(interval*1000)
    this.delta = Math.ceil(delta)

    // this.HandleChange = this.HandleChange.bind(this)
  }
  InitTick() {
    this.IntervalID = setInterval( () => {
      this.Tick()
    }, this.interval)
    
  }
  Tick() {
    console.log("I'M TURN ON")
    const delta = this.delta
    const counter = this.state.counter
    let newCounter = counter + delta

    if (newCounter > this.props.number) {
      newCounter = this.props.number
      this.componentWillUnmount()
    }

    this.setState({
      counter: newCounter
    })
  }
  
  componentDidUpdate(prevProps, prevState) {

    if (!this.wasSwitched && this.props.toTurnOn) {
      this.wasSwitched = true
      this.InitTick()      
    }
  }
  componentWillUnmount() {
    clearInterval(this.IntervalID)

  }
  HandleChange(e) {
    console.log("HandleChange");
  }

  render() {
    return <>{this.state.counter}</>
  }
}

Counter.defaultProps = {
  interval: 30,
  number: 0,
  toTurnOn: false
}


const offset = {
  top: 0,
  bottom: 0
}
if (IS_BROWSER) {
  offset.bottom = window.innerHeight*0.25
} 


const CounterBox = ({number, text}) => {
  const [isVisible, setIsVisible] = React.useState(false)

  return (
    <VisibilitySensor onChange={setIsVisible} offset={offset} >
      <div className="col-md text-center">
        <p className="h1">
          <Counter number={number} toTurnOn={isVisible} onChange={isVisible} />
        </p>
        <p>{text}</p>
      </div>
    </VisibilitySensor>
  );
}


export { CounterBox }