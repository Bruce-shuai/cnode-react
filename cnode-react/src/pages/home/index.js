import React, { Component }from 'react';
import {
    HomeWrapper, 
    HomeLeft,
    HomeRight
} from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
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
}

export default Home;