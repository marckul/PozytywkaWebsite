import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { HeroImageArea, Container } from '../components/components-bundle'
import { CounterBox } from '../components/components-bundle/counter'

import * as Grid from '../components/components-bundle/css-grid/css-grid'

import boyOnMolo from '../assets/images/chlopczyk-na-molo.jpg'
import spacerWGorach from '../assets/images/spacer-w--gorach--30.jpg'


const LaboratoryPage = () => {
  return(
    <Layout header="light">
      <HeroImageArea variant="hello">
        <h1>Test</h1>
        <p className="lead">Opis Data: 14 09 19:00</p>
      </HeroImageArea>
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
          <Link className="btn btn-light" to="/">Zarejestruj się</Link>
        </Grid.Column>
      </Grid.Row>

    </Layout>
  )
}

export default LaboratoryPage
