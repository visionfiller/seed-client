import { Link, useNavigate } from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate()
    return <>
    
        <ul className=" flex row justify-evenly">
            <li className="">
                <Link to="/mycart">My Cart</Link>
            </li>
            <li className="">
               <Link to="/">Home</Link>
            </li>
            <li className="">
                Navigation link
            </li>
            {
                (localStorage.getItem("seed_token") !== null) ?
                    <li className="">
                        <button className=""
                            onClick={() => {
                                localStorage.removeItem("seed_token")
                                navigate('/login')
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="">
                            <Link className="" to="/login">Login</Link>
                        </li>
                        <li className="">
                            <Link className="" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    
    </>
}