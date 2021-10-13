import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

import { HeroImageArea, Container } from '../components/components-bundle/components-bundle'
import { Link } from 'gatsby'

import HeroImage from '../assets/images/offer-page-hero--prod.jpg'
import {MyCarousel, CardBootTemplate} from '../components/cards-&-carousel/cards-&-carousel'


const Cards1 = [
  <CardBootTemplate
    title="Konsultacje dla rodziców"
    topNote="Konsultacje indywidualne"
    bottomNote="Cena: 50zł + 100zł/h"
  >
    <p>Tutaj będzie opis na czym polega to badanie. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. </p>
    <p>Ut sem viverra aliquet eget sit amet tellus. In nibh mauris cursus mattis molestie a. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Pellentesque eu tincidunt tortor aliquam.</p>
  </CardBootTemplate>,

  <CardBootTemplate
    title="Terapia dla dzieci z mutyzmem selektywnym"
    topNote="3 do 12 rok życia"
    bottomNote="Cena: 750 zł"
  >
    <p>Veniam, fugit distinctio delectus illum consequatur accusamus. Iusto eius perferendis sapiente magnam.</p>
  </CardBootTemplate>,

  <CardBootTemplate
  title="Terapia  mutyzmem selektywnym"
  topNote="3 do 12 rok życia"
  bottomNote="Cena: 750 zł"
  >
  <p>Veniam, fugit distinctio delectus illum consequatur accusamus. Iusto eius perferendis sapiente magnam.</p>
  </CardBootTemplate>
]



const OfferPage = () => {  

  return(
    <Layout header="transparent-light">
      <Seo title="Oferta"/>
      <HeroImageArea variant="light" backgroundImage={HeroImage} >
        <h1 className="py-4">Nasza Oferta</h1>
        <p className="lead">
          Zajmujemy się terapią, diagnostyką i pomocą osobom w spektrum autyzmu. Prowadzimy treningi społeczne dla osób z zespołem aspergera i osób atypowych
        </p>
        <Link to="#diagnoza" className="btn btn-dark">Zobacz więcej</Link>
      </HeroImageArea>
      <section id="diagnoza"> 
        <Container>
          <h2>Diagnoza</h2>
          <p className="lead">Tutaj bedzie krótki tekst promocyjny, taki żeby zmieścił się w max trzech linijkach</p>
          <MyCarousel>
            {Cards1}
          </MyCarousel>
        </Container>      
      </section>
      <Container>
        <h2>Terapia</h2>
        <p className="lead">Tutaj bedzie krótki tekst promocyjny, taki żeby zmieścił się w max trzech linijkach</p>
        <MyCarousel >
          <CardBootTemplate
            title="Konsultacje dla rodziców"
            topNote="Konsultacje indywidualne"
            bottomNote="Cena: 50zł + 100zł/h"
          >
            <p>Tutaj będzie opis na czym polega to badanie. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. </p>
            <p>Ut sem viverra aliquet eget sit amet tellus. In nibh mauris cursus mattis molestie a. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Pellentesque eu tincidunt tortor aliquam.</p>
          </CardBootTemplate>
          <CardBootTemplate
            title="Terapia dla dzieci z mutyzmem selektywnym"
            topNote="3 do 12 rok życia"
            bottomNote="Cena: 750 zł"
          >
            <p>Veniam, fugit distinctio delectus illum consequatur accusamus. Iusto eius perferendis sapiente magnam.</p>
          </CardBootTemplate>

          <CardBootTemplate
            title="Terapia  mutyzmem selektywnym"
            topNote="3 do 12 rok życia"
            bottomNote="Cena: 750 zł"
          >
            <p>Veniam, fugit distinctio delectus illum consequatur accusamus. Iusto eius perferendis sapiente magnam.</p>
          </CardBootTemplate>
        </MyCarousel>
      </Container>  

      <Container >
        <h2>Konsultacje i Szkolenia</h2>
        <p className="lead">Tutaj bedzie krótki tekst promocyjny, taki żeby zmieścił się w max trzech linijkach</p>
        <MyCarousel >
          <CardBootTemplate
            title="Konsultacje dla rodziców"
            topNote="Konsultacje indywidualne"
            bottomNote="Cena: 50zł + 100zł/h"
          >
            <p>Tutaj będzie opis na czym polega to badanie. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. </p>
            <p>Ut sem viverra aliquet eget sit amet tellus. In nibh mauris cursus mattis molestie a. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Pellentesque eu tincidunt tortor aliquam.</p>
          </CardBootTemplate>
          <CardBootTemplate
            title="Terapia dla dzieci z mutyzmem selektywnym"
            topNote="3 do 12 rok życia"
            bottomNote="Cena: 750 zł"
          >
            <p>Veniam, fugit distinctio delectus illum consequatur accusamus. Iusto eius perferendis sapiente magnam.</p>
          </CardBootTemplate>

          <CardBootTemplate
            title="Terapia  mutyzmem selektywnym"
            topNote="3 do 12 rok życia"
            bottomNote="Cena: 750 zł"
          >
            <p>Veniam, fugit distinctio delectus illum consequatur accusamus. Iusto eius perferendis sapiente magnam.</p>
          </CardBootTemplate>
        </MyCarousel>
      </Container>  
        
    </Layout>
  )
}

export default OfferPage