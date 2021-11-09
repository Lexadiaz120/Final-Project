import React, { Component } from 'react';
import MobileService from '../../../services/mobile.service';
import MobileItem from './MobileItem'; 
import {Row, Container, Button} from 'react-bootstrap' 
import './Mobile.css'  


export default class MobileList extends Component {
    constructor() {
        super();  
        this.state = {
            mobile: undefined
       
        }
        this.mobileService = new MobileService();   
   

    }

    componentDidMount() {
        this.addtoFavorites();
        this.getMobileData(); 
       

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
                                  
                   <Container>
                        <Row >  
                       

                          
                        {
                            this.state.mobile?.map(mobile => {
                                return(
                                    <MobileItem key={mobile._id} {...mobile} />
                                )
                            })
                        }
                         {     
                             
                            
                                this.state.mobile?.map(mobile => {
                             return ( 
                                 <> 
                                 <div className="content">  
                                 <br/>
                                  <Button onClick={() => this.addtoFavorites(mobile._id)}>Add to favorites</Button>
                                 </div>
                                 </>
                                 
                             )}) 
                             
                             
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