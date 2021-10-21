import axios from 'axios'  
 
class ProductService {
    constructor(){
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/catalog`, 
            withCredentials: true
        })
    } 

    getProducts = () => this.instance.get("/products")
} 


export default ProductService; 





 


 


 
