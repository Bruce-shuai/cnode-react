import React, { Component } from 'react';
import {
    HomeWrapper, 
    HomeLeft,
    HomeRight
} from './style';
import Topic from './components/Topic';
class Api extends Component {
    render(){
        return (
            <HomeWrapper>
                <HomeRight>
                </HomeRight>
                <HomeLeft>
                    <Topic />
                </HomeLeft>
            </HomeWrapper>
        )
    }
}

export default Api;