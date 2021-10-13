import * as React from "react"
// import PropTypes from 'prop-types'
// import  Container from "react-bootstrap/Container"

// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import {  HeroImageArea, Container } from '../components/components-bundle/components-bundle'
import HeroImage from '../assets/images/nasz-zespol.jpg'


const AboutPage = () => (
  <Layout header="transparent-dark">
    <Seo title="O nas"/>
    <HeroImageArea  backgroundImage={HeroImage} variant="dark">
      <h1><u>O nas</u></h1>
      <p className="lead">
        Jesteśmy zespołem pedagogów i psychologów których misją jest praca z dziećmi i młodzieżą z deficytami uwagi i w spektrum autyzmu
      </p>
    </HeroImageArea>
    <Container>
      <h2>Poznaj nasz <u>zespół</u></h2>
      <p className="lead">Tutaj będzie tekst promocyjny krótki, tak żeby zmieścił się w max trzech linijkach.</p>
    </Container>
  </Layout>
)

export default AboutPage
