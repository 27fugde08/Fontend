import actionTypes from './actionTypes';

export const addUserSuccess = () => ({
    type: actionTypes.ADD_USER_SUCCESS
})

export const userLoginSuccess = (userInfor) => ({
    type: actionTypes.USER_LOGIN_SUCCESS,
    userInfor: userInfor
})

export const userLoginFail = () => ({
    type: actionTypes.USER_LOGIN_FAIL
})

export const processLogout = () => ({
    type: actionTypes.PROCESS_LOGOUT
})
/**
 * Các action creators trong Redux của bạn đã được định nghĩa như sau:

addUserSuccess: Hành động này không nhận đối số và trả về một hành động với loại ADD_USER_SUCCESS. Hành động này có thể được sử dụng để chỉ ra rằng việc thêm người dùng mới đã thành công.

userLoginSuccess: Hành động này nhận đối số userInfor và trả về một hành động với loại USER_LOGIN_SUCCESS và giá trị userInfor được truyền vào. Hành động này thường được sử dụng khi người dùng đăng nhập thành công để cập nhật thông tin người dùng trong trạng thái Redux.

userLoginFail: Hành động này không nhận đối số và trả về một hành động với loại USER_LOGIN_FAIL. Hành động này thường được sử dụng khi đăng nhập không thành công hoặc có lỗi.

processLogout: Hành động này không nhận đối số và trả về một hành động với loại PROCESS_LOGOUT. Hành động này thường được sử dụng để đăng xuất người dùng khỏi hệ thống và xóa thông tin đăng nhập của họ khỏi trạng thái Redux.

Các hành động này có thể được gửi đến reducer để thay đổi trạng thái của ứng dụng Redux của bạn.
 */