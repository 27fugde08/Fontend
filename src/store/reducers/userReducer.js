import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    userInfo: null
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                userInfor: action.userInfor
            }
        case actionTypes.USER_LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                userInfor: null
            }
        case actionTypes.PROCESS_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                userInfor: null
            }
        default:
            return state;
    }
}

export default appReducer;

/**
 * Code trên định nghĩa một reducer có tên appReducer để quản lý trạng thái của người dùng trong ứng dụng. Dưới đây là mô tả cho reducer này:

initialState: Đây là trạng thái ban đầu của reducer, đặt ở dạng không đăng nhập (isLoggedIn là false) và không có thông tin người dùng (userInfo là null).

Trong reducer này, bạn xử lý ba action types khác nhau:

USER_LOGIN_SUCCESS: Khi người dùng đăng nhập thành công, reducer sẽ cập nhật trạng thái isLoggedIn thành true và lưu thông tin người dùng vào userInfo.

USER_LOGIN_FAIL: Khi đăng nhập thất bại hoặc người dùng đăng xuất, reducer sẽ đặt isLoggedIn thành false và userInfo thành null.

PROCESS_LOGOUT: Đây là action được gọi khi người dùng thực hiện đăng xuất. Reducer sẽ cập nhật trạng thái isLoggedIn thành false và userInfo thành null.

Reducer này chỉ quản lý trạng thái của người dùng trong ứng dụng, và nó sẽ được kết hợp với các reducer khác thông qua combineReducers để tạo ra rootReducer chung cho ứng dụng.
 */