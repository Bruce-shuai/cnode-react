import React, { Component } from 'react';
import {
    HomeWrapper, 
    HomeLeft,
    HomeRight
} from './style';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
class About extends Component {
    render(){
        return (
            <HomeWrapper>
            <HomeRight>
                <Recommend />
            </HomeRight>
            <HomeLeft>
                <Topic />
            </HomeLeft>
        </HomeWrapper>
        );
    }
}

export default About;