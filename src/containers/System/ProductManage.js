import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

class ProductManage extends Component {

    state = {

    }

    componentDidMount() {
        // Thực hiện các thao tác sau khi component đã được mount
    }

    render() {
        return (
            <div className="text-center">Manage products</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
