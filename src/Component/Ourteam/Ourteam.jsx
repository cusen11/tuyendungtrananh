import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import './Ourteam.css';

import Person from '../../Assets/Images/person.png';

function Ourteam() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        centerPadding:'100',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <div className="slider"> 
            <h2>ĐỘI NGŨ TRẦN ANH GROUP</h2>
            <Slider {...settings}>
                <div className="box-img">
                    <img src={Person} alt="" />
                    <div className="content">
                        <h4>Nguyễn Văn A</h4>
                        <p>Giám đốc tài chính</p>
                    </div>
                </div> 
                <div className="box-img">
                    <img src={Person} alt="" />
                    <div className="content">
                        <h4>Nguyễn Văn A</h4>
                        <p>Giám đốc tài chính</p>
                    </div>
                </div> 
                <div className="box-img">
                    <img src={Person} alt="" />
                    <div className="content">
                        <h4>Nguyễn Văn A</h4>
                        <p>Giám đốc tài chính</p>
                    </div>
                </div> 
                <div className="box-img">
                    <img src={Person} alt="" />
                    <div className="content">
                        <h4>Nguyễn Văn A</h4>
                        <p>Giám đốc tài chính</p>
                    </div>
                </div> 
                <div className="box-img">
                    <img src={Person} alt="" />
                    <div className="content">
                        <h4>Nguyễn Văn A</h4>
                        <p>Giám đốc tài chính</p>
                    </div>
                </div> 
                <div className="box-img">
                    <img src={Person} alt="" />
                    <div className="content">
                        <h4>Nguyễn Văn A</h4>
                        <p>Giám đốc tài chính</p>
                    </div>
                </div> 
                <div className="box-img">
                    <img src={Person} alt="" />
                    <div className="content">
                        <h4>Nguyễn Văn A</h4>
                        <p>Giám đốc tài chính</p>
                    </div>
                </div> 
            </Slider>
        </div>
      );
}

export default Ourteam;