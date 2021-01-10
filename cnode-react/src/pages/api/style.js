import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 90%;
    margin: 10px auto;
    // height: 300px;
    background: #e1e1e1;
`;

export const HomeLeft = styled.div`
    // float: left;
    // padding-top: 10px;
    // padding-bottom: 10px;
    // width: 70%;
    // // background: blue;

    color: #333;
    font-size: 14px;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    line-height: 2em;
    background-color: #fff;
    border-radius: 0 0 3px 3px;
    padding: 0;
    width: 70%;
`;

export const TopicWrapper = styled.div`
    line-height: 20px;
    color: #333;
    font-size: 14px;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
`;

export const TopicItem = styled.a`
    line-height: 20px;
    font-size: 14px;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    text-decoration: none;
    cursor: pointer;
    margin: 0 10px;
    color: #80bd01;
    &:hover {
        color: #08c

    }
`;

export const Wrapper = styled.li `
    color: #333;
    font-size: 14px;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    list-style: none;
    line-height: 20px;
    display: inline-block;
    text-shadow: none;
`;

export const TopicSpan = styled.span `
    font-size: 14px;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    list-style: none;
    line-height: 20px;
    text-shadow: none;
    padding: 0 5px;
    color: #ccc;
`;

export const TopicLi = styled.li `
    font-size: 14px;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    list-style: none;
    line-height: 20px;
    display: inline-block;
    text-shadow: none;
    color: #999;
`;

