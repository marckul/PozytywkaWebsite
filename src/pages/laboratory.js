import * as React from 'react'
import Layout from '../components/layout'

import { Container } from '../components/components-bundle/components-bundle'
import { Link } from 'gatsby'


import '../styles/labor/labor.css'
import * as Grid from '../components/css-grid/css-grid'
import boyOnMolo from '../assets/images/chlopczyk-na-molo.jpg'
import spacerWGorach from '../assets/images/spacer-w--gorach--30.jpg'

import { RatioContent } from '../components/ratio-content/ratio-content'



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

const LaboratoryPage = () => {  
  return(
    <Layout header="transparent-light" topSpace={true} >
      <Container rootElement="section" >
        <h1>Testing conditional rendering</h1>
        <ConditionalTag tag="h3" />
      </Container>
      <Grid.Row>
        <Grid.Column position="left"> 
          <img src={`${boyOnMolo}`} alt="" className="img-grid"/>
        </Grid.Column>
        <Grid.Column position="right" className="">
          <RatioContent className="test" childComponent={Grid.Quotation} >        
            <span>Wydaje mi się, że do osiągnięcia sukcesu w nauce czy sztuce nieodzowna jest pewna doza autyzmu. Jeżeli ktoś pragnie osiągnąć sukces, niezbędna może okazać się konieczność odłączenia od świata, od domeny praktycznej, przemyślenia konkretnej koncepcji i wykazania się oryginalnością, by móc stworzyć coś nowego</span>
            <span>Hans Asperger <i>Neuro</i></span>
          </RatioContent>
        </Grid.Column>
      </Grid.Row>
      
      

      <Grid.Row>
        <Grid.Column position="left"> 
          <img src={`${boyOnMolo}`} alt="" className="img-grid"/>
        </Grid.Column>
        <Grid.Column position="right" className="oneline">
          <Grid.Quotation>
            Wydaje mi się, że do osiągnięcia sukcesu w nauce czy sztuce nieodzowna jest pewna doza autyzmu. Jeżeli ktoś pragnie osiągnąć sukces, niezbędna może okazać się konieczność odłączenia od świata, od domeny praktycznej, przemyślenia konkretnej koncepcji i wykazania się oryginalnością, by móc stworzyć coś nowego
          </Grid.Quotation>
        </Grid.Column>
      </Grid.Row>
      <Container rootElement="section" >

        <div className="row">
          <div className="col-md-6">
            <h3 className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorum ab minima nihil maxime eligendi ullam voluptate. Odio, similique deserunt.</h3>
          </div>
          <div className="col-md-6" >
            Tekst
          </div>
        </div>

      </Container>
    </Layout>
  )
}

export default LaboratoryPage