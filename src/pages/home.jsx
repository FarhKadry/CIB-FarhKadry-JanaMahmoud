import React from 'react';
import NavBar from '../components/jana/NavBar';
import './home.css';
import Herobtn from '../components/farh/hero';
import Nav2 from './../components/farh/nav2';
import SmallTitle from '../components/jana/SmallTitle';
import Heading from '../components/jana/Heading';
import Sec1Card from '../components/jana/Sec1Card';
import Sec2Card from '../components/jana/Sec2Card';

const Home = () => {
    return ( 
        <>
        <NavBar />
        {/* MAINCONTSTART */}
        <main>
            <section>
        <div className="secCont">
            <div className="heroCont">
                <h1>CIB</h1>
                <p>Delivering value to our clients, our community and our shareholders</p>
                <Herobtn />
            </div>
        </div>
            </section>
            <Nav2 />
            <section className="secCont secStyle">
                <div className="titleCont">
                    <SmallTitle />
                    <Heading />
                </div>
                <div className="secCards">
                    <Sec1Card />
                    <Sec1Card />
                    <Sec1Card />
                </div>
            </section>
            <section className='secCont secStyle secWhiteBg'>
                <div className="titleCont">
                    <Heading />
                    <h2>Learn more about banking and your finances</h2>
                </div>
                <div className="secCards">
                    <Sec2Card />
                    <Sec2Card />
                    <Sec2Card />
                </div>
                <Herobtn />
            </section>
        </main>
        </>
     );
}
 
export default Home;