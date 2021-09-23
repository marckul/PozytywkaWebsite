import * as React from "react"

import { Link } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"

import { HeroImageArea, Container } from '../components/components-bundle/components-bundle'
const IndexPage = () => {

  return(
    <Layout header="transparent-dark">
      <Seo title="Typografia"/>
      <HeroImageArea variant="light">
        <h1 className="py-4">Wsparcie dla dzieci ze spektrum <em>autyzmu</em></h1>
        <p className="lead">
          Wierzymy, że spektrum autyzmu jest efektem ewolucyjnej neuroróżnorodności, dzięki której osoby z autyzmem postrzegają świat w wyjątkowy sposób. 
        </p>
      </HeroImageArea>
      <Container>
        <h1>Typografia</h1>
        <p>Voluptates necessitatibus veniam fuga molestias sint quidem est iure excepturi eligendi sapiente voluptatibus in, dignissimos consequuntur iste ducimus sed suscipit beatae, vel adipisci. Qui doloremque soluta repudiandae, earum quaerat consequuntur corrupti corporis officiis repellendus ad possimus ratione sapiente! Fugit consequatur consectetur provident? Cupiditate veniam aperiam optio neque ducimus voluptatem soluta quo similique saepe dolores at voluptates voluptatibus sed nostrum iste, corporis, rem voluptatum perspiciatis assumenda autem provident. Fugit ducimus quis accusamus sed. Quas ullam debitis earum iure doloremque, sapiente temporibus reprehenderit ut culpa nemo eius itaque velit, saepe consequatur sed aliquid provident.</p>
        <h2>Nagłówek drugi</h2>
        <p>Possimus laboriosam maxime ducimus modi architecto odit iure minus, magnam voluptates nihil deserunt, eligendi autem aliquid quia placeat ex consequuntur corporis exercitationem cumque, soluta vel laborum quae obcaecati id? In beatae quisquam excepturi et voluptatum corrupti quibusdam blanditiis. Minus, cumque natus expedita quibusdam facilis repellendus, distinctio doloremque nihil aperiam consequuntur, vitae quisquam aliquam laboriosam quas soluta cum id reprehenderit maiores ut enim. Deserunt omnis perferendis, doloribus aperiam quisquam aspernatur molestias et nostrum culpa impedit totam ducimus. Itaque dolor ad porro ducimus tempore quis obcaecati deserunt debitis dolore recusandae, ullam quasi nulla pariatur.</p>
      </Container>
    </Layout>
  )
}

export default IndexPage
