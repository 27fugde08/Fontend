import React, { Component } from 'react';
import { connect } from 'react-redux';


class ManageSchedule extends Component {


    render() {
        // console.log('check child open modal', this.props.isOpen)
        return (
            <React.Fragment>
                <div>manage schedule</div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        // Map các thuộc tính từ store vào props của component (nếu cần)
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // Map các action vào props của component (nếu cần)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
