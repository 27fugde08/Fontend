import axios from 'axios';
import _ from 'lodash';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    // withCredentials: true
});




instance.interceptors.response.use(
    (response) => {
        const { data } = response;
        return response.data;
    }
);


export default instance;

/**
 * Mã trên định nghĩa một instance của Axios để thực hiện các yêu cầu HTTP đến một backend URL được đặt trong biến môi trường REACT_APP_BACKEND_URL. Dưới đây là mô tả cho mã này:

axios.create(): Đây là cách tạo một instance của Axios với cài đặt cụ thể cho instance đó. Instance này sẽ được sử dụng để gửi các yêu cầu HTTP đến backend.

baseURL: Địa chỉ cơ sở cho tất cả các yêu cầu HTTP được thực hiện bằng instance này được đặt bằng giá trị của biến môi trường REACT_APP_BACKEND_URL. Điều này đảm bảo rằng tất cả các yêu cầu sẽ được gửi đến đúng địa chỉ backend.

interceptors.response.use(): Đây là một interceptor của Axios được sử dụng để xử lý phản hồi từ backend trước khi nó được trả về cho phía gọi yêu cầu. Trong trường hợp này, interceptor này nhận phản hồi từ backend, trích xuất dữ liệu từ phản hồi và trả về dữ liệu đó.

Nhớ rằng Axios là một thư viện JavaScript được sử dụng để thực hiện các yêu cầu HTTP trong ứng dụng web. Bằng cách sử dụng axios.create(), bạn có thể tạo ra nhiều instance Axios khác nhau cho các mục đích và cài đặt riêng biệt. Trong trường hợp này, instance được tạo để gửi các yêu cầu đến backend của ứng dụng.
 */