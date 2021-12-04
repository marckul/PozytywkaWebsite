import * as React from 'react'
import {Link} from 'gatsby'

import { Container, Phone } from './components-bundle/components-bundle';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const CopyrightInfo = () => (
  <div className="col-12 col-lg-10 col-xl-7 d-flex flex-row justify-content-center">
    <div className="row flex-grow-1  justify-content-center">
      <div className="col-12 col-sm-5" style={{minWidth: "max-content"}}>
        <p className="text-center text-sm-end ">Copyright © 2021 Pozytywka ODT</p>
      </div>
      <div className="d-none d-sm-block col-1 col-sm-1">
        <p className="text-center"> - </p>
      </div>
      <div className="col-12 col-sm-5">
        <p className="text-center text-sm-start"> Created by: Marcin Kula</p>
      </div>
    </div>
  </div>

)


const Footer = () => {
  return(
    <footer className="bg-dark small ">
      <small>
        <div className="container py-5">
          <Row className="p-5 justify-content-center">
            <Col md={4} className="p-4"> 
              <h5><b>Diagnoza</b></h5> 
              <ul>
                <li>Badanie protokołem ADOS-2 </li>
                <li>Diagnoza funkcjonalna - badanie kompetencji z zakresu teorii umysłu</li>
                <li>Diagnoza funkcjonalna z badaniem testem IDS-P (dla dzieci od 3 do 5 rż)</li>
                <li>Diagnoza funkcjonalna testem (PEP-R) (dla dzieci od 6 rż)</li>                
              </ul>
            </Col>
            <Col md={4} className="p-4"> 
              <h5><b>Terapia</b></h5> 
              <ul>
                <li>Terapia indywidualna dla dzieci</li>
                <li>Terapia indywidualna dla dzieci z mutyzmem selektywnym</li>
                <li>Wczesna interwencja dla dzieci z zaburzeniami rozwoju mowy</li>
                <li>Indywidualna psychoterapia dla nastolatków, głównie z grupy ASD/ASC</li>
                <li>Zajęcia grupowe: Trening umiejętności społecznych dla dzieci z Zespołem Aspergera</li>
              </ul>
            </Col>
            <Col md={4} className="p-4"> 
              <h5><b>Kontakt</b></h5> 
              <p>Wolności 256/3, 41-800 Zabrze <br/> Ośrodek Diagnostyczno-Terapeutyczny “Pozytywka”</p>

              <h6><b>Email</b></h6>
              <p>odt.pozytywka@gmail.com</p>

              <h6><b>Telefon</b></h6>
              <i>telefon-rejestracja:</i>
              <Phone tel="739 025 642">739 025 642</Phone>
              <i>telefon dla osób korzystających z naszego ośrodka</i>
              <Phone tel="666 540 156">666 540 156</Phone>
            </Col>
            <CopyrightInfo/>

            <div className="col-12">
              {/* <p className="text-center">Copyright © 2021 Pozytywka ODT &nbsp;&nbsp; - &nbsp;&nbsp; Created by: Marcin Kula</p> */}
              {/* <p className="d-block smaller text-center ">Created by: Marcin Kula</p> */}
              <p className="text-center"><Link to="/regulamin-strony">Regulamin Strony</Link></p>
            </div>
          </Row>
          
        </div>
      </small>
    </footer>
  )
}


export default Footer