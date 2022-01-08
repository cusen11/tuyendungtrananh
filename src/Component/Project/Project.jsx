import React from 'react';
import './Project.css';
import BINHDUONG from '../../Assets/Images/binhduong.png';
import HCM from '../../Assets/Images/hcm.png';
import LONGAN from '../../Assets/Images/longan.png';
import BARIA from '../../Assets/Images/baria.png';

function Project() {
    return (
        <div className='projects'>
            <div className="ani-left-right1"></div>
            <div className="ani-left-right2"></div>
            <div className="ani-left-right3"></div>
            <div className="ani-left-right4"></div>
            <div className="ani-left-right5"></div>
            <div className="ani-left-right6"></div>            
            <div className="ani-left-right7"></div>
            <div className="ani-left-right8"></div>
            <div className="content">
                <div className="item">
                    <img src={HCM} alt="bất động sản hồ chí minh" />
                    <div className="text-conent">
                        <h3>BDS HCM</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className="item">
                    <img src={BINHDUONG} alt="bất động sản bình dương" />
                    <div className="text-conent">
                        <h3>BDS BÌNH DƯƠNG</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className="item">
                    <img src={BARIA} alt="bất động sản bìa rịa" />
                    <div className="text-conent">
                        <h3>BDS BÀ RỊA</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className="item">
                    <img src={LONGAN} alt="bất động sản long an" />
                    <div className="text-conent">
                        <h3>BDS LONG AN</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;