import { useEffect, useState } from "react"
import { getCategories, getProducts, getProductsByCategory } from "../../managers/ProductManager"
import { ProductDetail } from "./ProductDetails"

export const ProductList = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [option, setOption] = useState("")
    useEffect(()=> {
        getProducts().then((data) => {setProducts(data)})
        getCategories().then((data) => {setCategories(data)})

    },[])

    useEffect(()=>{
        if (option !== "") {
            getProductsByCategory(option).then((data)=>{setProducts(data)})
        }
        else{
            getProducts().then((data)=>{setProducts(data)})
        }

    },[option])




    return<>
    <select onChange={(event)=> { setOption(event.target.value)}}>
        <option value = "">Select a Category</option>
        {categories.map((category)=> {
            return <option key ={category.id} value={category.id}>{category.name}</option>
        })}
    </select>
   {products.map((product) => {
    return <ProductDetail product={product} key={product.id}/>
   })}
    </>
}