import * as React from "react"

import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import useStoryblok from '../../lib/storyblok'


import Seo from "../components/seo"
import { GetSEO } from '../components-story/SEO/seo'
import Layout from "../components/layout"

import { HeroImageArea, Container, BgGradient, WavesContainer } from '../components/components-bundle/components-bundle'
import { CounterBox } from '../components/counter/counter'
import { CircleImgCard } from '../components/cards-&-carousel/cards-&-carousel'

import * as Grid from '../components/css-grid/css-grid'
import { RatioContent } from '../components/ratio-content/ratio-content'

import boyImg from  '../assets/images/Boy-under-stars.jpg'
import boyOnMolo from '../assets/images/chlopczyk-na-molo.jpg'
import spacerWGorach from '../assets/images/spacer-w--gorach--30.jpg'

import diagnozy from '../assets/images/start-offer-section/luneta--prod.jpg'
import terapie from '../assets/images/start-offer-section/hands-with-plant--prod.jpg'
import szkolenia from '../assets/images/start-offer-section/light-bulb--production.jpg'

import "../styles/labor/labor.css"

const counterUpdate = () => {
  /* Approximations -> 10 months of work (without holidays)
    Saz 40/w * 10/12 = 188/m * 10/12 = 133
    Diag 4/ w = 16 /m * 10/12 = 14
  */
  const sazPerMonth = 133;
  const diagPerMonth = 14;
  const secPerMonth = 86400*30.5;
  const start = new Date(2021, 10, 4);
  const now = new Date();
  const diffMonth = (now - start)/1000/secPerMonth;
  
  const numbers = {
    years: 20 + diffMonth/12,
    saz: 7413 + sazPerMonth*diffMonth,
    diagnosis: 323 + diagPerMonth*diffMonth,
  };
  for (const key in numbers) {
    numbers[key] = Math.floor(numbers[key]);
  };
  return numbers;
}

const counterNums = counterUpdate();

function SimpleCard({ imgSrc, title, children }) {
  return (
    <div className="card shadow-z1-md" style={{ maxWidth: "20rem" }}>
      <div className="p-4 ">
        <img src={imgSrc} alt="" className="img-fluid border" />
      </div>


      <div className="card-body p-4">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{children}</p>

      </div>
    </div>
  )
}


const IndexPage = ({location}) => {
  const { storyblokEntry } = useStaticQuery(
    graphql`
      query {
        storyblokEntry(full_slug: {eq: "start-dontRenderPage"}) {
          content
          name
        }
      }
    `
  )
  const story = useStoryblok(storyblokEntry, location);
  const seoData = GetSEO(story)

  return(
    <Layout header="transparent-dark">
      <Seo title={seoData.title} description={seoData.description}/>
      <HeroImageArea variant="dark" backgroundImage={boyImg}  textShadow={true}>
        <h1 className="">Wsparcie dla dzieci ze spektrum <em>autyzmu</em></h1>
        <p className="lead">
          Wierzymy, że spektrum autyzmu jest efektem ewolucyjnej neuroróżnorodności, dzięki której osoby z autyzmem postrzegają świat w wyjątkowy sposób. 
        </p>
        <Link to="#nasze-doswiadczenie" className="btn btn-outline-light">Zobacz więcej</Link>
      </HeroImageArea>
      <BgGradient>
        <Container id="nasze-doswiadczenie">
          <h2>Zaufaj naszemu <u>doświadczeniu</u></h2>
          <p className="lead">Pozytywka została założona 7 lat temu, by wspierać rodziny dzieci w spektrum autyzmu, jednak nasze doświadczenie sięga o wiele dalej</p>
          <div className="row pt-6">
            <CounterBox 
              counterClassName="h1"
              number={counterNums.years}
              text={"Lat doświadczenia terapeutów w pracy z osobami w spektrum"}
            />
            <CounterBox
              counterClassName="h1"
              number={counterNums.saz}
              text={"Godzin przeprowadzonej terapii metodą SAZ"}
            />
            <CounterBox
              counterClassName="h1"
              number={counterNums.diagnosis}
              text={"Wykonane diagnozy"}
            />
          </div> 
        </Container>

        <div className="container-box py-5">
          <Grid.Row>
            <Grid.Column position="left"> 
              <img src={`${boyOnMolo}`} alt="" className="img-grid"/>
            </Grid.Column>
            <Grid.Column position="right">
              <RatioContent childComponent={Grid.Quotation} debugMode={false}>
                <span>Wydaje mi się, że do osiągnięcia sukcesu w nauce czy sztuce nieodzowna jest pewna doza autyzmu. Jeżeli ktoś pragnie osiągnąć sukces, niezbędna może okazać się konieczność odłączenia od świata, od domeny praktycznej, przemyślenia konkretnej koncepcji i wykazania się oryginalnością, by móc stworzyć coś nowego</span>
                <span>Hans Asperger</span>
              </RatioContent>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column position="right"> 
              <img src={`${spacerWGorach}`} alt="" className=""/>
            </Grid.Column>
            <Grid.Column position="left">
              <h3>W Pozytywce wierzymy, że <u>każdy</u> człowiek ma coś do zaoferowania światu</h3>
              <p className="lead">
                Wiemy, że w każdym napotykanym przez nas dziecku tkwi potencjał. 
              </p>
              <p className="lead">
                Pomóż nam go odnaleźć. 
              </p>
              <p>Umów się na konsultacje lub na diagnozę</p>
              <Link className="btn btn-dark" to="/kontakt">Zarejestruj się</Link>
            </Grid.Column>
          </Grid.Row>
        </div>
      </BgGradient>
        <WavesContainer>
          <div className="container">
            <h2>Nasze <u>usługi</u></h2>
            <div className="row g-lg-5 g-xl-6">
              <CircleImgCard 
                title="Diagnozy"
                imgSrc={diagnozy} 
              >
                Oferujemy Państwu nasze wieloletnie doświadczenie i prowadzenie procesu diagnostycznego przez zespół specjalistów.
              </CircleImgCard>
              <CircleImgCard 
                title="Terapia"
                imgSrc={terapie} 
              >
                Prowadzimy spotkania terapeutyczne indywidualne i grupowe, opierające się głównie na metodzie Stosowanej Analizy Zachowania
              </CircleImgCard>
              <CircleImgCard 
                title="Szkolenia"
                imgSrc={szkolenia} 
              >
                Oferujemy pomoc dla nauczycieli, którzy chcą lepiej zrozumieć swoich uczniów z trudnościami neurorozwojowymi.
              </CircleImgCard>
            </div>
            <Link className="d-block btn btn-outline-dark mx-auto" to="/oferta">Zobacz Więcej</Link>
          </div>
        </WavesContainer>
    </Layout>
  )
}

export default IndexPage

