import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import './Ourteam.css';

import nv from '../../Assets/Images/nv.png'; 
import nv1 from '../../Assets/Images/nv1.png'; 
import nv2 from '../../Assets/Images/nv2.png'; 
import nv3 from '../../Assets/Images/nv3.png'; 
import nv4 from '../../Assets/Images/nv4.png'; 
import nv5 from '../../Assets/Images/nv5.png'; 
import nv6 from '../../Assets/Images/nv6.png'; 
import nv7 from '../../Assets/Images/nv7.png';  
import nv8 from '../../Assets/Images/nv8.png';  

function Ourteam() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        autoplay: true, 
        autoplaySpeed: 5000,
        cssEase: "linear",
        centerPadding:'100',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true,
                arrows:false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3,
                arrows:false,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                arrows:false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows:false,
              }
            }
          ]
      };
    return (
        <div className="slider"> 
            <h2>ĐỘI NGŨ TRẦN ANH GROUP</h2>
            <Slider {...settings}>
                <div className="box-img">
                    <img src={nv} alt="" />
                    <div className="content">
                        <h4>Lê Thị Xinh</h4>
                        <p>PH Kinh Doanh</p>
                    </div>
                </div> 
                <div className="box-img">
                    <img src={nv1} alt="" />
                    <div className="content">
                        <h4>Hồ Xuân Thủy</h4>
                        <p>TP Kinh Doanh</p>
                    </div>
                </div> 
                <div className="box-img">
                    <img src={nv2} alt="" />
                    <div className="content">
                        <h4>Lê Đình Chính</h4>
                        <p>Phó Giám Đốc</p>
                    </div>
                </div> 
                <div className="box-img">
                    <img src={nv3} alt="" />
                    <div className="content">
                        <h4>Lại Đình Cương</h4>
                        <p>Giám Đốc</p>
                    </div>
                </div> 
                <div className="box-img">
                    <img src={nv4} alt="" />
                    <div className="content">
                        <h4>Bùi Thị Hòa</h4>
                        <p>PH Kinh Doanh</p>
                    </div>
                </div> 
                <div className="box-img">
                    <img src={nv5} alt="" />
                    <div className="content">
                        <h4>Hồ Quyết Thắng</h4>
                        <p>Leader</p>
                    </div>
                </div> 
                <div className="box-img">
                    <img src={nv6} alt="" />
                    <div className="content">
                        <h4>Hoàng T.Ngọc Ánh</h4>
                        <p>TP Kinh Doanh</p>
                    </div>
                </div> 
                <div className="box-img">
                    <img src={nv7} alt="" />
                    <div className="content">
                        <h4>Nguyễn T.Kim Chi</h4>
                        <p>Sub Leader</p>
                    </div>
                </div> 
                <div className="box-img">
                    <img src={nv8} alt="" />
                    <div className="content">
                        <h4>Nguyễn T.Dương</h4>
                        <p>Phó Giám Đốc</p>
                    </div>
                </div> 
            </Slider> 
            <div className="wedo">
                <div className="box">
                    <h3>Chúng ta sẽ làm gì?</h3>
                    <p>Sales bất động sản (hay còn gọi là nhân viên kinh doanh bất động sản, nhà môi giới, chuyên viên tư vấn) là bên trung gian giữa người mua và người bán thông qua các hoạt động tư vấn, quảng cáo, tiếp thị để kết nối người bán và người muốn mua nhà và được hưởng một khoản phí (hoa hồng) khi giao dịch diễn ra thành công</p>
                </div>
                <div className="box">
                    <h3>Mục đích hướng tới</h3>
                    <p>Kiến thức chuyên môn ngành kinh doanh thương mại,đam mê trong việc kinh doanh làm giàu, am hiểu trong kiến thức về thổ cư, khả năng giao tiếp thuyết phục tốt, có sự kiên trì và khả năng chịu được áp lực về doanh số, luôn hướng đến sẽ trở thành một chuyên gia bất động sản trong tương lai.</p>
                </div>
            </div>
        </div>
      );
}

export default Ourteam;