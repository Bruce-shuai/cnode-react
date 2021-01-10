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

export const HomeRight = styled.div`
    float: right;
    // padding-top: 10px;
    // width: 28%;
    // background: green;
    color: #333;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    line-height: 2em;
    overflow: hidden;
    position: relative;
    padding: 10px 0 10px 10px;
    font-size: 14px;
    padding-right: 10px;
    background: #fff;
    border-top: none;
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

export const Sidebar = styled.div `
    line-height: 20px;
    color: #333;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    width: 290px;
    font-size: 14px;
    float: right;
    margin-bottom: 20px;
`;

export const Panel = styled.div `
    line-height: 20px;
    color: #333;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    margin-bottom: 13px;
    font-size: 13px;
`;

export const Inner = styled.div `
    color: #333;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    font-size: 13px;
    line-height: 2em;
    background-color: #fff;
    padding: 10px;
    border-radius: 0 0 3px 3px;
`;

export const Rp = styled.div `
    color: #333;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    line-height: 2em;
    margin: 0 0 10px;
    font-size: 14px;
    word-break: break-word;
`;

export const Rdiv = styled.div `
    color: #333;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    font-size: 13px;
    line-height: 2em;
`;

export const Ra = styled.a `
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    font-size: 13px;
    line-height: 2em;
    text-decoration: none;
    color: #778087;
`;

export const Ra2 = styled.a `
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    font-size: 13px;
    text-align: left;
    line-height: 2em;
    text-decoration: none;
    color: #778087;
`;

export const Rspan = styled.span `
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    min-height: 1px;
    display: inline-block;
    float: none;
    padding: 3px 10px;
    border: none;
    margin: 0;
    font-size: 14px;
    transition: all .2s ease-in-out;
    cursor: pointer;
    letter-spacing: 2px;
    box-shadow: none;
    border-radius: 3px;
    line-height: 2em;
    vertical-align: middle;
    color: #fff;
    background-color: #5bc0de;
`;

export const Rheader = styled.div `
    line-height: 20px;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    font-size: 13px;
    padding: 10px;
    background-color: #f6f6f6;
    color: #51585c;
    border-radius: 3px 3px 0 0;
`;

export const Colfade = styled.span `
    line-height: 20px;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    font-size: 13px;
    color: #444;
`;

export const Rol = styled.ol `
    color: #333;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    font-size: 13px;
    line-height: 2em;
    padding: 0;
    margin: 4px 0;
    list-style: none;
`;

export const Sep10 = styled.div `
    color: #333;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    font-size: 13px;
    line-height: 2em;
    list-style: none;
    height: 10px;
`;

export const Rli = styled.li `
    color: #333;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    font-size: 13px;
    list-style: none;
    line-height: 2em;
`;

export const Rimg = styled.img `
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    font-size: 13px;
    list-style: none;
    line-height: 2em;
    color: #778087;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
    width: 150px;
`;

export const Rimg2 = styled.img `
color: #333;
word-break: break-word;
font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
font-size: 13px;
text-align: center;
line-height: 2em;
width: 200px;
height: auto;
max-width: 100%;
vertical-align: middle;
border: 0;
`;


export const Rerweima = styled.div `
    color: #333;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    font-size: 13px;
    text-align: center;
    line-height: 2em;
    background-color: #fff;
    padding: 10px;
    border-radius: 0 0 3px 3px;
`;