import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
class OutStandingDoctor extends Component {

    render() {
        // Chuyển hướng người dùng đến đường dẫn đã xác định
        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Bác sĩ nổi bật tuần qua</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility' />
                                <div>Bệnh viện Chợ Rẫy 1</div>
                            </div>

                        </Slider>
                    </div>

                </div>
            </div>
        );
    }

}

// mapStateToProps kết nối trạng thái đăng nhập từ Redux store
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
