import * as constants from './constants';
import { fromJS } from 'immutable';
// 这个reducer就是一个子reducer


// immutable.js  是一个第三方的模块
// 是Facebook历时3年创造出来的一个库

const defaultState = fromJS({
    touch: false,
    focus: false,
    list: []
});

// 这是一个纯函数，给定一个固定的输入，就会有一个固定的输出 同时没有副作用
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.SEARCH_MOUSEOVER:
            return state.set('touch', true);   // set方法返回一个新对象
        case constants.SEARCH_MOUSELEAVE:
            return state.set('touch', false);
        case constants.SEARCH_FOCUS:
            return state.set('focus', true);
        case constants.SEARCH_BLUR:
            return state.set('focus', false);
        case constants.CHANGE_LIST:
            return state.set('list', action.data);
        default:
            return state;
    }
    // if (action.type === constants.SEARCH_MOUSEOVER) {
    //     return state.set('touch', true);   // set方法返回一个新对象
    //     // {
    //     //     touch: true
    //     // }
    // }
    // if (action.type === constants.SEARCH_MOUSELEAVE) {
    //     return state.set('touch', false);
    //     // return {
    //     //     touch: false
    //     // }
    // }
    // if (action.type === constants.SEARCH_FOCUS) {
    //     return state.set('focus', true);
    //     // return {
    //     //     touch: false
    //     // }
    // }
    // if (action.type === constants.SEARCH_BLUR) {
    //     return state.set('focus', false);
    //     // return {
    //     //     touch: false
    //     // }
    // }
    // if (action.type === constants.CHANGE_LIST) {
    //     return state.set('list', action.data)
    //     // console.log(action);
    //     // return state;
    // }
    // return state;
}