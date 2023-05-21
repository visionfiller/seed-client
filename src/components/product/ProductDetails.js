import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getMyCurrentCart } from "../../managers/CartManager"
import { addToCart } from "../../managers/ProductManager"

export const ProductDetail = ({product}) => {
    const [cart, setCart] = useState({})
    const navigate = useNavigate()
    useEffect(()=>{
        getMyCurrentCart().then((data)=>{setCart(data)})
    },[])
    return<>
    <div className="p-2 ">
        <h1>{product.name}</h1>
    <div>{product.description}</div>
    <div>{product.price}</div>
    <div className="w-1/2">
    <img className="object-contain" src={product?.image_path} />
   </div>
    <button className="btn"onClick={()=> { addToCart(product.id).then(()=> navigate("/mycart"))}}> Add to Cart</button>
    </div>
    </>
}