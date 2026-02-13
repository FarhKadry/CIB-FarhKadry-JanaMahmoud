import React from 'react';
import '../layout/NavBar.css';
import '../common/navitem.css';

const NavItem = () => {
    return ( 
        <li>
            <a className='navitem' href="#home">
                <p>About us</p>
            </a>
        </li>
     );
}
 
export default NavItem;