import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes';

const defaultState = {  // 这就是默认值
    inputValue: '',
    list: []
};     // 这个 ; 打与不打都是可以的吗？  感觉在Js里少打; 还不怎么容易出错，多打了反倒容易出错。。。感觉好混乱

// reducer 可以接受state，但是绝不能修改state     reducer 相当于一个函数
export default (state = defaultState, action) => {       // 注意一个问题：这个箭头函数整体是没有括号来包围的，但是这个返回值因为是多行输出，所以要有{}来包裹
    if (action.type === CHANGE_INPUT_VALUE) {
        // 拷贝之前的一份数据,这里的拷贝是深拷贝，  这里的JSON用法是怎么用的哦？
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;    // 这里的newState就已经完全代替之前的state了吗？(数据的替换应该是在Store中实现的)  return 返回给了store， 感觉reducers就是一个处理器，返回数据给store后，store的老数据被新数据替换了
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);    // 表示找到指定的下标，然后删除这个元素
        return newState;
    }
    console.log(state, action);  // 这里的state是之前的值
    // reducers就会使用一些方法让之前的state和action做一些处理
    return state;     // 最后传的还是这个state
}