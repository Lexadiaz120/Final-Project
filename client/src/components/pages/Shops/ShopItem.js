import { Link } from 'react-bootstrap' 
import './Shop.css' 



export default function ShopItem({ price, shop, product}) {
    return (
        <>   
           <div className="container">
            <hr />   
            <img className="wherebyphoto" src={product.image} alt="product_image"/>
            <p>{product.name}</p>
            <p>Price: {price} $</p>
            <p>{shop}</p>
            <hr /> 
            </div>

        </>
    )
}