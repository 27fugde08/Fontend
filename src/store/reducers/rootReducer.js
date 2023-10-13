import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import appReducer from "./appReducer";
import adminReducer from "./adminReducer";
import userReducer from "./userReducer";

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistCommonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2,
};


const userPersistConfig = {
    ...persistCommonConfig,
    key: 'user',
    whitelist: ['isLoggedIn', 'userInfo']
};

export default (history) => combineReducers({
    router: connectRouter(history),
    user: persistReducer(userPersistConfig, userReducer),
    app: appReducer
})

/**
 * Code trên sử dụng Redux và Redux Persist để quản lý trạng thái của ứng dụng. Dưới đây là mô tả cho từng phần của code này:

combineReducers: Hàm này được sử dụng để kết hợp nhiều reducers thành một reducer chung. Trong trường hợp này, bạn có ba reducers chính: appReducer, adminReducer, và userReducer. Hàm combineReducers sẽ kết hợp chúng thành một reducer chung.

connectRouter: Hàm này được sử dụng để kết nối router với Redux. Điều này cho phép bạn quản lý trạng thái của router bằng cách sử dụng Redux.

redux-persist: Thư viện này được sử dụng để lưu trạng thái Redux vào bộ nhớ cục bộ (localStorage hoặc AsyncStorage). Code đã cấu hình Redux Persist để lưu trạng thái của userReducer (chứa thông tin người dùng và trạng thái đăng nhập) và sử dụng autoMergeLevel2 để quản lý việc hợp nhất các phiên bản lưu trữ.

userPersistConfig: Đây là cấu hình cho Redux Persist đối với trạng thái người dùng. Nó xác định tên cho lưu trữ (key), danh sách các thuộc tính của trạng thái bạn muốn lưu trữ (whitelist), và cấu hình lưu trữ cơ bản.

default: Hàm này xuất một hàm khởi tạo rootReducer, và bạn phải truyền vào router history khi sử dụng nó. Nó sẽ tạo ra một reducer chung bằng cách kết hợp các reducers đã được cấu hình, kết hợp với kết nối router.
 */