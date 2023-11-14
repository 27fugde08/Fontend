import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Speciality.scss';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import { getAllSpecialty } from '../../../services/userService';



class Speciality extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSpecialty: []
        }
    }
    async componentDidMount() {
        let res = await getAllSpecialty();
        console.log('check res', res)
        if (res && res.errCode === 0) {
            this.setState({
                dataSpecialty: res.data ? res.data : []
            })
        }
    }
    render() {
        // Chuyển hướng người dùng đến đường dẫn đã xác định
        let { dataSpecialty } = this.state;
        return (
            <div className='section-share section-speciality'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'><FormattedMessage id="homepage.specialty-popular" /></span>
                        <button className='btn-section'><FormattedMessage id="homepage.more-infor" /></button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            {dataSpecialty && dataSpecialty.length > 0
                                && dataSpecialty.map((item, index) => {
                                    return (
                                        <div className='section-customize specialty-child' key={index}>
                                            <div className='bg-image section-speciality'
                                                style={{ backgroundImage: `url(${item.image})` }}
                                            />
                                            <div className='specialty-name'>{item.name}</div>
                                        </div>
                                    )
                                })}


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
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Speciality);
