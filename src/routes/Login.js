import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../store/actions";
import { KeyCodeUtils, LanguageUtils } from "../utils";

import userIcon from '../../src/assets/images/user.svg';
import passIcon from '../../src/assets/images/pass.svg';
import './Login.scss';
import { FormattedMessage } from 'react-intl';

import adminService from '../services/adminService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.btnLogin = React.createRef();
    }

    // Trạng thái ban đầu của trang đăng nhập
    initialState = {
        username: '',
        password: '',
        loginError: ''
    }

    state = {
        ...this.initialState
    };

    // Xóa trạng thái đăng nhập sau khi đăng xuất hoặc thành công
    refresh = () => {
        this.setState({
            ...this.initialState
        })
    }

    // Xử lý thay đổi tên người dùng
    onUsernameChange = (e) => {
        this.setState({ username: e.target.value })
    }

    // Xử lý thay đổi mật khẩu
    onPasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    // Chuyển hướng đến trang quản lý người dùng sau khi đăng nhập thành công
    redirectToSystemPage = () => {
        const { navigate } = this.props;
        const redirectPath = '/system/user-manage';
        navigate(`${redirectPath}`);
    }

    // Xử lý đăng nhập
    processLogin = () => {
        const { username, password } = this.state;

        const { adminLoginSuccess, adminLoginFail } = this.props;

        // Tạo thông tin đăng nhập tạm thời để giả lập đăng nhập thành công
        let loginBody = {
            username: 'admin',
            password: '123456'
        }

        // Giả lập đăng nhập thành công và lưu thông tin người dùng vào Redux store
        let adminInfo = {
            "tlid": "0",
            "tlfullname": "Administrator",
            "custype": "A",
            "accessToken": "eyJhbGciOiJIU"
        }
        adminLoginSuccess(adminInfo);

        // Xóa trạng thái đăng nhập và chuyển hướng đến trang quản lý người dùng
        this.refresh();
        this.redirectToSystemPage();

        // Thực hiện thực tế: Gửi yêu cầu đăng nhập đến máy chủ
        try {
            adminService.login(loginBody)
        } catch (e) {
            console.log('error login : ', e)
        }
    }

    // Xử lý sự kiện khi người dùng nhấn phím Enter
    handlerKeyDown = (event) => {
        const keyCode = event.which || event.keyCode;
        if (keyCode === KeyCodeUtils.ENTER) {
            event.preventDefault();
            if (!this.btnLogin.current || this.btnLogin.current.disabled) return;
            this.btnLogin.current.click();
        }
    };

    // Đăng ký lắng nghe sự kiện nhấn phím khi trang được tạo
    componentDidMount() {
        document.addEventListener('keydown', this.handlerKeyDown);
    }

    // Hủy đăng ký lắng nghe sự kiện nhấn phím khi trang bị hủy
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handlerKeyDown);
        // Fix lỗi "Can't perform a React state update on an unmounted component"
        this.setState = (state, callback) => {
            return;
        };
    }

    render() {
        const { username, password, loginError } = this.state;
        const { lang } = this.props;

        return (
            <div className="login-wrapper">
                <div className="login-container">
                    <div className="form_login">
                        <h2 className="title">
                            <FormattedMessage id="login.login" />
                        </h2>
                        <div className="form-group icon-true">
                            <img className="icon" src={userIcon} alt="this" />
                            <input
                                placeholder={LanguageUtils.getMessageByKey("login.username", lang)}
                                id="username"
                                name="username"
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={this.onUsernameChange}
                            />
                        </div>

                        <div id="phone-input-container" className="form-group icon-true">
                            <img className="icon" src={passIcon} alt="this" />
                            <input
                                placeholder={LanguageUtils.getMessageByKey("login.password", lang)}
                                id="password"
                                name="password"
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={this.onPasswordChange}
                            />
                        </div>

                        {loginError !== '' && (
                            <div className='login-error'>
                                <span className='login-error-message'>{loginError}</span>
                            </div>
                        )}

                        <div className="form-group login">
                            <input
                                ref={this.btnLogin}
                                id="btnLogin"
                                type="submit"
                                className="btn"
                                value={LanguageUtils.getMessageByKey("login.login", lang)}
                                onClick={this.processLogin}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// mapStateToProps kết nối trạng thái ngôn ngữ từ Redux store
const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
