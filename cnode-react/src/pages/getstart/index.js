import React, { Component } from 'react';
// import { connect } from 'react-redux';
import {
    HomeWrapper, 
    HomeLeft,
    HomeRight
} from './style';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
class Getstart extends Component {
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
        )
    }
}

export default Getstart;


