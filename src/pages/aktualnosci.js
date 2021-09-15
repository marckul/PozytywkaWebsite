import * as React from "react"
import  Container from "react-bootstrap/Container"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { HeroArea } from '../components/components-bundle'

const IndexPage = () => (
  <Layout>
    <Seo title="Start"/>
    <HeroArea />
    <Container>
      <h1>Strona Aktualności</h1>
      <p>Ex iusto deleniti, earum enim dignissimos assumenda omnis quis suscipit laboriosam autem, necessitatibus possimus placeat corrupti ipsum totam. Commodi consequuntur recusandae quos quam, mollitia autem. Reprehenderit, velit. Tenetur consequuntur sequi suscipit exercitationem itaque aut deserunt totam, aspernatur nam cupiditate doloribus? Laudantium consectetur at consequatur adipisci. A, quidem! Aliquid ipsa, corrupti quia dolor possimus reiciendis doloribus dolores aut hic nam repudiandae aperiam error, itaque cupiditate, unde molestiae incidunt? Rem deleniti qui ea. Maiores facilis, laboriosam vero laborum quidem iusto cum ipsa aperiam. Quod repellendus optio necessitatibus, quam minus quo tempora quaerat assumenda enim labore distinctio voluptatum quidem, aperiam quibusdam aliquam dolores a. Unde ratione rem amet nihil a veritatis, aut ab accusantium porro officia modi dolorem suscipit ad voluptatum eum illum, culpa dicta ex! Corrupti tempore similique deleniti impedit ut eveniet, voluptate illo necessitatibus dolorum consequuntur beatae adipisci ipsam dignissimos perspiciatis voluptatum atque blanditiis ipsa iste accusamus accusantium sit provident praesentium. Mollitia laudantium asperiores laboriosam magni qui assumenda eaque, soluta officia quod beatae sit libero nam totam ea tempora vel incidunt aut ut ullam voluptatum corrupti. Pariatur aut obcaecati nostrum fugit vitae sed modi illo, soluta alias temporibus! Illo quibusdam repellendus perspiciatis culpa.</p>
    </Container>
  </Layout>
)

export default IndexPage
