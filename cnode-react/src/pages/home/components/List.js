import React, { Component }from 'react';
import { ListItem } from '../style';
import { connect } from 'react-redux';
class List extends Component {
    render() {
        const {list} = this.props;
        return (
            <React.Fragment>
                {
                    list.map((item)=>{
                        return (
                        <ListItem key={item.get('id')}>
                            {item.get('tab')}
                            {item.get('title')}
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