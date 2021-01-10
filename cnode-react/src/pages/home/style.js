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

export const ListItem = styled.div`
    // width: 100%;
    // height: 40px;
    border-bottom: 1px solid #f5f5f5;
    // background: #fff;
    // font-size: 14px;
    // vertical-align:middle;
    // line-height: 40px;
    // text-align: center;
    .pic {
        vertical-align:middle;
        // display: block;
        width: 40px;
        height: 40px;
    }
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
    &: hover {
        background: #f5f5f5;
    }
`
export const Img = styled.img`
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    line-height: 2em;
    font-size: 14px;
    color: #778087;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
    width: 30px;
    height: 30px;
    border-radius: 3px;
`;

export const A = styled.a `
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    line-height: 2em;
    font-size: 14px;
    cursor: pointer;   
    text-decoration: none;
    float: left;
    color: #778087;
`;

export const Span = styled.span`
    color: #333;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    line-height: 2em;
    font-size: 14px;
    float: left;
    width: 70px;
    display: inline-block;
    text-align: center;
`;

export const Replies = styled.span`
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    line-height: 2em;
    font-size: 14px;
    text-align: center;
    color: #9e78c0;
`;

export const Seperator = styled.span `
    color: #333;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    line-height: 2em;
    text-align: center;
    margin: 0 -3px;
    font-size: 10px;
`;
export const Visits = styled.span `
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    line-height: 2em;
    text-align: center;
    font-size: 10px;
    color: #b4b4b4;
`

export const TitleWrapper = styled.div `
    color: #333;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    line-height: 2em;
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 40px;
`;

export const First = styled.span `
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    line-height: 2em;
    white-space: nowrap;
    background: #80bd01;
    padding: 2px 4px;
    -webkit-border-radius: 3px;
    color: #fff;
    font-size: 12px;
`;

export const Title = styled.a `
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    overflow: hidden;
    cursor: pointer;
    text-overflow: ellipsis;
    max-width: 70%;
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
    line-height: 30px;
    font-size: 1em;
    width: 100%;
    color: #888;
    &:hover {
        text-decoration: underline;
    }
`;

export const Pagination = styled.div `
    color: #333;
    font-size: 14px;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    line-height: 2em;
    height: 40px;
    margin: 10px 0 0 10px;
`;

export const Ul = styled.ul `
    color: #333;
    font-size: 14px;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    line-height: 2em;
    padding: 0;
    margin: 0 0 10px 25px;
    display: inline-block;
    margin-bottom: 0;
    margin-left: 0;
    border-radius: 4px;
    box-shadow: none;
`;

export const Li = styled.li `
    color: #333;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    font-size: 13px;
    list-style: none;
    line-height: 20px;
    float: left;
    &.disabled {
        color: #333;
        font-size: 14px;
        word-break: break-word;
        font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
        display: inline;
        line-height: 2em;
    };
`;

export const Pa = styled.a `
    font-size: 14px;
    word-break: break-word;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    float: left;
    padding: 4px 12px;
    line-height: 20px;
    text-decoration: none;
    border: 1px solid #ddd;
    color: #999;
    cursor: default;
    background-color: transparent;
    border-left-width: 1px;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
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