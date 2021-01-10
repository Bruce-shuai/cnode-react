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
                <HomeLeft>
                    <Topic />
                </HomeLeft>
            </HomeWrapper>
        )
    }
}

export default Api;