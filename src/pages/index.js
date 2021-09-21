import * as React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Layout from "../components/layout"

import { HeroImageArea, Container, BgGradient, WavesContainer } from '../components/components-bundle/components-bundle'
import { CounterBox } from '../components/counter'

import * as Grid from '../components/css-grid/css-grid'

import boyImg from  '../assets/images/Boy-under-stars.jpg'
import boyOnMolo from '../assets/images/chlopczyk-na-molo.jpg'
import spacerWGorach from '../assets/images/spacer-w--gorach--30.jpg'

const IndexPage = () => {

  return(
    <Layout header="transparent-dark">
      <Seo title="Start"/>
      <HeroImageArea variant="dark" backgroundImage={boyImg} >
        <h1 className="py-4">Wsparcie dla dzieci ze spektrum <em>autyzmu</em></h1>
        <p className="lead">
          Wierzymy, że spektrum autyzmu jest efektem ewolucyjnej neuroróżnorodności, dzięki której osoby z autyzmem postrzegają świat w wyjątkowy sposób. 
        </p>
      </HeroImageArea>
      <BgGradient>
        <Container>
          <h2>Zaufaj naszemu doświadczeniu</h2>
          <p className="lead">Pozytywka to już 6 lat pracy z dziecmi z deficytami rozwoju, jednak nasze doświadczenie sięga  o wiele dalej.</p>
          <div className="row py-5"></div>       
          <div className="row">
            <CounterBox
              number={14}
              text={"Lorem ipsum"}
            />
            <CounterBox
              number={1413}
              text={"Lorem ipsum"}
            />
            <CounterBox
              number={323}
              text={"Lorem ipsum"}
            />
          </div> 
        </Container>

        <div className="container-box py-5">
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
              <Link className="btn btn-light" to="/kontakt">Zarejestruj się</Link>
            </Grid.Column>
          </Grid.Row>
        </div>

        <WavesContainer>
          <div className="container">
            <h2>Nasze usługi 2</h2>
            <div className="row py-5">
              <div className="col-md-4">
                <h5>Diagnozy</h5>
                <p>Dolor sit amet consectetur adipisicing elit. Voluptas accusantium at voluptatem tenetur illo est praesentium dolorum aliquid a nemo vel repellat perspiciatis quidem corrupti dignissimos</p>
              </div>
              <div className="col-md-4">
                <h5>Terapie</h5>
                <p>Dolor sit amet consectetur adipisicing elit. Voluptas accusantium at voluptatem tenetur illo est praesentium dolorum aliquid a nemo vel repellat perspiciatis quidem corrupti dignissimos</p>
              </div>
              <div className="col-md-4">
                <h5>Konsultacje i Szkolenia</h5>              
                <p>Dolor sit amet consectetur adipisicing elit. Voluptas accusantium at voluptatem tenetur illo est praesentium dolorum aliquid a nemo vel repellat perspiciatis quidem corrupti dignissimos</p>
              </div>
            </div>
            <Link className="d-block btn btn-light mx-auto" to="/oferta">Zobacz Więcej</Link>
          </div>
        </WavesContainer>
      </BgGradient>

      <Container className="bg-green-lg">
        <h2>Najnowsze artykuły</h2>
        <div className="lead">Zobacz co u ostatnio się u nas działo, lub najnowsze artykuły dotyczące branży</div>
        <p>Velit, atque doloribus. Quidem odit, eos accusamus omnis quam asperiores facilis necessitatibus consectetur porro laudantium aperiam nemo reiciendis, laborum quae illum. Nisi rerum provident explicabo libero illum placeat repellat esse at harum vitae et deleniti, quaerat nesciunt eligendi fugiat doloribus fugit! Quod ab tempore esse nostrum eos aperiam iste placeat asperiores! Dolorem, totam et fugiat unde autem impedit, hic animi explicabo ad omnis, est ullam ipsum architecto laudantium cupiditate deserunt aperiam sint fuga? Dignissimos dicta neque quidem libero expedita exercitationem. Provident doloremque cupiditate ipsum tempore nesciunt! Corrupti minima atque ipsam, labore perferendis alias. Aliquid fugit error odit consequuntur incidunt inventore? Deleniti quisquam, similique cumque quibusdam laudantium quod aperiam. Cumque et perspiciatis totam tempora itaque perferendis nesciunt nihil facilis earum consectetur. Nostrum, quaerat dolore. Eveniet delectus, dolore, quisquam minus voluptatem asperiores voluptatum blanditiis, voluptas aliquid earum neque maxime fugiat harum cum officiis impedit hic dignissimos. Aliquam sunt ratione deserunt soluta nostrum possimus doloremque quos rem quisquam, sint, repellendus animi voluptatem repudiandae reprehenderit hic corporis iusto excepturi. Corrupti labore incidunt autem reiciendis aliquam repudiandae quod! Nostrum, voluptas facere, illo doloribus excepturi, cum quibusdam a fugiat ullam molestias similique. Expedita fuga libero voluptate est cumque harum sint distinctio suscipit similique quasi maxime delectus, voluptatem animi? Voluptas impedit, quod, architecto maxime nemo, inventore iure dolor maiores nostrum laboriosam odit natus eligendi rem provident facilis saepe illo fugiat voluptatum adipisci ex voluptates. Distinctio est accusamus fuga provident ipsam quaerat vitae in similique ab saepe eaque, eius dignissimos labore doloribus iusto! Consectetur porro eius, ullam est error quod commodi dignissimos praesentium! Aspernatur, debitis vel dolore minima ipsum officia eaque eius maxime expedita recusandae non laboriosam, repudiandae fugiat necessitatibus sequi et, eligendi aliquam. Veniam doloribus culpa sunt, accusantium corrupti recusandae molestiae amet numquam maiores suscipit ex architecto minima magnam eaque debitis libero fugit voluptate. Voluptatum inventore ipsum ratione iusto tenetur dolorum, error culpa obcaecati quae neque ab itaque. Dolorum accusantium sed minus dignissimos maiores debitis in. Quasi voluptates dolorem non cum qui accusamus beatae sapiente amet praesentium eos sit error, reprehenderit cupiditate consequuntur atque velit! Accusantium harum atque laborum laudantium sed ducimus expedita dolor esse, nisi consequuntur ea doloremque vitae, officia sit quisquam consequatur cumque earum nam rem neque sapiente culpa! Aperiam temporibus, sed aliquid, ut quibusdam, laudantium ipsa quae tenetur adipisci blanditiis autem velit! Qui tempora voluptatum nostrum nam ab pariatur, adipisci soluta? Officia exercitationem sunt in qui eum deleniti molestiae eligendi quo ipsum expedita minus incidunt aperiam tempora, repudiandae molestias placeat eos deserunt consectetur, rerum perferendis. Vel nam in recusandae aspernatur porro labore doloribus dolore dolorem qui minima eaque ad reprehenderit suscipit magnam, aut corporis eligendi voluptatibus temporibus eius natus dolor impedit amet aperiam! Incidunt molestias maxime, vel magnam voluptatem a quasi repudiandae error voluptate at autem ab nesciunt animi unde recusandae quisquam aliquam natus aliquid cum iusto? Quod omnis atque perspiciatis, quo illum iure in ipsa minima a aspernatur vitae laudantium sapiente, mollitia culpa quis repellat inventore aliquam! Quisquam laboriosam, optio soluta ullam autem explicabo est.</p>
      </Container>
    </Layout>
  )
}

export default IndexPage
