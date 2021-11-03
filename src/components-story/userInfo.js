import * as React from "react"
import PropTypes from 'prop-types'



const Alert = ({children, ...props}) => {
  return (
    <div className="alert alert-danger d-flex align-items-center" role="alert" >
      <p className="m-0"> 
        {children}
      </p>
    </div>
  )
}

Alert.propTypes = {}


const NoContentAlert = () => {
  return(
    <div className="container mt-6">
      <Alert>
        Nie dodano żadnej treści dodaj Treść strony aby zobaczyć jej podgląd
      </Alert>
    </div>
  )
}



const NotDefined = ({blokName}) => {
  return (
    <div className="alert alert-danger d-flex align-items-center" role="alert">
      {/* <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg> */}
      <p className="m-0"> 
        Komponent <strong>{blokName}</strong> nie został jeszcze zdefiniowany
      </p>
    </div>
  )
}

NotDefined.propTypes = {}


const NoLinkTypeError = () => {
  return(
    <Alert>
      PROSZE PODAĆ TYP LINKU W ZAKŁADCE "LINK" PO PRAWEJ STRONIE
    </Alert>
  )
}





export { NotDefined, Alert, NoContentAlert, NoLinkTypeError }