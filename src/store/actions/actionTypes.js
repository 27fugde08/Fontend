const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',



    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

})

export default actionTypes;

/**
 * Mã trên định nghĩa một danh sách các hằng số action types (loại hành động) trong Redux. Action types thường được sử dụng để định danh các hành động khác nhau mà bạn có thể thực hiện trong ứng dụng của bạn. Dưới đây là một số action types được định nghĩa:

APP_START_UP_COMPLETE: Được sử dụng để thông báo rằng ứng dụng đã khởi động hoàn tất.

SET_CONTENT_OF_CONFIRM_MODAL: Được sử dụng để thiết lập nội dung của modal xác nhận.

ADD_USER_SUCCESS: Được sử dụng để thông báo rằng việc thêm người dùng đã thành công.

USER_LOGIN_SUCCESS: Được sử dụng để thông báo rằng việc đăng nhập của người dùng đã thành công.

USER_LOGIN_FAIL: Được sử dụng để thông báo rằng việc đăng nhập của người dùng đã thất bại.

PROCESS_LOGOUT: Được sử dụng để xử lý đăng xuất người dùng.

Bằng cách sử dụng các action types này trong Redux, bạn có thể tạo và xử lý các hành động (actions) tương ứng trong ứng dụng của bạn để quản lý trạng thái và tương tác với máy chủ hoặc giao diện người dùng.
 */