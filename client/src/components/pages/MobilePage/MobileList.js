import React, { Component } from 'react';
import MobileService from '../../../services/mobile.service';
import MobileItem from './MobileItem'; 
import {Row, Container, Button, Col} from 'react-bootstrap'  
import { Link } from 'react-router-dom';
import './Mobile.css'  
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';   
import Rating from '../Rating/Rating';




export default class MobileList extends Component {
    constructor() {
        super();  
        this.state = {
            mobile: undefined
       
        }
        this.mobileService = new MobileService();   
   

    } 



    componentDidMount() {
        this.getMobileData();         
        toast.configure()
    }
     

    mobileItem = ({ name, link, shortdescription, color, price, image, mobile, rating,  _id}) => {
        return (
            <>
                {_id &&
                    <>

                        <Col className="text-center" className="mt-20" md={6}>
                            <img className="mobileimage" width="200px" height="250px" src={image} alt="phone"></img>
                            <a className="linkto" href={link}> </a>
                            <p className="name">{name}</p>
                            <p className="shortmobiledescription">  <br /> {shortdescription}</p>
                            <p className="color">Color: {color}</p>
                      
                            <p className="price">Precio: {"desde" + " " + price + " " + "€"}</p>   
                            <Rating value={rating}/>
                            



                        {mobile && <Link to={`/caracteristicsmobile/${_id}/${mobile._id}`}><Button className="btn-dark inform">View information <img className="favimg" src="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-13-Pro/Sierra-Blue/Apple-iPhone-13-Pro-Sierra-Blue-thumbnail.png" alt="img"></img>  </Button></Link>}
                            <br/>
                        <Button className="btn-dark mt-20"  onClick={() => this.addtoFavorites(_id)}   >Add to favs <img className="favimg" alt="img" src="https://cdn-icons.flaticon.com/png/128/2550/premium/2550361.png?token=exp=1636541158~hmac=a45e5e74685943cc1137bc7c843a6ff0"></img> </Button>
                        </Col>
                    </>
                }

            </>
        )
    } 
 
    
   

  


    getMobileData = () => {
        this.mobileService.getMobiles()
            .then(res => {
                console.log(res.data);
                this.setState({
                    ...this.state,
                    mobile: res.data, 
                   
                }, () => console.log(this.state))

            })
            .catch(err => console.log(err));
    }  
   
    
  addtoFavorites = (id) => {
       this.mobileService.addtoFavorites(id) 
        .then(res => { 
            console.log(res.data);
            this.setState({
                ...this.state,  
                favorites: res.data
            }) 
        })
  
          toast('Succesfully added to favorites')
      
  }
  

  



    searchMobiles = (text) => {
        
       let    MobileFilter = this.state.mobile?.filter((mobile) => mobile.name.toLowerCase().includes(text.toLowerCase()));   
        console.log(MobileFilter);  


        this.setState({
            ...this.state, 
            filtermobile: MobileFilter
        }) 
    

    }

  


    displayMobiles = () => { 
       
                return ( 
                                  
                   <Container className="pl-20">
                        <Row >  
                       

                          
                        {
                            this.state.mobile?.map(mobile => {
                                return( 
                                    <> 
                                    {
                                        this.mobileItem({...mobile})
                                    }
                                    </>
                                ) 
                                
                            })
                        }
                        
                            

                        </Row>
                    </Container>
                      
                   
                  
                )

         
    } 
  

    


 

    render() {
        return (  
           <>
      
      

            <div className="fielder"> 
             
                {
                    this.displayMobiles()
                } 
                   
          
             
               

              
            </div>
        </>
         
        )
    }
}        




