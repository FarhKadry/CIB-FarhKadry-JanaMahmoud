import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo.svg';

const NavBar = () => {
    return ( 
        <>
        <header>
            <img src={logo} alt="CIB logo" />
            <div className="navbar">
                <p>About Us</p>
                <p>Investor Relations</p>
                <p>Responsible Banking</p>
                <p>Newsroom</p>
                <p>Learning Center</p>
                <p>Careers</p>
                <p>Others</p>
            </div>
        </header>
        </>
     );
}
 
export default NavBar;