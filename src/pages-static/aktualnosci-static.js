import * as React from "./react"
import PropTypes from './prop-types'
// import  Container from "react-bootstrap/Container"

import { Link } from "./gatsby"
import { StaticImage } from "./gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import {  HeroImageArea, Container, PostShort2 } from '../components/components-bundle/components-bundle'
import HeroImage from '../assets/images/aktualnosci-hero.jpg'

import img1 from '../assets/images/artykul-zdjecie.jpg'
import img2 from '../assets/images/chlopczyk-na-molo.jpg'


// const PostShort0 = ({title, publishDate, imgSrc, children}) => {
//   return(
//     <div className="post-short--archive shadow-z1-md my-5">
//       <div className="row">
//         <div className="col-12 col-md-4 col-lg-3 post-image">
//             <img src={imgSrc} alt="" className="img-cover" />
//         </div>
//         <div className="post-content col-12 col-md p-4">
//           <div className="post-short--head mb-5">
//             <h4 className="mb-2">{title}</h4>
//             <p className="post-date small">{publishDate}</p>
//           </div>
//           <div className="post-short--body">
//             <p>
//               {children}
//             </p>
//             <Link className="read-more" to="/artykul">
//               Czytaj więcej
//             </Link>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// PostShort0.propsTypes = {
//   imgSrc: PropTypes.string,
// }


// const PostShort = ({title, publishDate, imgSrc, children}) => {
//   return(
//     <div className="post-short--archive1 shadow-z1-md my-5">
//       <div className="d-flex flex-row p-3">

//         <div className="post-image col-12 col-md-4 col-lg-3">
//           <img src={imgSrc} alt="" className="img-cover" />
//           {/* <div className="aspect-ratio">
//             <div className="aspect-ratio--inner">  </div>
//           </div> */}
//         </div>

//         <div className="post-content col-12 col-md p-4">
//           <div className="post-short--head mb-5">
//             <h4 className="mb-2">{title}</h4>
//             <p className="post-date small">{publishDate}</p>
//           </div>
//           <div className="post-short--body">
//             <p>
//               {children}
//             </p>
//             <Link className="read-more" to="/artykul">
//               Czytaj więcej
//             </Link>

//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// PostShort.propsTypes = {
//   imgSrc: PropTypes.string,
// }




const NewsPage = () => (
  <Layout header="transparent-light">
    <Seo title="Start"/>
    <HeroImageArea  backgroundImage={HeroImage} variant="light">
      <h1><u>Aktualności</u></h1>
      <p className="lead">
        Quas unde fugiat accusantium voluptatibus facilis dolor distinctio dignissimos quidem iste labore.
      </p>
    </HeroImageArea>
    <Container>
      <div className="posts-archive-2 row">
        <PostShort2
          title="Pierwszy post"
          publishDate="Piątek, 20 Sierpnia 2020"
          imgSrc={img1}         
        >
          Sunt quae impedit deleniti illum hic minima maiores est, voluptatem, perspiciatis, eius quaerat eveniet fuga! Repellendus ad voluptatem rem asperiores...
        </PostShort2>

        <PostShort2
          title="Pierwszy post"
          publishDate="Piątek, 20 Sierpnia 2020"
          imgSrc={img2}         
        >
          Beatae eius maxime temporibus ipsam necessitatibus dolore, iste blanditiis ex architecto quidem debitis illo error inventore rerum eveniet explicabo odit suscipit!...
        </PostShort2>

        <PostShort2
          title="Pierwszy post"
          publishDate="Piątek, 20 Sierpnia 2020"
          imgSrc={""}         
        >
          Beatae eius maxime temporibus ipsam necessitatibus dolore, iste blanditiis ex architecto quidem debitis illo error inventore rerum eveniet explicabo odit suscipit!...
        </PostShort2>
      </div>
    </Container>
  </Layout>
)

export default NewsPage
