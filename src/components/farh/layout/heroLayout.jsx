import React from 'react';
import './heroLayout.css';
import Herobtn from './../hero';

const Herolayout = () => {
    return ( 
        <div className="heroCont">
                <h1>CIB</h1>
                <p>Delivering value to our clients, our community and our shareholders</p>
                <Herobtn />
            </div>
     );
}
 
export default Herolayout;