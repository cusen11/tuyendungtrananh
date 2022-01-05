import React, { useState } from 'react';
import './Header.css';

import logo from '../../Assets/Images/logo-small.svg';
import logoSVG from '../../Assets/Images/logo.svg';
import fbBlack from '../../Assets/Images/fb-b.png';
import gBlack from '../../Assets/Images/g-b.png';
import inbBlack from '../../Assets/Images/in-b.png';
import ybBlack from '../../Assets/Images/y-b.png';

function Header() { 
    const [ nav, setNav ] = useState('header');
    window.addEventListener('scroll', () => {
        const yOffset = window.pageYOffset;
        if(yOffset >= 90){
            setNav('header fixed')
        } 
        else{
            setNav('header')
        }
    });
    return (
        <div className={nav}>
            <div className="nav">
                <div className="logo">
                    <a href="/" rel="noopener noreferrer"><img src={logo} alt="logo" /></a>
                    <h2>CÔNG TY CP TẬP ĐOÀN TRẦN ANH</h2>
                </div>
                <div className="social">
                    <a href="fb.com" target="_blank" rel="noopener noreferrer"><img src={fbBlack} alt="facebook" /></a>
                    <a href="fb.com" target="_blank" rel="noopener noreferrer"><img src={ybBlack} alt="youtube" /></a>
                    <a href="fb.com" target="_blank" rel="noopener noreferrer"><img src={gBlack} alt="Google plus" /></a>
                    <a href="fb.com" target="_blank" rel="noopener noreferrer"><img src={inbBlack} alt="Instagram" /></a>
                </div>
            </div>
            <div className="hero-banner">
                <div className="box">
                    <div className="img">
                        <img src={logoSVG} alt="logo" />
                    </div>
                    <div className="content">
                        <h1>TRẦN ANH GROUP TUYỂN DỤNG</h1>
                        <p>Do nhu cầu mở rộng thị trường công ty Trần Anh cần tuyển các vị trí như sau:</p>
                        <div className="group">
                            <h4>3 Trưởng Phòng kinh doanh:</h4>
                            <p>
                            + Lương cơ bản từ 8 đến 25 triệu + hoa hồng<br/>
                            + Điều kiện : Có kinh nghiệm 2 năm trở lên, ưu tiên có đội nhóm
                            </p>
                        </div>
                        <div className="group">
                            <h4>30 nhân viên kinh doanh:</h4>
                            <p>
                            + Không cần kinh nghiệm chỉ cần có chí hướng thăng tiến, thích kiếm tiền và sẽ được đào tạo thành nghề<br/>
                            + Lương 7 đến 12 triệu hàng tháng có hỗ trợ tiền maketing + tờ rơi<br/>
                            + Hoa hồng 2 đến 4% tùy từng dự án<br/>
                            + Đảm bảo có thu nhập từ 20 triệu đến 100 triệu / tháng tùy theo năng lực<br/>
                            + Yêu cầu công việc : nhân viên giao tiếp tốt, có laptop, xe máy, tuổi từ 18 đến 35 tuổi<br/>
                            + Làm việc tại: 248 Đường Tân Sơn Nhì, Phường Tân Sơn Nhì, Quận Tân Phú, Tp. HCM + Du lịch 2 lần/năm, đóng bảo hiểm hằng tháng
                            </p>
                        </div>
                    </div>
                    <div className="contact-btn">
                        <a href="tel:+0838008448">Liên hệ ngay</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;