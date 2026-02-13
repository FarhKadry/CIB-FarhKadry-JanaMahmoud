import React from 'react';
import sec2img from '../../../assets/card1img.jpg';
import './Sec2Card.css';

const Sec2Card = () => {
    return ( 
        <>
        <div className="sec2card">
            <img src={sec2img} alt="A pic of a man and a woman looking on their laptop while sitting on the floor of their new home" />
            <div className="sec2cardCont">
                <div className="sec2cardInfo">
                    <h3>Buying and making a home</h3>
                    <p>So for all of you travelers, take a vacation  without spending a fortune with these helpful tips and tricks:</p>
                </div>
                <div className="sec2cardCTA">
                    <a href="#home">
                        <p>Read more</p>
                    </a>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Sec2Card;