import React, {Component} from 'react'; 
import { connect } from 'react-redux';
import 
{ 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchWrapper 
} from "./style.js";  // ./这个别忘了
import { actionCreators } from './store';     // store 是会自动找index这个文件？


// // 无状态组件--性能更高
// const Header = (props) => {
//   // 函数组件也是要return的
//   return (
//     <HeaderWrapper>
//       {/* 首页根路径 */}
//       <Logo href='/'/>
//         <Nav>   
//          <SearchWrapper>     
//           <NavSearch
// 						className={props.touch ? 'touched' : ''}
// 						onMouseOver={props.handleInputMouseOver} // 这里有props是因为mapDispathToProps这个参数的原因
//             onMouseLeave={props.handleInputMouseLeave}
//             // --------- 测试focused功能 --------  // 注意 onFocus 和 onClick是不一样的
//             onFocus={props.handleInputFocus}
//             onBlur={props.handleInputBlur}
//           ></NavSearch>  
//            <span className="iconfont">&#xe602;</span> 
//           { getListArea(props.focus) }
//          </SearchWrapper>  
//             {/* 可能之后这下面这个会变成Button */}
//            <NavItem className='right'>登录</NavItem>
//            <NavItem className='right'>注册</NavItem>
//            <NavItem className='right'>关于</NavItem>
//            <NavItem className='right'>API</NavItem>
//            <NavItem className='right'>新手入门</NavItem>
//            <NavItem className='right'>首页</NavItem>
//         </Nav>
//     </HeaderWrapper>
//   )
// }


class Header extends Component {
    // constructor(props) {
    //     super(props);
		// 		this.handleInputMouseOver = this.handleInputMouseOver.bind(this);
		// 		this.handleInputMouseLeave = this.handleInputMouseLeave.bind(this);
    // }
    getListArea(show) {
      const {list} = this.props;
      if (show) {
        return (
          <SearchInfo>
              {/* <SearchInfoTitle className='first'>回调函数</SearchInfoTitle>
              <SearchInfoTitle>call apply</SearchInfoTitle>
              <SearchInfoTitle>Js</SearchInfoTitle>
              <SearchInfoTitle>class</SearchInfoTitle> */}
              {
                list.map((item) => {
                  if (item === '回调函数') {
                    return <SearchInfoTitle className='first'>回调函数</SearchInfoTitle>
                  }
                  return <SearchInfoTitle key={item}>{item}</SearchInfoTitle>
                })
              }
          </SearchInfo>  
        )
      } else {
        return null;
      }
    }
    render() {
      // 和上面的const {list} = this.props;一个道理，但是是各管各的
      const { focus, touch, list, handleInputMouseOver, handleInputMouseLeave, handleInputFocus, handleInputBlur} = this.props;
        return (
            <HeaderWrapper>
                {/* 首页根路径 */}
                <Logo href='/'/>
                <Nav>   
                <SearchWrapper>     
                  <NavSearch
									className={touch ? 'touched' : ''}
									onMouseOver={handleInputMouseOver} // 这里有props是因为mapDispathToProps这个参数的原因
                  onMouseLeave={handleInputMouseLeave}
                  onFocus={()=>handleInputFocus(list)} // 这里第一个() 为什么没有list
                  onBlur={handleInputBlur}
                  ></NavSearch>  
                  <span className="iconfont">&#xe602;</span>   
                  { this.getListArea(focus) }
                </SearchWrapper>  
                  {/* 可能之后这下面这个会变成Button */}
                  <NavItem className='right'>登录</NavItem>
                  <NavItem className='right'>注册</NavItem>
                  <NavItem className='right'>关于</NavItem>
                  <NavItem className='right'>API</NavItem>
                  <NavItem className='right'>新手入门</NavItem>
                  <NavItem className='right'>首页</NavItem>
                </Nav>
            </HeaderWrapper>
        )
		}
}
const mapStateToProps = (state) => {
  return {
    // 这一步是将仓库里的touch映射到组件的props里  这里是从header下面去取
    // touch: state.header.touch  
    focus: state.get('header').get('focus'),
    touch: state.get('header').get('touch'),   // 这是使用了immutable后必须要用get() 方法传入touch这个属性
    list: state.getIn(['header', 'list'])
  }
}

const mapDispathToProps = (dispatch) => {
    return {
      // 这里直接写函数，感觉有点中间件的意思
      handleInputMouseOver(){
        // const action = actionCreators.searchMouseOVer();
        dispatch(actionCreators.searchMouseOVer());
      },
      handleInputMouseLeave(){
        dispatch(actionCreators.searchMouseLeave());
      },
      handleInputFocus(list){
        if (list.size === 0) {
          dispatch(actionCreators.getList());
        }
        dispatch(actionCreators.searchFocus());
      },
      handleInputBlur(){
        dispatch(actionCreators.searchBlur());
      }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);