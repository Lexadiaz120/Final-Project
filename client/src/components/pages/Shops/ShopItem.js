
import './Shop.css'   
import Rating from '../Rating/Rating'




export default function ShopItem({ price, shop, product, link, rating, image}) {
    return (
        <>   
           <div  className="container  block-content mt-50"> 
            <hr/>
            <img className="wherebyphoto" src={product.image} alt="product_image"/> 
            <p>{product.name}</p>
               <p>Price: {price}  €</p> 
                <p>Shop:</p>
                <img width={220} height={220} src={image} alt="mediamarkt" /> 
               
            <Rating value={rating}/>
             
            <a className="shoplink btn btn-primary mt-20" href={link}>Go to shop</a> 
            </div>

        </>
    )
}