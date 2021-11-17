import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap' ;  
import './Mobile.css'


export default function MobileItem({ name, link, shortdescription, color, price, image, mobile, _id}) {

  return (
    <>
      {_id &&
        <>

          <Col  className="mt-20"  md={6}>  
            <img className="mobileimage" width="200px" height="250px" src={image} alt="phone"></img>
          <a className="linkto" href={link}> </a>
            <p className="name">{name}</p> 
            <p  className="shortmobiledescription">  <br /> {shortdescription}</p> 
            <p className="color">Color: {color}</p> 
          <p className="price">Precio: {"desde" + " " + price + " " + "€"}</p>  


              
            {mobile && <Link className="btn btn-dark" to={`/caracteristicsmobile/${_id}/${mobile._id}`}>View information</Link>} 

          </Col>
        </>
      } 

    </>
  )
}
 


 
