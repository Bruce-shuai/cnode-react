import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 90%;
    margin: 10px auto;
    height: 300px;
    background: red;
`;

export const HomeLeft = styled.div`
    float: left;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 70%;
    background: blue;
`;

export const HomeRight = styled.div`
    float: right;
    padding-top: 10px;
    width: 28%;
    background: green;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    background: yellow;
`;

export const TopicItem = styled.div`
    float: left;
    margin-left: 20px;
    margin-right: 5px;
    font-size: 15px;
`;