import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    adminInfo: null
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADMIN_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                adminInfo: action.adminInfo
            }
        case actionTypes.ADMIN_LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                adminInfo: null
            }
        case actionTypes.PROCESS_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                adminInfo: null
            }
        default:
            return state;
    }
}

export default appReducer;

/**
 * Reducer bạn đã định nghĩa xử lý các hành động liên quan đến đăng nhập và đăng xuất của người dùng. Dưới đây là mô tả cho từng trường hợp:

ADMIN_LOGIN_SUCCESS: Trường hợp này được sử dụng khi đăng nhập thành công. Reducer này sẽ cập nhật trạng thái isLoggedIn thành true và lưu thông tin người dùng trong adminInfo.

ADMIN_LOGIN_FAIL: Trường hợp này được sử dụng khi đăng nhập thất bại hoặc có lỗi. Reducer này sẽ cập nhật trạng thái isLoggedIn thành false và đặt adminInfo thành null.

PROCESS_LOGOUT: Trường hợp này được sử dụng để đăng xuất người dùng khỏi hệ thống. Reducer này sẽ đặt trạng thái isLoggedIn thành false và đặt adminInfo thành null.

Nếu bạn muốn thay đổi trạng thái của ứng dụng khi người dùng đăng nhập hoặc đăng xuất, bạn có thể gửi các hành động tương ứng (ví dụ: userLoginSuccess, userLoginFail, processLogout) từ action creators của bạn và reducer này sẽ xử lý các thay đổi trong trạng thái Redux của ứng dụng.
 */