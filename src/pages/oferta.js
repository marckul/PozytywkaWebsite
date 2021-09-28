import * as React from 'react'
import Layout from '../components/layout'

import { HeroImageArea, Container } from '../components/components-bundle/components-bundle'
import { Link } from 'gatsby'

import HeroImage from '../assets/images/offer-page-hero--prod.jpg'

const OfferPage = () => {  
  return(
    <Layout header="transparent-light">
      <HeroImageArea variant="light" backgroundImage={HeroImage} >
        <h1 className="py-4">Nasza Oferta</h1>
        <p className="lead">
          Zajmujemy się terapią, diagnostyką i pomocą osobom w spektrum autyzmu. Prowadzimy treningi społeczne dla osób z zespołem aspergera i osób atypowych
        </p>
        <Link className="btn btn-light">Zobacz więcej</Link>
      </HeroImageArea>
      <Container>
        <h2>Diagnoza</h2>
        <p className="lead">Tutaj bedzie krótki tekst promocyjny, taki żeby zmieścił się w max trzech linijkach</p>
      </Container>      
      <Container>
        <h2>Terapia</h2>
        <p className="lead">Tutaj bedzie krótki tekst promocyjny, taki żeby zmieścił się w max trzech linijkach</p>
      </Container>      
      <Container>
        <h2>Konsultacje i Szkolenia</h2>
        <p className="lead">Tutaj bedzie krótki tekst promocyjny, taki żeby zmieścił się w max trzech linijkach</p>
      </Container>      
    </Layout>
  )
}

export default OfferPage