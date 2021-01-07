import React, { Component } from 'react';
import 
{
    FooterWrapper,
    FooterMain,
    Links,
    A,
    ColFade,
    P,
    Img
} from './style.js';
class Footer extends Component {
    render(){
        return (
            <FooterWrapper>
                <FooterMain>
                    <Links>
                    <A>RSS</A>
                    {" | "}
                    <A href="https://github.com/cnodejs/nodeclub/</Links>">源码地址</A>
                    </Links>
                    <ColFade>
                    <P>
                        CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。
                    </P>
                    <P>
                        服务器搭建在
                        <A href="https://www.digitalocean.com/?refcode=eba02656eeb3">
                            <Img src="//static2.cnodejs.org/public/images/digitalocean.png"></Img>
                        </A>
                        ，存储赞助商为
                        <A href="https://www.qiniu.com/?ref=cnode">
                            <Img src="//static2.cnodejs.org/public/images/qiniu.png"></Img>
                        </A>
                    </P>
                    <P>
                    新手搭建 Node.js 服务器，推荐使用无需备案的 
                    <A href="https://www.digitalocean.com/?refcode=eba02656eeb3"> DigitalOcean(https://www.digitalocean.com/)</A>
                    </P>
                    </ColFade>
                </FooterMain>
            </FooterWrapper>
        )
    }
}

export default Footer;

