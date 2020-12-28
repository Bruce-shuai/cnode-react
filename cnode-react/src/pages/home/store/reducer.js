import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '全部'
    }, {
        id: 2,
        title: '精华'
    }, {
        id: 3,
        title: '分享'
    }, {
        id: 4,
        title: '问答'
    }, {
        id: 5,
        title: '招聘'
    }, {
        id: 6,
        title: '客户端测试'
    }],
    listList: []
});

// 这是一个纯函数，给定一个固定的输入，就会有一个固定的输出 同时没有副作用
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'change_home_data':
            console.log(action);
        return state.set('listList', fromJS(action.List));
        default:
        return state;
    }
}