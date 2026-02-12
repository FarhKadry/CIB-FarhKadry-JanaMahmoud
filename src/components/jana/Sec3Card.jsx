import React from 'react';
import './Sec3Card.css';
import sec3img from '../../assets/card2img.jpg';

const Sec3Card = () => {
    return ( 
        <>
        <div className="sec3card">
            <img src={sec3img} alt="a pic of the CIB bank building" />
            <div className="sec2cardInfo">
                <p>08/10/2025 - Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion</p>
                <h3>Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion</h3>
                <p>CIB, Egypt's leading and largest private sector bank, has successfully partnered with CI Capital to complete the seventh issuance for Halan Consumer Finance, valued at EGP 3.4 billion.</p>
            </div>
        </div>
        </>
     );
}
 
export default Sec3Card;