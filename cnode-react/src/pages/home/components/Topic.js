import React, { Component }from 'react';
// 无论哪个组件连接store都需要connect
import {connect} from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';
class Topic extends Component {
    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {/* 为了增加link，就好像不能这样使用了 {
                    list.map((item)=>{
                        return (   // 注意return后可能还要继续return, 注意，下面的这个item已经是immutable对象
                            <TopicItem key={item.get('id')}>{item.get('title')}</TopicItem>
                        )
                    })
                } */}
                {/* 这个路径现在是乱写的 */}
                {/* <Link to='/index/all'>  */}
                <TopicItem>全部</TopicItem>
                {/* </Link> */}
                {/* <Link to='/index/good'>  */}
                <TopicItem>精华</TopicItem>
                {/* </Link> */}
                {/* <Link to='/index/share'>  */}
                <TopicItem>分享</TopicItem>
                {/* </Link> */}
                {/* <Link to='/index/ask'>  */}
                <TopicItem>问答</TopicItem>
                {/* </Link> */}
                {/* <Link to='/index/job'>  */}
                <TopicItem>招聘</TopicItem>
                {/* </Link> */}
                {/* <Link to='/index/dev'>  */}
                <TopicItem>客户端测试</TopicItem>
                {/* </Link> */}
            </TopicWrapper>
        )
    }
}
// 现在这个组件主要是和store做连接 拿到store的数据
const mapState = (state) => ({
    list: state.get('home').get('topicList') // 按层级拿数据
});
export default connect(mapState, null)(Topic);