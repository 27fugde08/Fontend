import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper";
import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";

// Sử dụng locationHelper để xác định vị trí hiện tại và tìm tham số điều hướng (redirect query param)
const locationHelper = locationHelperBuilder({});

// Hàm userIsAuthenticated kiểm tra xem người dùng đã xác thực hay chưa
export const userIsAuthenticated = connectedRouterRedirect({
    // authenticatedSelector xác định điều kiện để người dùng được coi là đã xác thực
    authenticatedSelector: state => state.user.isLoggedIn,
    // wrapperDisplayName là tên sẽ được sử dụng cho higher order component (HOC)
    wrapperDisplayName: 'UserIsAuthenticated',
    // Nếu người dùng chưa xác thực, họ sẽ được chuyển hướng đến đường dẫn "/login"
    redirectPath: '/login'
});

// Hàm userIsNotAuthenticated kiểm tra xem người dùng chưa xác thực
export const userIsNotAuthenticated = connectedRouterRedirect({
    // authenticatedSelector xác định điều kiện để người dùng được coi là chưa xác thực
    authenticatedSelector: state => !state.user.isLoggedIn,
    // wrapperDisplayName là tên sẽ được sử dụng cho higher order component (HOC)
    wrapperDisplayName: 'UserIsNotAuthenticated',
    // Nếu người dùng đã xác thực, họ sẽ được chuyển hướng đến đường dẫn được xác định trong query param "redirect"
    redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
    // Không cho phép người dùng quay lại trang trước đó sau khi đăng nhập thành công
    allowRedirectBack: false
});
