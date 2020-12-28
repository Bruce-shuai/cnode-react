// 感觉文件的出口文件都是index
import * as actionCreators from './actionCreators';
import * as constaints from './constants';
import reducer from './reducer';

// 这让文件做了一次导出
export { reducer, actionCreators, constaints };  // 这样会让主的reducer引入文件少两层路径