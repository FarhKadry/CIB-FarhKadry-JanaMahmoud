import React from 'react';
import footerdeco1 from '../../../assets/footerdeco2.png';
import footerdeco2 from '../../../assets/footerdeco.svg';
import logo from '../../../assets/logo.svg';
import './Footer.css';
import FooterItem from '../common/FooterItem';
import store1 from '../../../assets/store01.svg';
import store2 from '../../../assets/store02.svg';
import facebook from '../../../assets/socials01.svg';
import instagram from '../../../assets/socials02.svg';
import linkedin from '../../../assets/socials03.svg';
import youtube from '../../../assets/socials04.svg';
import twitter from '../../../assets/socials05.svg';
import whatsapp from '../../../assets/socials06.svg';



const Footer = () => {
    return ( 
        <>
        <footer>
            <div className="footerbg">
                <div className="footerBgTop">
                    <img src={footerdeco1} alt="decor" />
                </div>
            <div className="footerCont">
                <div className="footerContTop">
                    <img src={logo} alt="CIB logo" />
                    <div className="footeritems">
                        <div className="footerItemsCol">
                            <FooterItem />
                            <FooterItem />
                            <FooterItem />
                            <FooterItem />
                        </div>
                        <div className="footerItemsCol">
                            <FooterItem />
                            <FooterItem />
                            <FooterItem />
                            <FooterItem />
                        </div>
                        <div className="footerItemsCol">
                            <FooterItem />
                            <FooterItem />
                            <FooterItem />
                            <FooterItem />
                        </div>
                    </div>
                    <div className="footerApps">
                        <a className='storeStyle' href="#home">
                            <img src={store1} alt="get it on google play icon" />
                        </a>
                        <a className='storeStyle' href="#home">
                            <img src={store2} alt="download on app store icon" />
                        </a>
                    </div>
                </div>
                <div className="footerContBottom">
                    <div className="footerItemsBottom">
                        <FooterItem />
                        <FooterItem />
                        <FooterItem />
                        <FooterItem />
                    </div>
                    <div className="footerSocials">
                        <a href="#home">
                            <img src={facebook} alt="facebook icon" />
                        </a>
                        <a href="#home">
                            <img src={instagram} alt="instagram icon" />
                        </a>
                        <a href="#home">
                            <img src={linkedin} alt="linkedin icon" />
                        </a>
                        <a href="#home">
                            <img src={youtube} alt="youtube icon" />
                        </a>
                        <a href="#home">
                            <img src={twitter} alt="twitter icon" />
                        </a>
                        <a href="#home">
                            <img src={whatsapp} alt="whatsapp icon" />
                        </a>
                    </div>
                </div>
            </div>
                <div className="footerBgBottom">
                    <img src={footerdeco2} alt="decor" />
                </div>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;