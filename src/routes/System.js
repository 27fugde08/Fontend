import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import UserRedux from '../containers/System/Admin/UserRedux';
import Header from '../containers/Header/Header';

class System extends Component {
    render() {


        const { systemMenuPath, isLoggedIn } = this.props;
        return (
            <React.Fragment>
                {isLoggedIn && <Header />}
                <div className="system-container">
                    <div className="system-list">
                        <Switch>
                            {/* Định tuyến đến trang quản lý người dùng */}
                            <Route path="/system/user-manage" component={UserManage} />

                            {/* Định tuyến đến trang quản lý sản phẩm */}
                            <Route path="/system/user-redux" component={UserRedux} />

                            {/* Nếu đường dẫn URL không khớp với bất kỳ định tuyến nào trên, chuyển hướng đến đường dẫn được xác định trong systemMenuPath */}
                            <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                        </Switch>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
