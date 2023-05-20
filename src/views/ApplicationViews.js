import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/login"
import { Register } from "../components/auth/register"
import { MyCart } from "../components/cart/MyCart"
import { ProductList } from "../components/product/ProductList"
import { Authorized } from "./Authorized"

export const AppViews = () => {
    return <>
     <Routes>
           
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/mycart" element={<MyCart />}/>
               
            </Route>
        </Routes>
    </>
}