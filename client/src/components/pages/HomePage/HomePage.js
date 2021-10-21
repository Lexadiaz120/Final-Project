import './HomePage.css' 
import { Link } from 'react-router-dom'
import { Carousel, Container, Row, Col} from 'react-bootstrap'  
import './HomePage.css'  
import Navigation from '../../layout/Navigation/Navigation' 
import ProductSearch from '../ProductsSearch/ProductsSearch'    
import TypedReactDemo from '../TypeReactDemo/TypeReactDemo'




export default function HomePage(){
    return( 
         
        <>   
           
          
           <div  className='background'>
                <Container className="text-center pt-50" >
                    <Row>   
                        <h1 className="title">
                            <TypedReactDemo strings={[
                                'DIGITAL SEARCH'
                            ]} ></TypedReactDemo></h1>
                        <Col><h2 className="digital_title">THE BEST DIGITAL MARKETPLACE</h2></Col> 
                    </Row>
                    <Row>
                        <Col><p className="digital_description">Find your digital product at a convenient price  </p></Col>
                    </Row> 
                    <ProductSearch></ProductSearch>
            </Container>   

            </div>

       </>
    )
} 

 

