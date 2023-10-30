import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Speciality from './Section/Speciality';
import MedicalFacility from './Section/MedicalFacility';
import OutStandingDoctor from './Section/OutStandingDoctor';
import HandBook from './Section/HandBook';
import About from './Section/About';
import HomeFooter from './HomeFooter';
import './HomePage.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class HomePage extends Component {

    render() {
        // Chuyển hướng người dùng đến đường dẫn đã xác định
        let settings = {
            dots: false,
            infinite: true,
            speed: 50,
            slidesToShow: 4,
            slidesToScroll: 1,
        }
        return (
            <div>
                < HomeHeader />
                <Speciality settings={settings} />
                <MedicalFacility settings={settings} />
                <OutStandingDoctor settings={settings} />
                <HandBook settings={settings} />
                <About />
                <HomeFooter />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);