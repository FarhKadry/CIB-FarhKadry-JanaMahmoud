import React from 'react';
import NavBar from '../components/jana/layout/NavBar';
import './home.css';
// FARH1
import Herobtn from '../components/farh/hero';
import Nav2 from './../components/farh/nav2';
// JANA2
import SmallTitle from '../components/jana/common/SmallTitle';
import Heading from '../components/jana/common/Heading';
import Sec1Card from '../components/jana/common/Sec1Card';
import Sec2Card from '../components/jana/common/Sec2Card';
import Sec3Card from '../components/jana/common/Sec3Card';
import Footer from '../components/jana/layout/Footer';
import Copyrights from '../components/jana/layout/Copyrights';
// FARH2
import Sec5card from '../components/farh/sec5';

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
            <section className="secCont secStyle">
                <Heading />
                <div className="secCardsCol">
                    <Sec3Card />
                    <Sec3Card />
                    <Sec3Card />
                </div>
                <Herobtn />
            </section>
            <section className='secCont sec4'>
                <div className="sec4Cont">
                    <div className="sec4Box">
                        <div className="sec4BoxCont">
                            <h3>CIB on an international scale</h3>
                            <p>Learn more about CIB's presence outside of Egypt</p>
                        </div>
                        <Herobtn />
                    </div>
                </div>
            </section>
            {/* SECTION5 */}
            <section className="secCont secStyle">
                <div className="titleCont">
                    <SmallTitle />
                    <Heading />
                </div>
                <div className="secCards secCards2">
                    <Sec5card />
                    <Sec5card />
                    <Sec5card />
                </div>
                <Herobtn />

            </section>
            <Footer />
            <Copyrights />
        </main>
        </>
     );
}
 
export default Home;