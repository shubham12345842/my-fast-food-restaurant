import React, {useState} from "react";
import './Navbar.css';
import { FaUser, FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () =>{



    const[isMobile , setIsmobile] = useState(false);

    return(
        <nav className='navbar'>
            <h1 className='navbar-logo'>Food Palace</h1>
            <div className={isMobile ? "nav-links-mobile" : "nav-links"}>
                <a href="Home">Home</a>
                <a href="Menu">Menu</a>
                <a href="About">About</a>
                <a href="Book-Table">Book Table</a>
                <FaUser className='nav-icon'></FaUser>
                <FaShoppingCart className="nav-icon"></FaShoppingCart>
                <FaSearch className="nav-icon"></FaSearch>
                <button className="order-button">Order Online</button>
            </div>

            <div className="mobile-menu-icon" onClick={()=>setIsmobile(!isMobile)}>

                {isMobile ? <FaTimes/> : <FaBars/>}
            </div>
        </nav>



    )
}

export default Navbar;
