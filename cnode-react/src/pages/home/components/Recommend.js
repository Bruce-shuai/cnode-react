import React, { Component }from 'react';
import 
{ 
    Sidebar,
    Panel,
    Inner,
    Rp,
    Rdiv,
    Ra,
    Ra2,
    Rspan,
    Rheader,
    Colfade,
    Rol,
    Rli,
    Sep10,
    Rimg,
    Rerweima,
    Rimg2
} from '../style';
class Recommend extends Component {
    render() {
        return (
            <React.Fragment>
                <Sidebar>
                    <Panel>
                        <Inner>
                            <Rp>CNode：Node.js专业中文社区</Rp>
                            <Rdiv>您可以
                                <Ra>登陆</Ra>
                                或
                                <Ra>注册</Ra>
                                , 也可以
                            </Rdiv>
                            <Ra>
                                <Rspan>
                                    通过Github登陆
                                </Rspan>
                            </Ra>
                        </Inner>
                    </Panel>
                    <Panel>
                        <Rheader>
                            <Colfade>友情社区</Colfade>
                        </Rheader>
                        <Inner>
                            <Rol>
                                <Rli><Ra href='https://ruby-china.org/'>
                                 <Rimg src='//static2.cnodejs.org/public/images/ruby-china-20150529.png'></Rimg>
                                </Ra></Rli>
                                <Sep10></Sep10>
                                <Rli><Ra href='https://learnku.com/laravel'>
                                <Rimg src='//static2.cnodejs.org/public/images/golangtc-logo.png'></Rimg>
                                </Ra></Rli>
                                <Sep10></Sep10>
                                <Rli><Ra href='https://golangtc.com/'>
                                <Rimg src='//static2.cnodejs.org/public/images/phphub-logo.png'></Rimg>
                                </Ra></Rli>
                            </Rol>
                        </Inner>
                    </Panel>
                    <Panel>
                        <Rheader>
                            <Colfade>客户端二维码</Colfade>
                        </Rheader>
                        <Rerweima>
                            <Rimg2 src='//static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU'></Rimg2>
                            <br></br>
                            <Ra2 href='https://github.com/soliury/noder-react-native'>客户端源码地址</Ra2>
                        </Rerweima>
                    </Panel>
                    
                </Sidebar>
            </React.Fragment>
        )
    }
}

export default Recommend;