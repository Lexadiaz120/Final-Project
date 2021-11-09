import React, {Component} from 'react' 
import MobileService from '../../../services/mobile.service'   
import FavoriteItem from './FavoriteItem'



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
               console.log(res.data.favorites[0]); 
              this.setState({  
                  ...this.state, 
                  info: res.data
              })
           })
             .catch(err => console.log(err));
       
    }   
 

    showData = () => {
         
       
        return(
            this.state.info.favorites?.map(s => <div><img src={s.image} alt="img"/>  {s.name}<br/>{s.shortdescription}</div>
        ))
    }
  

   
    render(){
        return(
         this.state.info ?
            <div>  
             {this.showData()}
                </div> : <img src="https://c.tenor.com/0iK9a1WkT40AAAAC/loading-white.gif" alt="fondo"></img>
              
        
        )
    }
}