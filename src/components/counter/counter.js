import * as React from 'react'

import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import VisibilitySensor from 'react-visibility-sensor'

import './counter.css'

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
    
    const delta = number / (Math.pow(number, .6)+20)
    const interval = fullTime*delta/number
    
    this.interval = Math.round(interval*1000)
    this.delta = Math.ceil(delta)

  }
  InitTick() {
    this.IntervalID = setInterval( () => {
      this.Tick()
    }, this.interval)
    
  }
  Tick() {
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

  render() {
    return <>{this.state.counter.toLocaleString()}</>
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
// if (IS_BROWSER) offset.bottom = window.innerHeight*0.25;

const CounterBox = ({number, text, counterClassName}) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const numLength = number.toLocaleString().length;

  return (
    <VisibilitySensor onChange={setIsVisible} offset={offset} >
      <div className={`dynamic-counter-box col-md text-center ${counterClassName}`}>
        <p
          className={`number`}
          style={{minWidth: `${numLength}ch`, maxWidth: '100%'}}
        >
          <Counter number={number} toTurnOn={isVisible} onChange={isVisible} />
        </p>
        <p className="lead">{text}</p>
      </div>
    </VisibilitySensor>
  );
}


export { CounterBox }
