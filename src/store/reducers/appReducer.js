import actionTypes from '../actions/actionTypes';

const initContentOfConfirmModal = {
    isOpen: false,
    messageId: "",
    handleFunc: null,
    dataFunc: null
}

const initialState = {
    started: true,
    language: 'vi',
    systemMenuPath: '/system/user-manage',
    contentOfConfirmModal: {
        ...initContentOfConfirmModal
    }
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.APP_START_UP_COMPLETE:
            return {
                ...state,
                started: true
            }
        case actionTypes.SET_CONTENT_OF_CONFIRM_MODAL:
            return {
                ...state,
                contentOfConfirmModal: {
                    ...state.contentOfConfirmModal,
                    ...action.contentOfConfirmModal
                }
            }
        default:
            return state;
    }
}

export default appReducer;

/**
 * Reducer này xử lý các hành động liên quan đến ứng dụng chung. Dưới đây là mô tả cho từng trường hợp:

APP_START_UP_COMPLETE: Trường hợp này được sử dụng khi ứng dụng hoàn thành quá trình khởi đầu. Reducer này sẽ cập nhật trạng thái started thành true.

SET_CONTENT_OF_CONFIRM_MODAL: Trường hợp này được sử dụng để đặt nội dung cho hộp thoại xác nhận. Reducer này sẽ cập nhật trạng thái contentOfConfirmModal với dữ liệu được chuyển đến từ action.

Trong cả hai trường hợp, reducer chỉ cập nhật trạng thái hiện tại của ứng dụng. Nếu bạn muốn thay đổi nội dung hộp thoại xác nhận hoặc thực hiện hành động nào đó sau khi ứng dụng hoàn thành quá trình khởi đầu, bạn có thể gửi các hành động tương ứng từ action creators của bạn, và reducer này sẽ xử lý các thay đổi trong trạng thái Redux của ứng dụng.
 */