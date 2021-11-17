import './HomePage.css' 
import { Link } from 'react-router-dom'
import { Carousel, Container, Row, Col} from 'react-bootstrap'  
import './HomePage.css'  
import Navigation from '../../layout/Navigation/Navigation'   
import TypedReactDemo from '../TypeReactDemo/TypeReactDemo'   
import Footer from './../../pages/../layout/Footer/Footer'
  







export default function HomePage(){
    return( 
         
        <>   
         
          
           <div  className='background'>
                <Container className="text-center  pt-50" > 
                <section className="intro">
                 <Row className="description"> 
                        <Col className="pt-50" md={6}>
               
                   
                        <h1 className="title">
                            <TypedReactDemo strings={[
                                'DIGITAL SEARCH'
                            ]} ></TypedReactDemo></h1> 
                        <h2 className="subtitle">What is Digital Search?</h2>
                            <h3 className="digital_title">Finder and comparator of digital products </h3> 
                         <p className="projectsense">
                                This project was created so that anyone could compare prices for digital goods and buy goods at a bargain price
                         </p>    
                         <br/>
                         <h4>
                                    HOW IT WORKS? <a className="white" href="#instructions">Click here see instructions</a>
                         </h4> 
                         


                         
                  
                           
                           
                     
                       
                        </Col>
                    <Col md={6}>
                            <img className="image" src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-13-Pro/Sierra-Blue/Apple-iPhone-13-Pro-Sierra-Blue-thumbnail.png" alt="mobile"></img>
                   </Col>
                    </Row>  
                    </section> 
                    <section id="instructions">
                        <Row className="mt-20 description">
                        <Col className="mt-20 " md={6}> 
                            <h5 className="text-center titleinstruction">Staring with Digital Search Application</h5>  
                            <p>LOGIN FIRST! </p>
                            <p >Go to Navigation Bar and click Mobiles or Laptops </p>
                            <p >So you are here and now you can see this page </p> 
                            <p >You can see rating of the digital product and short description</p>  
                            <p>Click VIEW INFORMATION to see product details and shops </p>
                        </Col> 
                            <Col md={6}>
                                <img className="imageinstruction" width={520} height={520} src="/Mobile.JPG" alt="mobilepage"/>
                            </Col>  
                            <Col md={6}>
                                <img className="imageinstruction" width={520} height={520} src="/caracteristicsphoto.JPG" alt="mobilepage" />
                            </Col>
                            <Col className="mt-20 " md={6}>
                                <h5 className="text-center titleinstruction">Device caracteristics</h5>
                                <p >Here you can see device caracteristics  </p>
                                <p >All caracteristics is a real information  </p>
                            </Col>  
                            <Col className="mt-20 " md={6}>
                                <h5 className="text-center titleinstruction">Shop</h5>
                                <p >Here you can see a shop and compare products prices  </p>
                                <p >Look for shops and choose your favorite shops and buy there  </p>
                            </Col>
                            
                            <Col md={6}>
                                <img className="imageinstruction" width={520} height={520} src="/Shop.JPG" alt="mobilepage" />
                            </Col>
                   
                    </Row> 
                  
                    </section> 
                  
                </Container> 
            </div> 
           <Footer></Footer>

       </>
    )
} 

 

