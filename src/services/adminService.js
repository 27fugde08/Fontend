import axios from '../axios'; // Import Axios để gửi yêu cầu HTTP
import * as queryString from 'query-string';

const adminService = {
    /**
     * Đăng nhập hệ thống
     * @param {Object} loginBody - Đối tượng chứa thông tin đăng nhập (username và password)
     * {
     *  "username": "string",
     *  "password": "string"
     * }
     * @returns {Promise} - Trả về một promise, cho phép bạn xử lý kết quả đăng nhập.
     */
    login(loginBody) {
        // Sử dụng Axios để gửi yêu cầu POST đến API endpoint `/admin/login`
        return axios.post(`/admin/login`, loginBody);
    },
};

export default adminService;

/**
 * Mã bạn đưa ra là một phần của dịch vụ (adminService) được sử dụng để gửi các yêu cầu HTTP bằng thư viện Axios. Trong trường hợp này, dịch vụ này được sử dụng để gửi yêu cầu đăng nhập đến một tài nguyên API (/admin/login). 
Trong phần này:
adminService là một đối tượng chứa các phương thức gửi yêu cầu HTTP cho các chức năng cụ thể của ứng dụng quản lý hệ thống.
Phương thức login nhận một đối tượng loginBody chứa thông tin đăng nhập như tên người dùng (username) và mật khẩu (password).
Bằng cách sử dụng Axios, phương thức login gửi yêu cầu POST đến endpoint /admin/login trên máy chủ. Endpoint này có thể xử lý thông tin đăng nhập và trả về kết quả tương ứng (thường là mã thông báo truy cập) thông qua một promise.
Bản thân bạn có thể sử dụng adminService.login(loginBody) để thực hiện việc đăng nhập trong ứng dụng của mình và xử lý kết quả đăng nhập.
 */