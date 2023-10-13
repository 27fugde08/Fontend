import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

class RegisterPackageGroupOrAcc extends Component {

    constructor(props) {
        super(props);
        // Khởi tạo trạng thái hoặc các giá trị ban đầu (nếu cần)
    }

    render() {
        return (
            <div className="text-center">
                register package group or account
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // Map các thuộc tính từ store vào props của component (nếu cần)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // Map các action vào props của component (nếu cần)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPackageGroupOrAcc);
