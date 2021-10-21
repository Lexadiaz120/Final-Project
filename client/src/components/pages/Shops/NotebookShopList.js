import React , {Component} from 'react' 
import NotebookService from './../../../services/notebook.service' 
import ShopItem from './ShopItem' 


export default class NotebookShopList extends Component{
    constructor(props){
        super(props); 
        this.state = {
            shops: undefined
        } 
      this.NotebookService = new NotebookService()
    }  
     
    componentDidMount = () => this.getShopData() 



    getShopData = () => {
        this.NotebookService.getShops(this.props.productId) 
          .then(res => {
              console.log('aaaaa', res.data) 
             this.setState({
                 shops: res.data.products
             })
          }) 
          .catch(err => console.log(err))
    } 
     
    render(){
        return(
            <>
                {
                    this.state.shops ?
                        this.state.shops?.map(shop => {
                            return (
                                <ShopItem  {...shop} />
                            )
                        })
                        :
                        <p>Loading...</p>
                }
            </>
        )
    }
} 

 
