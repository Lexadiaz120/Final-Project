import React, {Component} from 'react' 
import MobileService from '../../../services/mobile.service'   
import { Row, Container, Button, Col } from 'react-bootstrap' 
import './Favorites.css'


export default class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: null
        }
        this.mobileService = new MobileService();


    }
    
  



    componentDidMount() {
        this.getFavoritesData()    
    }
 
  
 
    getFavoritesData = () => {
        this.mobileService.getFavorites()
           .then((res)=> {
               console.log(res.data); 
              this.setState({  
                  ...this.state, 
                  info: res.data
              })
           })
             .catch(err => console.log(err));
       
    }     



    showData = () => {
  
       
        return( 
                
                         
                    this.state.info.favorites?.map(s => 
                        <div><img className="favimage" src={s.image} alt="img" />  <p className="favname"><a className="link" href={s.link}>{s.name}</a></p><br /><p className="favdescription text-center">{s.shortdescription}</p>
                            <Button className="btn btn-dark btninformation"><a className="linkback" href={s.link}>View information</a> </Button>
                        </div>
                       
            
           
        
        )) 
    
    }
  

   
    render(){ 
      
        return( 
         
         
         this.state.info ?
            <div>    
          
                 <div className="backgroundimg">
                    <h2 className="text-center white"> My Favorites List</h2>
         
                    <Container className="text-center" >
          
             {this.showData()}

            </Container>
                    </div>
                </div> : <img src="https://c.tenor.com/0iK9a1WkT40AAAAC/loading-white.gif" alt="fondo"></img> 

           
              
        
        )
    }
}