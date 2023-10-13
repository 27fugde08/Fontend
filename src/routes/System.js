import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import ProductManage from '../containers/System/ProductManage';
import RegisterPackageGroupOrAcc from '../containers/System/RegisterPackageGroupOrAcc';

class System extends Component {
    render() {
        const { systemMenuPath } = this.props;
        return (
            <div className="system-container">
                <div className="system-list">
                    <Switch>
                        {/* Định tuyến đến trang quản lý người dùng */}
                        <Route path="/system/user-manage" component={UserManage} />

                        {/* Định tuyến đến trang quản lý sản phẩm */}
                        <Route path="/system/product-manage" component={ProductManage} />

                        {/* Định tuyến đến trang đăng ký nhóm gói hoặc tài khoản */}
                        <Route path="/system/register-package-group-or-account" component={RegisterPackageGroupOrAcc} />

                        {/* Nếu đường dẫn URL không khớp với bất kỳ định tuyến nào trên, chuyển hướng đến đường dẫn được xác định trong systemMenuPath */}
                        <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
