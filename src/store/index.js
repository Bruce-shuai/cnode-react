import { createStore } from 'redux';    // 上面只是引入了createStore框架, 要注意 引入的文件必须要加 ''
import reducer from './reducer';

const store = createStore(reducer,
    // 下面这个是配置chorm插件reduce需要的这些东西， 是如果有__REDUX_DEVTOOLS_EXTENSION__，就进行window.__REDUX_DEVTOOLS_EXTENSION__()方法
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;