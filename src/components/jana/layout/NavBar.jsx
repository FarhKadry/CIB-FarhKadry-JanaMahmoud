import React from 'react';
import './NavBar.css';
import logo from '../../../assets/logo.svg';
import NavItem from '../common/navitem';

const NavBar = () => {
    return ( 
        <>
        <header>
            <img src={logo} alt="CIB logo" />
            <nav>
                <ul>
                    <NavItem />
                    <NavItem />
                    <NavItem />
                    <NavItem />
                    <NavItem />
                    <NavItem />
                    <NavItem />
                    
                </ul>
            </nav>
        </header>
        </>
     );
}
 
export default NavBar;