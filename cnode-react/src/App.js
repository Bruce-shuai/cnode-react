// common 表示这是很多页面所用的页面
import React, { Component } from 'react';
import { Provider } from 'react-redux';    // Provider是核心组件
import store from './store';
// BrowserRouter 代表路由  Route代表路由规则
import { BrowserRouter, Route} from 'react-router-dom'
// import { Globalstyle } from './style';
import Header from './common/header';
import Footer from './common/footer';
import { GlobalStyleFont } from './statics/iconfont/iconfont';
import Home from './pages/home';
import Detail from './pages/detail';
import Book from './pages/book';
import Getstart from './pages/getstart';
import About from './pages/about';
import Api from './pages/api';
class App extends Component {
  render() {
    return(
      // React.Fragment 这样就不用再进行解构了
      <React.Fragment>  
        {/* 有了Provider就可以把store提供给包围到的所有组件 */}
        <Provider store={store}>
          <div>
          {/* <Header /> 在这里使用的话，Link方法就无法使用了*/}
          <BrowserRouter>
            <div>
            <Header />
              {/* Home 和Detail都是组件 */}
              {/* Route代表的是一个一个的路由规则 这种component=的写法要学会*/}
              {/* 这里的路径其实就是文件引入时的路径 */}
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
            <Route path='/book' exact component={Book}></Route>
            <Route path='/getstart' exact component={Getstart}></Route>
            <Route path='/about' exact component={About}></Route>
            <Route path='/api' exact component={Api}></Route>
            </div>
          </BrowserRouter>
          <Footer />
          <GlobalStyleFont />
        {/* <Globalstyle /> */}
        </div>
        </Provider>
      </React.Fragment>
    )
  }
}
export default App;
