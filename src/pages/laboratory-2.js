import * as React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Layout from "../components/layout"

import { HeroImageArea, Container, BgGradient } from '../components/components-bundle'
import { CounterBox } from '../components/components-bundle/counter'

import * as Grid from '../components/components-bundle/css-grid/css-grid'

import boyImg from  '../assets/images/Boy-under-stars.jpg'
import boyOnMolo from '../assets/images/chlopczyk-na-molo.jpg'
import spacerWGorach from '../assets/images/spacer-w--gorach--30.jpg'


import '../styles/labor/laboratory-2.css'

const WavesContainer = () => {

  return(
    <div className="svg-container">
      <div className="svg-shape" style={{"--background-color": "black"}}>
        <svg preserveAspectRatio="none" viewBox="0 0 1703 134" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 56.169L70.9583 43.2802C141.917 30.1493 283.833 4.73483 425.75 10.9675C567.667 17.4421 709.583 56.169 851.5 62.6437C993.417 68.8763 1135.33 43.4618 1277.25 49.6945C1419.17 56.1691 1561.08 94.896 1632.04 114.26L1703 133.623V0H1632.04C1561.08 0 1419.17 0 1277.25 0C1135.33 0 993.417 0 851.5 0C709.583 0 567.667 0 425.75 0C283.833 0 141.917 0 70.9583 0H0V56.169Z" fill="var(--background-color, #E4F3EA)"/>
        </svg>      
      </div>

      <div className="container-box py-5">
        <div className="container">
          <h1>I'm in SVG container</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, expedita voluptate, perferendis repudiandae cumque molestiae eveniet fugit excepturi, libero cupiditate debitis pariatur ex voluptatum totam beatae reprehenderit. Tempore vero exercitationem vel aliquid similique velit, eum eaque quidem et ducimus explicabo omnis officia repellendus aperiam consequuntur, iusto, voluptate natus! Itaque necessitatibus aut ex voluptas. Fugiat dicta officiis, pariatur, hic, excepturi sapiente veritatis vero at accusantium repellat molestias. Laboriosam, accusantium officiis, voluptate neque beatae tenetur placeat repellendus voluptas consequuntur sequi in. Maxime harum perspiciatis autem, modi nostrum nam ut quia, nesciunt magni sint culpa, reprehenderit voluptas iste sunt ea consectetur dolores accusantium!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, expedita voluptate, perferendis repudiandae cumque molestiae eveniet fugit excepturi, libero cupiditate debitis pariatur ex voluptatum totam beatae reprehenderit. Tempore vero exercitationem vel aliquid similique velit, eum eaque quidem et ducimus explicabo omnis officia repellendus aperiam consequuntur, iusto, voluptate natus! Itaque necessitatibus aut ex voluptas. Fugiat dicta officiis, pariatur, hic, excepturi sapiente veritatis vero at accusantium repellat molestias. Laboriosam, accusantium officiis, voluptate neque beatae tenetur placeat repellendus voluptas consequuntur sequi in. Maxime harum perspiciatis autem, modi nostrum nam ut quia, nesciunt magni sint culpa, reprehenderit voluptas iste sunt ea consectetur dolores accusantium!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, expedita voluptate, perferendis repudiandae cumque molestiae eveniet fugit excepturi, libero cupiditate debitis pariatur ex voluptatum totam beatae reprehenderit. Tempore vero exercitationem vel aliquid similique velit, eum eaque quidem et ducimus explicabo omnis officia repellendus aperiam consequuntur, iusto, voluptate natus! Itaque necessitatibus aut ex voluptas. Fugiat dicta officiis, pariatur, hic, excepturi sapiente veritatis vero at accusantium repellat molestias. Laboriosam, accusantium officiis, voluptate neque beatae tenetur placeat repellendus voluptas consequuntur sequi in. Maxime harum perspiciatis autem, modi nostrum nam ut quia, nesciunt magni sint culpa, reprehenderit voluptas iste sunt ea consectetur dolores accusantium!</p>

        </div>
      </div>

      <div className="svg-shape" style={{"--background-color": "black"}}>
        <svg preserveAspectRatio="none" viewBox="0 0 1836 144" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 46.1691L76.5 33.2803C153 20.1494 306 -5.26509 459 0.967538C612 7.44221 765 46.1691 918 52.6438C1071 58.8764 1224 33.4619 1377 39.6945C1530 46.1692 1683 84.8961 1759.5 104.26L1836 123.623V144H1759.5C1683 144 1530 144 1377 144C1224 144 1071 144 918 144C765 144 612 144 459 144C306 144 153 144 76.5 144H0V46.1691Z" fill="var(--background-color, #E4F3EA)"/>
        </svg>
      </div>
        
    </div>

  )

}


const LaboratoryPage2 = () => {

  return(
    <Layout header="transparent-dark">
      {/* <Seo title="Start"/> */}
      <HeroImageArea variant="dark" backgroundImage={boyImg} >
        <h1 className="py-4">Wsparcie dla dzieci ze spektrum <em>autyzmu</em></h1>
        <p className="lead">
          Data: 14 09 21:30
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
      </BgGradient>
      <WavesContainer>
        Hello Mom
      </WavesContainer>

      <Container>
          <h2>Nagłówek 2</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, atque doloribus. Quidem odit, eos accusamus omnis quam asperiores facilis necessitatibus consectetur porro laudantium aperiam nemo reiciendis, laborum quae illum. Nisi rerum provident explicabo libero illum placeat repellat esse at harum vitae et deleniti, quaerat nesciunt eligendi fugiat doloribus fugit! Quod ab tempore esse nostrum eos aperiam iste placeat asperiores! Dolorem, totam et fugiat unde autem impedit, hic animi explicabo ad omnis, est ullam ipsum architecto laudantium cupiditate deserunt aperiam sint fuga? Dignissimos dicta neque quidem libero expedita exercitationem. Provident doloremque cupiditate ipsum tempore nesciunt! Corrupti minima atque ipsam, labore perferendis alias. Aliquid fugit error odit consequuntur incidunt inventore? Deleniti quisquam, similique cumque quibusdam laudantium quod aperiam. Cumque et perspiciatis totam tempora itaque perferendis nesciunt nihil facilis earum consectetur. Nostrum, quaerat dolore. Eveniet delectus, dolore, quisquam minus voluptatem asperiores voluptatum blanditiis, voluptas aliquid earum neque maxime fugiat harum cum officiis impedit hic dignissimos. Aliquam sunt ratione deserunt soluta nostrum possimus doloremque quos rem quisquam, sint, repellendus animi voluptatem repudiandae reprehenderit hic corporis iusto excepturi. Corrupti labore incidunt autem reiciendis aliquam repudiandae quod! Nostrum, voluptas facere, illo doloribus excepturi, cum quibusdam a fugiat ullam molestias similique. Expedita fuga libero voluptate est cumque harum sint distinctio suscipit similique quasi maxime delectus, voluptatem animi? Voluptas impedit, quod, architecto maxime nemo, inventore iure dolor maiores nostrum laboriosam odit natus eligendi rem provident facilis saepe illo fugiat voluptatum adipisci ex voluptates. Distinctio est accusamus fuga provident ipsam quaerat vitae in similique ab saepe eaque, eius dignissimos labore doloribus iusto! Consectetur porro eius, ullam est error quod commodi dignissimos praesentium! Aspernatur, debitis vel dolore minima ipsum officia eaque eius maxime expedita recusandae non laboriosam, repudiandae fugiat necessitatibus sequi et, eligendi aliquam. Veniam doloribus culpa sunt, accusantium corrupti recusandae molestiae amet numquam maiores suscipit ex architecto minima magnam eaque debitis libero fugit voluptate. Voluptatum inventore ipsum ratione iusto tenetur dolorum, error culpa obcaecati quae neque ab itaque. Dolorum accusantium sed minus dignissimos maiores debitis in. Quasi voluptates dolorem non cum qui accusamus beatae sapiente amet praesentium eos sit error, reprehenderit cupiditate consequuntur atque velit! Accusantium harum atque laborum laudantium sed ducimus expedita dolor esse, nisi consequuntur ea doloremque vitae, officia sit quisquam consequatur cumque earum nam rem neque sapiente culpa! Aperiam temporibus, sed aliquid, ut quibusdam, laudantium ipsa quae tenetur adipisci blanditiis autem velit! Qui tempora voluptatum nostrum nam ab pariatur, adipisci soluta? Officia exercitationem sunt in qui eum deleniti molestiae eligendi quo ipsum expedita minus incidunt aperiam tempora, repudiandae molestias placeat eos deserunt consectetur, rerum perferendis. Vel nam in recusandae aspernatur porro labore doloribus dolore dolorem qui minima eaque ad reprehenderit suscipit magnam, aut corporis eligendi voluptatibus temporibus eius natus dolor impedit amet aperiam! Incidunt molestias maxime, vel magnam voluptatem a quasi repudiandae error voluptate at autem ab nesciunt animi unde recusandae quisquam aliquam natus aliquid cum iusto? Quod omnis atque perspiciatis, quo illum iure in ipsa minima a aspernatur vitae laudantium sapiente, mollitia culpa quis repellat inventore aliquam! Quisquam laboriosam, optio soluta ullam autem explicabo est.</p>
        </Container>
    </Layout>
  )
}

export default LaboratoryPage2
