import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ManageSchedule from '../containers/System/Doctor/ManageSchedule';
import Header from '../containers/Header/Header';

class Doctor extends Component {

    render() {
        const { isLoggedIn } = this.props;

        return (
            <React.Fragment>
                {isLoggedIn && <Header />}
                <div className='system-container'>
                    <div className='system-list'>
                        <Switch>
                            <Route path="/doctor/manage-schedule" component={ManageSchedule} />

                        </Switch>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

// mapStateToProps kết nối trạng thái đăng nhập từ Redux store
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

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
