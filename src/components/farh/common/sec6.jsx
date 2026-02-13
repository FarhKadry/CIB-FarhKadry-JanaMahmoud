import React from 'react';
import './sec6.css';
import sec6Img from '../../../assets/iconset01.svg'
const Sec6Card = () => {
    return ( 
        <div className="sec6Card">
            <div>
            <img src={sec6Img} alt="icon1" />
            <h4>Best Private Bank in Egypt</h4>
            </div>
            <p>Global Finance - 2023</p>
        </div>
     );
}
 
export default Sec6Card;