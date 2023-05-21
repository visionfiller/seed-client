import { useEffect, useState } from "react"
import { getMyCurrentCart } from "../../managers/CartManager"
import { ProductDetail } from "../product/ProductDetails"

export const MyCart = () => {
    const [cart, setCart] = useState({})
    useEffect(()=>{
        getMyCurrentCart().then((data)=>{setCart(data)})
    },[])

return <>
{cart.products ?  cart.products.map((product) => {
    return <ProductDetail product={product}/>
})
: ""}
</>
}