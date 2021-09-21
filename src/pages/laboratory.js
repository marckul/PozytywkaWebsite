import * as React from 'react'
import Layout from '../components/layout'

import { HeroImageArea, Container } from '../components/components-bundle/components-bundle'
import { Link } from 'gatsby'

import HeroImage from '../assets/images/offer-page-hero--prod.jpg'

import Carousel from 'react-bootstrap/Carousel'

import '../styles/labor/labor.css'


const cardStyles = {
  minHeight: "20em",
  maxWidth: "18em"
}

function Card() {
  
  return(
    <div className="col"  style={cardStyles}>
      <div className="offer-card" >
        <h5 className="">Card title</h5>
        <p>Tutaj bedzie karteczka</p>
        <p className="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="">Card link</a>
        <a href="#" className="">Another link</a>
      </div>
    </div>
  )
}

function CardBoot() {
  return(
    <div className="col-sm-6 col-lg-4 offer-card-col">
      <div className="card rounded-0 offer-card" >
        <div className="card-inner">
          <h5 className="card-title">Card title</h5>
          <p>Tutaj bedzie karteczka</p>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
    </div>

  )
}


function CardsSlides() {
  return (
    <Carousel interval={null} className="carousel-test py-5 my-5" variant="dark">
      <Carousel.Item>
        <div className="col-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro officiis, cupiditate aspernatur reprehenderit dignissimos quibusdam fuga, quas eius quam similique tenetur accusantium ex! Tenetur qui explicabo esse incidunt deleniti magni rem ea, accusantium enim ipsam iste eligendi possimus a eos ex saepe ab autem quam! Nihil repellendus similique hic voluptatum harum iure deserunt possimus voluptatibus dicta ipsum deleniti at enim amet, nobis fuga quibusdam corporis saepe perferendis consequatur magni eos dolorum aliquam! Sed repellendus dolore blanditiis saepe tenetur asperiores eos magnam debitis aperiam, error ipsa, ex beatae ducimus voluptatum cum numquam vero aliquam, corrupti architecto officiis nostrum? Nostrum, est maiores!
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="col-4">
          Aliquam accusamus eius delectus blanditiis, magnam fugiat dolorum eaque iusto natus quae laborum possimus nostrum amet tempore velit fugit deserunt, laudantium praesentium facilis. Laborum maxime eius nemo ad, deleniti itaque ullam delectus excepturi distinctio, veritatis id, veniam cupiditate ex quidem quasi harum velit impedit est expedita minus nobis quia. Expedita sint dolores soluta reprehenderit placeat ipsum, consectetur nobis nam modi rem dolor in quaerat est aspernatur vero repellat voluptatem consequuntur perferendis veritatis reiciendis debitis nemo aperiam? Ullam voluptatum facilis, dolore iste incidunt beatae minus, fuga rerum quisquam sed porro fugit doloribus est?
        </div>  
      </Carousel.Item>
      <Carousel.Item>
        <div className="col-4">
          Quo voluptate id fuga libero nihil rerum dicta, omnis iusto! Est placeat saepe consequatur, modi fugit eveniet non possimus tempore quam nam! Ipsam accusamus repudiandae asperiores explicabo, perferendis illum velit labore aut, pariatur quod aperiam! Enim dolore consequatur expedita aspernatur nulla ab possimus, repudiandae officiis et distinctio id quia in dignissimos omnis unde impedit, maiores totam sapiente debitis officia sit! Asperiores excepturi accusamus quae earum dolorem porro at assumenda ipsum sequi quidem corporis sint, consequatur nemo minima eos sunt! Sequi, dolor! Dolore eum qui hic architecto dolorum natus ad rerum corrupti fugiat.
        </div>
      </Carousel.Item>
    </Carousel>
  )
  
}



const OfferPage = () => {  
  return(
    <Layout>
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
        <div className="row py-5 g-5">
          <CardBoot/>
          <CardBoot/>
          <CardBoot/>
        </div>
        <div className="row g-5">
          <div className="col-4"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam unde voluptatibus aut placeat deserunt possimus saepe culpa totam sunt eveniet dolor asperiores vitae magni repudiandae eaque doloribus ad quis enim, distinctio voluptatum atque. Veritatis totam et quaerat magni, voluptatem, at aliquid quasi deleniti eveniet natus culpa, distinctio repudiandae officia corporis. </div>
          <div className="col-4"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam unde voluptatibus aut placeat deserunt possimus saepe culpa totam sunt eveniet dolor asperiores vitae magni repudiandae eaque doloribus ad quis enim, distinctio voluptatum atque. Veritatis totam et quaerat magni, voluptatem, at aliquid quasi deleniti eveniet natus culpa, distinctio repudiandae officia corporis. </div>
        </div>
      </Container>      
      <Container>
        <h2>Terapia</h2>
        <p className="lead">Tutaj bedzie krótki tekst promocyjny, taki żeby zmieścił się w max trzech linijkach</p>
      </Container>      
      <Container>
        <h2>Konsultacje i Szkolenia</h2>
        <p className="lead">Tutaj bedzie krótki tekst promocyjny, taki żeby zmieścił się w max trzech linijkach</p>
        
        <CardsSlides/>

      </Container>      
    </Layout>
  )
}

export default OfferPage