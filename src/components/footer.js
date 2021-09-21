import * as React from 'react'

import { Container, Phone } from './components-bundle/components-bundle';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => {
  return(
    <footer className="bg-dark small ">
      <small>
        <div className="container py-5">
          <Row className="p-5">
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
              <Phone tel="543 254 767">543 254 767</Phone>
              <Phone tel="235 578 673">235 578 673</Phone>
              <Phone tel="767 423 525">767 423 525</Phone>
              
              

            </Col>
          </Row>
        </div>
        {/* <Container>
        </Container> */}
      </small>
    </footer>
  )
}


export default Footer