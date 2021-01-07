// 只属于Header这个组件使用的样式
import styled from 'styled-components';
import logoPic from '../../statics/logo.svg';

// 这些样式只对指定的组件有影响，对其他组件是没有影响的
// 这个HeaderWrapper这个组件实则就是一个div~
export const HeaderWrapper = styled.div`
    position: relative;
    height: 50px;
    background: #444;
`;

// Logo是a标签~ 因为点击Logo会返回主页，a标签是内联标签，要设置成block块状标签才能改高度和宽度
export const Logo = styled.a`  // attrs这种写法是啥？
    position: absolute;
    top: 8px;
    left: 0;
    margin-left: 5%;
    display: block;  
    width: 120px;
    height: 28.19px;
    // url里不能直接写工程目录，不然会被当成普通的字符串，应该用多行文本嵌变量的语法
    background: url(${logoPic});
    // background-size: contain;
`;

export const Nav = styled.div`
    width: 88%;
    height: 100%;
    margin:0 auto;
`;

export const NavItem = styled.a`
    // 组件有类就是这种写法
    &.right {
        float: right;
    }
    color: #cccccc;
    cursor: pointer;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    font-size: 13px;
    // 这招让字体居中
    line-height: 50px;
    padding: 0px 15px;
    &:hover { // 伪类的使用
        color: #fff;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    // padding-left: 10%;
    // float: left;
    .iconfont {
        position: absolute;
        left: 12.2%;
        top: 18px;
        // background: green;
    }
`;


// attrs 这个操作是什么呢？
export const NavSearch = styled.input.attrs({
    // placeholder: '搜索'
})`
position: absolute;
outline: none;
padding-left: 2.4%;
top: 13px;
margin-left: 11.6%;
height: 24px;
width: 19%;
color: #666;
border-radius: 15px;
background:#888888;
border: none;
&.touched {
    background:#ffffff;
}
`

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 40px;
    width: 19%;
    padding-left: 2.4%;
    margin-left: 11.6%;
    height: 150px;
    border-radius: 5px;
    // border: .5px solid black;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: #ffffff;
`

export const SearchInfoTitle = styled.a `
    position: relative;
    display: block;
    width: 111.4%;
    height: 30px;
    left: -13.4%;
    cursor: pointer;
    background: green;
    line-height: 30px;
    font-size: 13px;
    &.first {
        top: 10px;
        padding-bottom: 10px;
    }
    border: 1px solid red;
    // z-index: 8;
`