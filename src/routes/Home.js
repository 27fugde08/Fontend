import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {

    render() {
        const { isLoggedIn } = this.props;
        // Xác định đường dẫn chuyển hướng dựa trên trạng thái đăng nhập của người dùng
        let linkToRedirect = isLoggedIn ? '/system/user-manage' : '/login';

        // Chuyển hướng người dùng đến đường dẫn đã xác định
        return (
            <Redirect to={linkToRedirect} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
