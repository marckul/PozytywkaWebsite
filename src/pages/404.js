import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Container } from '../components/components-bundle/components-bundle'


const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Strona Nie Istnieje" />
    <Container>
      <h1>Błąd 404: Nie znaleziono strony</h1>
      <p>Przepraszamy podana strona nie istnieje</p>
    </Container>
  </Layout>
)

export default NotFoundPage
