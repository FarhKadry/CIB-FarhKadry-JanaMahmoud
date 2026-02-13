import React from 'react';
import './nav2.css';
import Nav2item from '../common/nav2item';

const Nav2 = () => {
    return ( 
        <div className="nav2Cont">
            <nav>
                <ul>
                    <Nav2item />
                    <Nav2item />
                    <Nav2item />
                    <Nav2item />
                    <Nav2item />
                </ul>
            </nav>
        </div>
     );
}
 
export default Nav2;