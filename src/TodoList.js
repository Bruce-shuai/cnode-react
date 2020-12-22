import React, { Component } from 'react';
import { Input, Button, List, Typography, Divider } from 'antd';
import store from './store';
import 'antd/dist/antd.css';
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        //  下面这个方法是将数据从store返回到组件这个步骤
        store.subscribe(this.handleStoreChange);  // 这句话的意思是只要store的内容发生改变，handleStoreChange就会执行一次
    }
    render(){
        return(  // 只写一个()
            <div style={{marginTop: '5px', marginLeft: '5px'}}>
                <div>
                <Input 
                    placeholder="Todolist" 
                    style={{width:'300px', marginRight: '8px'}}  // 记住：这里写属性的话，要两个{}
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />
                <Button type="primary" onClick={this.handleBtnClick}>确定</Button>
                </div>
                <List
                    style={{width: '300px', marginTop: '5px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (
                    <List.Item onClick={this.handleItemDelete.bind(this, index)}>
                     {item}
                    </List.Item>
                )}
                />
            </div>
        )
    }
    // 这里没有function--->为啥呢？  好像class类的方法都是这样
    handleInputChange(e) {
        // action 是一个对象的形式，这相当于组件已经创建了action
       const action = {
        //type 告诉redux要做什么事,这个type的内容应该是任意的吧？
           type: CHANGE_INPUT_VALUE,
           value: e.target.value
       }
    //    现在将action通过dispatch传递给store
    store.dispatch(action);
    // 之后store就会自动将之前的previousState(就之前的数据)和action传递给Reducers
    }
    // 这个方法用来更新状态
    handleStoreChange() {
        // 这是从store里重新获得数据，然后用setState替换之前的数据
        this.setState(store.getState());
    }

    handleBtnClick() {
        const action = {
            type: ADD_TODO_ITEM    
        };
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action = {
            type: DELETE_TODO_ITEM,
            index
        }
        store.dispatch(action);
    }
}

export default TodoList;