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
                        <h4>Xinh Lê</h4>
                        <p>PH Kinh Doanh</p>
                    </div>
                </div> 
                <div className="box-img">
                    <img src={nv1} alt="" />
                    <div className="content">
                        <h4>Lại Thị Hà</h4>
                        <p>Leader</p>
                    </div>
                </div> 
                <div className="box-img">
                    <img src={nv2} alt="" />
                    <div className="content">
                        <h4>Trần Thị Thu</h4>
                        <p>Leader</p>
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
                        <h4>Lâm Dương Quí</h4>
                        <p>TP Kinh Doanh</p>
                    </div>
                </div>  
                <div className="box-img">
                    <img src={nv7} alt="" />
                    <div className="content">
                        <h4>Võ Ngọc Thủy</h4>
                        <p>TP Kinh Doanh</p>
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
                    <h3>Mục đích hướng tới:</h3>
                    <p>
                    - Nghề BĐS là một nghề cao quý và thu nhập không giới hạn, 1 tháng bạn có thể nhu nhập từ 20 triệu đến 50 triệu hay 200 triệu đến 300 triệu là chuyện bình thường, chỉ cần bạn cố gắng, đam mê và yêu nghề BĐS.
                    <br/>
                    - Rất nhiều đại gia BĐS, giám đốc công ty hay một tập đoàn BĐS họ cũng từng là một nhân viên sale BĐS mà ra, vậy tại sao chúng ta không nghĩ và cố gắng để thành công như họ ?
                    <br/>
                    - Công ty tôi sẽ là bước đệm và tạo mọi điều kiện cho ước mơ của bạn trở thành hiện thực…
                    </p>
                </div>
            </div>
        </div>
      );
}

export default Ourteam;