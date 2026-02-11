import React from 'react';
import NavBar from '../components/jana/NavBar';
import './home.css';
import Hero from '../components/farh/hero';

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
                <Hero />

            </div>
        </div>
            </section>
        </main>
        </>
     );
}
 
export default Home;