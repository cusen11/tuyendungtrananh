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
            <div className="wedo">
                <div className="box">
                    <h3>Chúng ta sẽ làm gì?</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="box">
                    <h3>Mục đích hướng tới</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
      );
}

export default Ourteam;