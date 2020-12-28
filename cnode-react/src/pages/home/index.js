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
import axios from 'axios';
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
                </HomeLeft>
            </HomeWrapper>

        )
    }
    // 通过生命周期函数发送ajax
    componentDidMount() {
        // 看看直接在get()里输入地址可不可以
        axios.get('/api/home.json').then((res) => {
            // console.log(res);
            const result = res.data.data;
            const action = {
                type: 'change_home_data',
                List: result
            }
            // console.log(result);
            this.props.changeHomeData(action);
        })
    }
}
const mapDispatch = (dispatch) => ({
    changeHomeData(action) {
        dispatch(action);
    }
});
export default connect(null, mapDispatch)(Home);