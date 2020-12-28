import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';
const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data)
})
export const searchMouseOVer = () => ({
    type: constants.SEARCH_MOUSEOVER
})
export const searchMouseLeave = () => ({
    type: constants.SEARCH_MOUSELEAVE
})
export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})
export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

// getList 帮助返回一个函数，主要用来派发一个异步的请求, 为什么这里=> 后又没有()
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data
            console.log(data);
            // data的内容，就是接口返回的内容

            //又要开始改store的数据了，所以要创建一个action
            // const action = ;
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log('error');
        })
    }
}