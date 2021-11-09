  

  import React, {Component} from 'react'  
  import ProductService from '../../../services/product.service';



export default class ProductId extends Component {  
         
       constructor(){
           super(); 
           this.state = {
               product: undefined
           } 
           this.ProductService = new ProductService()
       }      

       componentDidMount = () => this.getProductData()


       getProductData = () => {
           this.ProductService.getProducts() 
            .then(res => {
                this.setState({
                    ...this.state, 
                    product: res.data
                }, () => console.log(this.state))
            })
       } 

       displayProducts = () => {
           return(
               <> 
                 {
                     this.state.product?.map(products => {
                         return(
                             <p>{products.name}{products._id}</p>
                         )
                     })
                 }
               </>
           )
       } 

       render(){
           return(
               <> 
               {
                   this.displayProducts()
               }
               </>
           )
       }


     

}