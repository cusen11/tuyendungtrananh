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
            <h2>DỰ ÁN ĐANG BÁN</h2>
            <div className="content">
                <div className="item">
                    <img src={HCM} alt="bất động sản hồ chí minh" />
                    <div className="text-conent">
                        <h3>BDS HCM</h3>
                        <p>Có nền kinh tế phát triển nhanh và mạnh nhất nước, bất động sản Tp.HCM được xem là một trong những thị trường tiềm năng và thu hút đầu tư cao nhất tại khu vực Đông Nam Á. Trong đó, các quận trung tâm 1 và 3 luôn được xem là các vị trí vàng để đầu tư, kinh doanh.</p>
                    </div>
                </div>
                <div className="item">
                    <img src={BINHDUONG} alt="bất động sản bình dương" />
                    <div className="text-conent">
                        <h3>BDS BÌNH DƯƠNG</h3>
                        <p>Từ trước đến nay, thị trường bất động sản Bình Dương được biết đến là thị trường giá thấp chủ yếu dành cho các nhà đầu tư nhỏ lẻ, ít vốn.</p>
                    </div>
                </div>
                <div className="item">
                    <img src={BARIA} alt="bất động sản bìa rịa" />
                    <div className="text-conent">
                        <h3>BDS BÀ RỊA</h3>
                        <p>Với lợi thế bãi biển tuyệt đẹp, hạ tầng hoàn thiện, giá cả hợp lý BDS Bà Rịa đang là điểm sáng của BĐS khu vực phía Nam.</p>
                    </div>
                </div>
                <div className="item">
                    <img src={LONGAN} alt="bất động sản long an" />
                    <div className="text-conent">
                        <h3>BDS LONG AN</h3>
                        <p>Bên cạnh hạ tầng, một loạt dự án đầu tư phát triển công nghiệp, dịch vụ chuẩn bị triển khai tại tỉnh Long An đang hứa hẹn kích hoạt một làn sóng đầu tư mới vào lĩnh vực bất động sản.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;