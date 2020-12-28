import React, { Component } from 'react';
import { Provider } from 'react-redux';    // Provider是核心组件
import store from './store';
// BrowserRouter 代表路由  Route代表路由规则
import { BrowserRouter, Route} from 'react-router-dom'
// import { Globalstyle } from './style';
import Header from './common/header';
import { GlobalStyleFont } from './statics/iconfont/iconfont';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return(
      // React.Fragment 这样就不用再进行解构了
      <React.Fragment>  
        {/* 有了Provider就可以把store提供给包围到的所有组件 */}
        <Provider store={store}>
          <div>
          <Header />
          <BrowserRouter>
            <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
          <GlobalStyleFont />
        {/* <Globalstyle /> */}
        </div>
        </Provider>
      </React.Fragment>
    )
  }
}
export default App;
