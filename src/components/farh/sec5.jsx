import React from 'react';
import './sec5.css';
import s5Logo from '../../assets/logoset02.png';

const Sec5card = () => {
    return ( 
        <div className="sec5Card">
            <img src={s5Logo} alt="logo1" />
            <h4>Bloomberg Gender Equality Index</h4>
        </div>
     );
}
 
export default Sec5card;