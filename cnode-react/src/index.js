import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  './style.js';    
import './style.css';
import './statics/iconfont/iconfont.js';  //要想组件全局用，这里也要进行引入
ReactDOM.render(
 <App /> ,
  document.getElementById('root')
);
