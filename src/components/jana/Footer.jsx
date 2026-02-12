import React from 'react';
import footerdeco1 from '../../assets/footerdeco2.png';
import footerdeco2 from '../../assets/footerdeco.svg';
import logo from '../../assets/logo.svg';
import './Footer.css';
import FooterItem from './FooterItem';

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