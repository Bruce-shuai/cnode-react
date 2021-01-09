import React, { Component }from 'react';
import { connect } from 'react-redux';
import {
    HomeWrapper, 
    HomeLeft,
    HomeRight
} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Paginate from './components/Paginate';
import { actionCreators } from './store';
class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeRight>
                    <Recommend />
                </HomeRight>
                <HomeLeft>
                    <Topic />
                    <List />
                    <Paginate />
                </HomeLeft>
            </HomeWrapper>
        )
    }
    // 通过生命周期函数发送ajax
    componentDidMount() {
        // 看看直接在get()里输入地址可不可以
        // axios.get('/api/home.json').then((res) => {
        //     // console.log(res);
        //     const result = res.data.data;
        //     const action = {
        //         type: 'change_home_data',
        //         List: result
        //     }
        //     // console.log(result);
        //     this.props.changeHomeData(action);
        // })
        this.props.changeHomeData()
    }
}
const mapDispatch = (dispatch) => ({
    changeHomeData() {
        // 看看直接在get()里输入地址可不可以
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    }
});
export default connect(null, mapDispatch)(Home);