import React, { Component }from 'react';
import { TopicWrapper, TopicItem } from '../style';
class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                <TopicItem>全部</TopicItem>
                <TopicItem>精华</TopicItem>
                <TopicItem>分享</TopicItem>
            </TopicWrapper>
        )
    }
}

export default Topic;