import * as React from "react"

import { Link } from 'gatsby'

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
  // Approximations -> 10 months of work (without holidays)
  // Saz 40/w * 4 * 10/12 = 133/m
  // Diag 4/w = 16 /m * 10/12 = 14/m
  const therapyPerMonth = 133;
  const diagPerMonth = 14;
  const secPerMonth = 86400 * 30.5;

  const birthDay = new Date(2014, 8, 0);
  const start = new Date(2021, 10, 4);
  const now = Date.now();

  const diffMonth = (now - start) / 1000 / secPerMonth;
  
  const numbers = {
    posYears: new Date((now - birthDay)).getUTCFullYear() - 1970,
    expYears: 20 + diffMonth/12,
    therapyHrs: 7413 + therapyPerMonth*diffMonth,
    diagnosis: 323 + diagPerMonth*diffMonth,
  };

  for (const key in numbers) {
    numbers[key] = Math.floor(numbers[key]);
  };

  return numbers;
};

const counterNums = counterUpdate();

const IndexPageContent = () => {
  return(
    <>
      <HeroImageArea variant="dark" backgroundImage={boyImg}  textShadow={true}>
        <h1 className="h1">Wsparcie dla dzieci ze spektrum <em>autyzmu</em></h1>
        <p className="lead">
          Wierzymy, że spektrum autyzmu jest efektem ewolucyjnej 
          neuroróżnorodności, dzięki której osoby z autyzmem postrzegają świat 
          w wyjątkowy sposób. 
        </p>
        <Link to="#nasze-doswiadczenie" className="btn btn-outline-light">
          Zobacz więcej
        </Link>
      </HeroImageArea>
      <BgGradient>
        <Container id="nasze-doswiadczenie">
          <h2>Zaufaj naszemu <u>doświadczeniu</u></h2>
          <p className="lead">Pozytywka została założona {counterNums.posYears}
            {' '} lat temu, by wspierać rodziny dzieci w spektrum autyzmu, 
            jednak nasze doświadczenie sięga o wiele dalej
          </p>
          <div className="row py-6">
            <CounterBox 
              counterClassName="h1"
              number={counterNums.expYears}
              text={"Lat doświadczenia terapeutów w pracy z osobami w spektrum"}
            />
            <CounterBox
              counterClassName="h1"
              number={counterNums.therapyHrs}
              text={"Godzin przeprowadzonej terapii"}
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
                <span>
                  Najciekawsze osoby, jakie znajdziesz, to te, które nie mieszczą się w przeciętnym kartonowym pudełku. Zrobią to, czego potrzebują. Zrobią własne pudełka.
                </span>
                <span>Doktor Temple Grandin</span>
              </RatioContent>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column position="right"> 
              <img src={`${spacerWGorach}`} alt="" className=""/>
            </Grid.Column>
            <Grid.Column position="left">
              <div>
                <h3>
                  W Pozytywce wierzymy, że <u>każdy</u> człowiek ma coś do 
                  zaoferowania światu
                </h3>
                <p className="lead">
                  Wiemy, że w każdym napotykanym przez nas dziecku tkwi potencjał. 
                </p>
                <p className="lead">
                  Pomóż nam go odnaleźć. 
                </p>
                <p>Umów się na konsultacje lub na diagnozę</p>
                <Link className="btn btn-dark" to="/kontakt">
                  Zarejestruj się
                </Link>
              </div>
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
                Oferujemy Państwu nasze wieloletnie doświadczenie i prowadzenie 
                procesu diagnostycznego przez zespół specjalistów.
              </CircleImgCard>
              <CircleImgCard 
                title="Terapia"
                imgSrc={terapie}
              >
                W naszym ośrodku prowadzimy spotkania terapeutyczne indywidualne i grupowe.
              </CircleImgCard>
              <CircleImgCard 
                title="Szkolenia"
                imgSrc={szkolenia} 
              >
                Oferujemy pomoc dla nauczycieli, którzy chcą lepiej zrozumieć 
                swoich uczniów z trudnościami neurorozwojowymi.
              </CircleImgCard>
            </div>
            <div>
              <Link 
                className="d-block btn-block btn btn-outline-dark mx-auto" 
                to="/oferta"
              >
                Zobacz Więcej
              </Link>
            </div>
          </div>
        </WavesContainer>
    </>
  )
}

export default IndexPageContent
