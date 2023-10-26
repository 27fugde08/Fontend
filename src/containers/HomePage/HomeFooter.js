import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


class HomeFooter extends Component {
    render() {
        // Chuyển hướng người dùng đến đường dẫn đã xác định

        return (
            <div className='home-footer'>
                <p>&copy; 2023 Nguyễn Trọng Duy More information, please visit my youtube Channel.
                    <a target="_blank" href='https://www.youtube.com/channel/UCW4MJiXMYC1bo0pBs5H5l-g'>
                        &#8594; Click here &#8592;
                    </a>
                </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
