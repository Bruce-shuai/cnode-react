import axios from 'axios';
import * as constants from './constants';

const changHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    List: result
})

export const getHomeInfo = () => {
    return (dispatch)=>{
        // 这里的接口直接嫖cnode网站的，cnode网站是给了这些资源的
        axios.get('https://cnodejs.org/api/v1/topics').then((res) => {
            // console.log(res);
            const result = res.data.data;
            // const action = changHomeData(result);
            // console.log(result);
            dispatch(changHomeData(result));
        })
    }
}