import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 90%;
    margin: 10px auto;
    // height: 300px;
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

export const ListItem = styled.div`
    width: 100%;
    height: 40px;
    border-bottom: 1px solid black;
    background: green;
    font-size: 14px;
    vertical-align:middle;
    // line-height: 40px;
    // text-align: center;
    .pic {
        vertical-align:middle;
        // display: block;
        width: 40px;
        height: 40px;
    }
`