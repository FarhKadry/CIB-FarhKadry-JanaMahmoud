import React from 'react';
import NavBar from '../components/jana/NavBar';
import './home.css';
import Herobtn from '../components/farh/hero';
import Nav2 from './../components/farh/nav2';
import SmallTitle from '../components/jana/SmallTitle';

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
                <SmallTitle />
            </section>
        </main>
        </>
     );
}
 
export default Home;