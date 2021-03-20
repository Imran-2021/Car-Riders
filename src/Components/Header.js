import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
const Header = () => {
    const [loggedUser,setLoggedInUser]=useContext(UserContext);
    const profile = 'user profile'
    return (
        <div>
        <ul class="container nav justify-content-end">
            <li class="nav-item">
                <Link className="nav-link active" to="/"> Home</Link>
            </li>
            <li class="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li class="nav-item">
                <Link className="nav-link"  to="/login">Log In</Link>
            </li>
            <li class="nav-item">
                <Link className="nav-link" onClick={()=>setLoggedInUser({})} to="/contact">Log Out</Link>
            </li>
            
            <li class="nav-item">
                <Link className="nav-link"  to="/profile">{loggedUser.name|| loggedUser.displayName}</Link>
            </li> 
            </ul>
      </div>
    )
};

export default Header;