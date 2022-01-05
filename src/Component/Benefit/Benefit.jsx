import React from 'react';
import './Benefit.css';

import imgBG from '../../Assets/Images/img01.png'

function Benefit() {
    return (
        <div className='benefit'>
            <div className="box">
                <div className="content">
                    <h2>LỢI ÍCH </h2>
                    <ul>
                        <li> Được đào tạo bài bản trong 2 tuầnhọc việc đến khi có nghề.</li>
                        <li> Hoa hồng được chia ngay trong vòng 24 giờ kể từ khi vụ chốt xảy ra.</li>
                        <li> Bảo hiểm lên đến 10.000.000 VNĐ khi hợp tác.</li>
                        <li> Áp dụng khoa học và công nghệ vào trong công việc.</li>
                        <li> Tự chủ thời gian, tự chủ công việc</li>
                        <li> Làm việc trong môi trường, tiếp xúc với những người nhiều tiền, 
                            tài giỏi trong nhiều lĩnh vực khác nhau.</li>
                    </ul>
                </div>
                <img src={imgBG} alt="" />
            </div>
        </div>
    );
}

export default Benefit;