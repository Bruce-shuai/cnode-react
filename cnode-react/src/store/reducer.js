// 整合小的reducer, 将小的reducer合并成大的reducer
import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer} from '../common/header/store';

// 变成了一个大的reducer
const reducer = combineReducers({
    // header这个名字是随便起的，起任意的名字都可以
    header: headerReducer   // 将小的reducer传进来，combineReducer就会将小的reducer进行整合
})

export default reducer;