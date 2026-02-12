import React from 'react';
import './Sec1Card.css';
import sec1icon1 from '../../assets/iconset102.svg'

const Sec1Card = () => {
    return ( 
        <>
        <div className="sec1card">
            <img src={sec1icon1} alt="CIB account logo" />
            <h3>Apply for a New Account</h3>
        </div>
        </>
     );
}
 
export default Sec1Card;