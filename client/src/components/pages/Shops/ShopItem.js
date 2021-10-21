
import './Shop.css' 



export default function ShopItem({ price, shop, product, link}) {
    return (
        <>   
           <div  className="container mt-50"> 
            <hr />   
            <img className="wherebyphoto" src={product.image} alt="product_image"/> 
            <p>{product.name}</p>
                <p>Price: {price}  €</p>
            <p>{shop}</p> 
            <a className="btn btn-primary" href={link}>Go to shop</a>
            <hr /> 
            </div>

        </>
    )
}