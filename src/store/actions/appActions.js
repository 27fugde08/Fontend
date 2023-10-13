import actionTypes from './actionTypes';

export const appStartUpComplete = () => ({
    type: actionTypes.APP_START_UP_COMPLETE
});

export const setContentOfConfirmModal = (contentOfConfirmModal) => ({
    type: actionTypes.SET_CONTENT_OF_CONFIRM_MODAL,
    contentOfConfirmModal: contentOfConfirmModal
});

/**
 * Mã trên định nghĩa hai action creators (tạo hành động) trong Redux:

appStartUpComplete: Hành động này không nhận đối số và trả về một hành động với loại APP_START_UP_COMPLETE. Hành động này thường được gọi khi ứng dụng đã khởi động hoàn tất. Ví dụ: dispatch(appStartUpComplete()).

setContentOfConfirmModal: Hành động này nhận đối số contentOfConfirmModal và trả về một hành động với loại SET_CONTENT_OF_CONFIRM_MODAL và giá trị contentOfConfirmModal được truyền vào. Hành động này thường được sử dụng để cập nhật nội dung của modal xác nhận. Ví dụ: dispatch(setContentOfConfirmModal('Bạn có chắc chắn muốn xóa?')).

Cả hai action creators này được sử dụng để tạo các hành động (actions) trong ứng dụng Redux của bạn và có thể được gửi đến reducer để thay đổi trạng thái của ứng dụng.
 */