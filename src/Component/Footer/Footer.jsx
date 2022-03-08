import React from 'react';
import './Footer.css';

import fbWhite from '../../Assets/Images/fb-w.png';
import gWhite from '../../Assets/Images/g-w.png'; 
import ybWhite from '../../Assets/Images/y-w.png';
import IMGZALO from '../../Assets/Images/zalo.png';
import IMGPhone from '../../Assets/Images/phone-w.png';


function Footer() {
    const srcMap = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.172666107306!2d106.62902551480106!3d10.79808409230685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752955d991e0cf%3A0x54a3bfdcec704a67!2zMjQ4IMSQxrDhu51uZyBUw6JuIFPGoW4gTmjDrCwgVMOibiBTxqFuIE5ow6wsIFTDom4gUGjDuiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1641743223777!5m2!1svi!2s'
    return (
        <div className='footer'>
            <div className="zalo-phone">
                <a href="https://zalo.me/0932645558" target="_blank" rel="noopener noreferrer"><img src={IMGZALO} alt="Zalo" /></a>
                <a href="tel:0932645558" target="_blank" rel="noopener noreferrer"><img src={IMGPhone} alt="Phone tran anh group" /></a>
            </div>
            <div className="wrapper">
                <div className="contacts">
                    <h4>LIÊN HỆ</h4>
                    <div className="address">
                        <h5>Địa chỉ:</h5>
                        <p>248 Đường Tân Sơn Nhì, Tân Sơn Nhì, Tân Phú, Thành phố Hồ Chí Minh</p>
                    </div>
                    <div className="contact">
                        <div className="phone">
                            <h5>Điện thoại:</h5>
                            <p>0909.027.787</p>
                            <p>0975.027.787</p>
                        </div>
                        <div className="mail">
                            <h5>Mail:</h5>
                            <p>ceo.248tsn@trananhgroup.com</p>
                            <p>sangiaodich.248tsn@gmail.com</p>
                        </div>
                    </div>
                    <div className="social">
                        <a href="https://www.facebook.com/Tuy%E1%BB%83n-d%E1%BB%A5ng-nh%C3%A2n-s%E1%BB%B1-Tr%E1%BA%A7n-Anh-110411524861806/?ref=pages_you_manage" target="_blank" rel="noopener noreferrer"><img src={fbWhite} alt="facebook" /></a>
                        <a href="https://www.youtube.com/channel/UCWILrKqksszm2knpaCt6p2w" target="_blank" rel="noopener noreferrer"><img src={ybWhite} alt="youtube" /></a>
                        <a href="mailto:ceo.248tsn@trananhgroup.com" target="_blank" rel="noopener noreferrer"><img src={gWhite} alt="Google plus" /></a> 
                    </div>
                </div>
                <div className="maps">
                    <h4>MAPS</h4>
                    <iframe title='tran anh group' style={{border:'0'}} src={srcMap} width={600} height={450} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Footer;