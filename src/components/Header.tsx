import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <div className="navigation bg-blue-600 text-white">
                <ul>
                    <li>
                        <NavLink to="/" className="text-white hover:text-green-400">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Login" className="text-white hover:text-green-400">Login</NavLink> 
                    </li>
                    <li>
                        <NavLink to="/Register" className="text-white hover:text-green-400">Register</NavLink> 
                    </li>
                    <li>
                        <NavLink to="/profile/user" className="text-white hover:text-green-400">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings" className="text-white hover:text-green-400">Settings</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
    

    
}

export default Header;