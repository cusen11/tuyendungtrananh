import React from 'react';
import './Media.css';
import IMG01 from '../../Assets/Images/public1.png';
import IMG02 from '../../Assets/Images/public2.png';
import IMG03 from '../../Assets/Images/public3.png';
import IMG04 from '../../Assets/Images/public4.png';
import IMG05 from '../../Assets/Images/public5.png';
import IMG06 from '../../Assets/Images/public6.png';
import IMG07 from '../../Assets/Images/public7.png';
import IMG08 from '../../Assets/Images/public8.png';
import IMG09 from '../../Assets/Images/public9.png';
import IMG0BIG1 from '../../Assets/Images/public01.jpg';
import IMG0BIG2 from '../../Assets/Images/public02.jpg';
import IMG0BIG3 from '../../Assets/Images/public03.jpg';
import IMG0BIG4 from '../../Assets/Images/public04.jpg';
import IMG0BIG5 from '../../Assets/Images/public05.jpg';
import IMG0BIG6 from '../../Assets/Images/public06.jpg';
import IMG0BIG7 from '../../Assets/Images/public07.jpg'; 
import IMG0BIG9 from '../../Assets/Images/public09.jpg';

import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";

function Media() {
    return (
        <div className='media'>
            <h2>HÌNH ẢNH</h2>
            <div className="list-img">
                <LightgalleryProvider >   
                    <LightgalleryItem  style={{padding:"0 5px"}} group="b" src={IMG0BIG1}> 
                        <img className="lazyload"
                            src={IMG01}
                            data-src={IMG0BIG1} alt=""/>
                    </LightgalleryItem> 
                    <LightgalleryItem  style={{padding:"0 5px"}} group="b" src={IMG0BIG2}> 
                        <img className="lazyload"
                            src={IMG02}
                            data-src={IMG0BIG2} alt=""/>
                    </LightgalleryItem> 
                    <LightgalleryItem  style={{padding:"0 5px"}} group="b" src={IMG0BIG3}> 
                        <img className="lazyload"
                            src={IMG03}
                            data-src={IMG0BIG3} alt=""/>
                    </LightgalleryItem> 
                    <LightgalleryItem  style={{padding:"0 5px"}} group="b" src={IMG0BIG4}> 
                        <img className="lazyload"
                            src={IMG04}
                            data-src={IMG0BIG4} alt=""/>
                    </LightgalleryItem> 
                    <LightgalleryItem  style={{padding:"0 5px"}} group="b" src={IMG0BIG5}> 
                        <img className="lazyload"
                            src={IMG05}
                            data-src={IMG0BIG5} alt=""/>
                    </LightgalleryItem> 
                    <LightgalleryItem  style={{padding:"0 5px"}} group="b" src={IMG0BIG6}> 
                        <img className="lazyload"
                            src={IMG06}
                            data-src={IMG0BIG6} alt=""/>
                    </LightgalleryItem> 
                    <LightgalleryItem  style={{padding:"0 5px"}} group="b" src={IMG0BIG7}> 
                        <img className="lazyload"
                            src={IMG07}
                            data-src={IMG0BIG7} alt=""/>
                    </LightgalleryItem> 
                    <LightgalleryItem  style={{padding:"0 5px"}} group="b" src={IMG08}> 
                        <img className="lazyload"
                            src={IMG08}
                            data-src={IMG08} alt=""/>
                    </LightgalleryItem> 
                    <LightgalleryItem  style={{padding:"0 5px"}} group="b" src={IMG0BIG9}> 
                        <img className="lazyload"
                            src={IMG09}
                            data-src={IMG0BIG9} alt=""/>
                    </LightgalleryItem> 
                </LightgalleryProvider>
            </div>
        </div>
    );
}

export default Media;