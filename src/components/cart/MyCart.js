import { useEffect, useState } from "react"
import { getMyCurrentCart } from "../../managers/CartManager"

export const MyCart = () => {
    const [cart, setCart] = useState({})
    useEffect(()=>{
        getMyCurrentCart().then((data)=>{setCart(data)})
    },[])

return <>
{cart.products ?  cart.products.map((product) => {
    return <h2>{product.name}</h2>
})
: ""}
</>
}