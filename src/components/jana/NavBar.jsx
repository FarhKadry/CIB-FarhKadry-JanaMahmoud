import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo.svg';

const NavBar = () => {
    return ( 
        <>
        <header>
            <img src={logo} alt="CIB logo" />
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <p>About Us</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <p>Investor Relations</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <p>Responsible Banking</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <p>Newsroom</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <p>Learning Center</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <p>Careers</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <p>Others</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        </>
     );
}
 
export default NavBar;