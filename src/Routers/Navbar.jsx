import { Link, NavLink, Outlet } from "react-router";
// import './header.css'

export default function Navbar() {
    return <div>
        <div className="header">
            <div>
                <Link className="link"><h2>Logo</h2></Link>
            </div>
            <div>
                <ul>
                    <li><NavLink to="/user/about" ><h1>About</h1></NavLink></li>
                    <li><NavLink to="/user/home" ><h1>Home</h1></NavLink></li>
                    <li><NavLink to="/user/login" ><h1>Login</h1></NavLink></li>
                    <li><NavLink to="/college" ><h1>College</h1></NavLink></li>
                    <li><NavLink to="/users" ><h1>Users</h1></NavLink></li>
                    
                </ul>
            </div>




        </div>
        <Outlet />
    </div>
}