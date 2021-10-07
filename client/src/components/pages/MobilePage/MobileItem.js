import { Link } from 'react-router-dom'
import './../MobilePage/Mobile.css'
import { Container, Row, Col } from 'react-bootstrap';

export default function MobileItem({ name, shortdescription, color, price, image, mobile, _id }) {

  return (
    <>
      {_id &&
        <>



          <Col md={6}>
            <img width="150px" className="phoneimage" src={image} alt="phone"></img>
            <p>{name}</p>
            <p className="shortdescription">  <br /> {shortdescription}</p>
            <p>Color: {color}</p>
            <p>Precio: {"desde" + price + "€"}</p>
            {mobile && <Link to={`/caracteristics/${_id}/${mobile._id}`}>View information</Link>}
          </Col>


        </>
      }
    </>
  )
}


 // CHARSTERISTICS 
 // TEEMOS QUE PILLAR EL MOBILE ID 
 // CONO PUEDEO HACERLO ? 
 // A TRAVES DE UN FORMILARIO ? 

// Como puedo pillar este dato 



