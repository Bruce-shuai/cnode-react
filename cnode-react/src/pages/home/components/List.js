import React, { Component }from 'react';
import 
{ 
    ListItem, 
    A, 
    Img,
    Span,
    Replies,
    Seperator,
    TitleWrapper,
    Visits,
    First, 
    Title
} from '../style';
import { connect } from 'react-redux';
// import { Pagination } from 'antd';
class List extends Component {
    render() {
        const {list} = this.props;
        return (
            <React.Fragment>
                {  // 为什么这里有了{}?
                    list.map((item)=>{
                        return (
                        <ListItem key={item.get('id')}>
                            {/* <Img src="https://avatars2.githubusercontent.com/u/958063?v=4&s=120"></Img> */}
                            {/* src={}这种方式来获取变量的地址 */}
                            {/* A标签应该还有个链接，接到user界面 */}
                            <A>
                                <Img src={item.getIn(['author', 'avatar_url'])} title={item.getIn(['author', 'loginname'])}></Img>
                            </A>
                            <Span>
                                <Replies className='count_of_replies' title="回复数">{item.get('reply_count')}</Replies>
                                <Seperator className='count_seperator'> / </Seperator>
                                <Visits className='count_of_visits' title="点击数">{item.get('visit_count')}</Visits>
                            </Span>
                            {/* <A href>
                                <Img>
                                </Img>
                                <Span>
                                </Span>
                            </A> */}
                            {/* <Fist>{item.get('tab')}</Fist> */}
                            <TitleWrapper>
                                <First>
                                {item.get('tab')}
                                </First>
                                <Title>
                                {item.get('title')}
                                </Title>
                            </TitleWrapper>
                            {/* 下面这种方法好像能够获取json文件的某个对象的某个属性 */}
                            {/* {item.getIn(['author', 'avatar_url'])}  */}
                        </ListItem>
                        )
                    })
                }
            </React.Fragment>
        )
    }
}
const mapState = (state) => ({
    list: state.get('home').get('listList')
})
export default connect(mapState, null)(List);