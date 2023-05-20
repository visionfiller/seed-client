import { Link, useNavigate } from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate()
    return <>
    
        <ul className="navbar">
            <li className="navbar__item">
                <Link to="/mycart">My Cart</Link>
            </li>
            <li className="navbar__item">
               <Link to="/">Home</Link>
            </li>
            <li className="navbar__item">
                Navigation link
            </li>
            {
                (localStorage.getItem("seed_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("seed_token")
                                navigate('/login')
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    
    </>
}