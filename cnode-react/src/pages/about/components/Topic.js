import React, { Component }from 'react';
// 无论哪个组件连接store都需要connect
import {connect} from 'react-redux';
import { 
    TopicWrapper, 
    TopicItem,
    TopicSpan,
    Wrapper,
    TopicLi
} from '../style';
class Topic extends Component {
    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                <Wrapper>
                    <TopicItem>主页</TopicItem>
                    <TopicSpan>/</TopicSpan>
                </Wrapper>
                <TopicLi>关于</TopicLi>
            </TopicWrapper>
        )
    }
}
// 现在这个组件主要是和store做连接 拿到store的数据
const mapState = (state) => ({
    list: state.get('home').get('topicList') // 按层级拿数据
});
export default connect(mapState, null)(Topic);