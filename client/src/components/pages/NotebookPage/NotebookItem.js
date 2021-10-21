import { Link } from 'react-router-dom'
import './../MobilePage/Mobile.css'
import { Container, Row, Col } from 'react-bootstrap';


export default function NotebookItem({ name, link, shortdescription, color, price, image, notebook, _id }) {

    return (
        <>
            {_id &&
                <>

                   

                    <Col className="mt-20" md={6}>

                        <img  className="notebookimage" src={image} alt="phone"></img>
                        <p className="title" >{name}</p>
                    <p className="shortdescription">  <br />{shortdescription}<br /> </p>
                        <p className="color">Color: {color}</p>
                        <p className="price">Precio: {"desde" + " " + price + " " + "€"}</p> 
                    {notebook && <Link className="btn btn-primary" to={`/caracteristicsnotebook/${_id}/${notebook._id}`}>View information</Link>}
                    </Col>


                </>
            }

        </>
    )
}
