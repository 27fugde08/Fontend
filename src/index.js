import React from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';
import './styles/styles.scss';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import IntlProviderWrapper from "./hoc/IntlProviderWrapper";


import { Provider } from 'react-redux';
import reduxStore, { persistor } from './redux';

const renderApp = () => {
    ReactDOM.render(
        <Provider store={reduxStore}>
            <IntlProviderWrapper>
                <App persistor={persistor} />
            </IntlProviderWrapper>
        </Provider>,
        document.getElementById('root')
    );
};

renderApp();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/**
 * Mã này khởi tạo ứng dụng React, kết hợp Redux và cung cấp hỗ trợ đa ngôn ngữ thông qua IntlProviderWrapper. Dưới đây là mô tả cụ thể:

Import các thư viện và CSS cần thiết:

React và ReactDOM để render ứng dụng React.
CSS cho việc sử dụng react-toastify và các CSS tự định nghĩa.
Import các component và các module cần thiết:

App là component chính của ứng dụng.
IntlProviderWrapper là một higher-order component (HOC) để cung cấp hỗ trợ đa ngôn ngữ thông qua react-intl.
Provider là một component của Redux để cung cấp Redux store cho ứng dụng.
Khởi tạo ứng dụng:

Ứng dụng được render bằng cách sử dụng ReactDOM.render. Nó là component chính được gắn vào document.getElementById('root').
Service Worker:

Dòng serviceWorker.unregister(); cho biết rằng Service Worker của ứng dụng sẽ không được sử dụng. Nếu bạn muốn sử dụng Service Worker để làm cho ứng dụng có khả năng làm việc ngoại tuyến và nạp nhanh hơn, bạn có thể thay đổi unregister() thành register().
Redux Store và Persistor:

Redux store được cung cấp cho ứng dụng thông qua <Provider> từ thư viện Redux. Store này được khởi tạo trong reduxStore.
persistor được sử dụng cho việc lưu trữ dữ liệu khi bạn muốn thực hiện lưu trữ có thể lưu trữ trong ứng dụng. Việc này có thể được sử dụng để duy trì trạng thái đăng nhập của người dùng sau khi họ đóng trình duyệt.
 */