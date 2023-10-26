import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';


class About extends Component {
    render() {
        // Chuyển hướng người dùng đến đường dẫn đã xác định

        return (
            <div className='section-share section-about'>
                <div className='section-container'>
                    <div className='section-about-header'>
                        Truyền thông nói về Berrydayisawaking
                    </div>
                    <div className='section-about-content'>
                        <div className='content-left'>
                            <iframe width="100%" height="400px"
                                src="https://www.youtube.com/embed/LHCob76kigA"
                                title="Lukas Graham - 7 Years [Official Music Video]"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                        <div className='content-right'>
                            <p>
                                One day, you’ll be just a memory, so do your best to be a beautiful memory!!!
                            </p>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
