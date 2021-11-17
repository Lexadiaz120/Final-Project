import React, {Component} from 'react'  
import {Link, NavLink} from 'react-router-dom'
import ProductService from '../../../services/product.service' 
import {Container, Row, Col} from 'react-bootstrap'  
import Search from '../Search/Search';
import './ProductSearch.css'



export default class ProductSearch extends Component{
 
     constructor(props){
         super(props); 
         this.state = {
             products: undefined, 
             value: ''
         } 
         this.ProductService = new ProductService()
     }
  

    handleChange = (e) => {
        const { value, name } = e.target;  
        let ProductFilter = this.state.products?.filter((product) => product.name.toLowerCase().includes(value.toLowerCase()));  
        console.log(ProductFilter)    
        if(ProductFilter.length === 0){
            let input = document.querySelector('.busqueda');
            input.innerHTML = 'No results were found for your search.........';
        }
       
        console.log(value,name)
        this.setState({
            ...this.setState,
            [name]: value, 
            filterprod: ProductFilter
        })
       

    }
 
 
       

    componentDidMount = () => this.getProductData()
 


     getProductData = () => {
         this.ProductService.getProducts()
           .then(res => { 
               console.log(res.data)
               this.setState({
                   ...this.state, 
                   products: res.data 
               })
           })  
           .catch(err => console.log(err))
     }   


    

    productDisplay = () => {

        return ( 
            <> 
            <div className="form">
            <form class=" search-form">
                <input class="search_input" name="text" type="text"  onChange={(e) => this.handleChange(e)}  />
                        <ul className="autocomplete"> 
                         {this.state.filterprod?.map((product => {
                             return (
                                 <li className="autocomplete_item"><img className="productimage" src={product.image} alt="product" /><a className="productsearch" href={product.link}>{product.name}</a></li>
                             )
                         }))}
                        </ul>  
                        <h3 className="busqueda"></h3>
                    <img className="search_img" src="./search-img.png" alt="searchimg"></img>
            </form> 
         </div>  
           </>
        )
    }




    render(){
        return(
            <>     
         
               

             
             {
                 this.productDisplay()
             } 
           

          
           
          
            </>
        )
    }
} 



 