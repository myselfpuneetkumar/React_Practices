import { Link, Outlet } from "react-router";
import './header.css'

export default function Navbar() {
    return <div>
        <div className="header">
            <div>
                <Link className="link"><h2>Logo</h2></Link>
            </div>
            <div>
                <ul>
                    <li><Link to="/user/home" ><h1>Home</h1></Link></li>
                    <li><Link to="/user/about" ><h1>About</h1></Link></li>
                    <li><Link to="/user/login" ><h1>Login</h1></Link></li>
                    <li><Link to="/college" ><h1>College</h1></Link></li>
                    <li><Link to="/users" ><h1>Users</h1></Link></li>
                </ul>
            </div>




        </div>
        <Outlet />
    </div>
}