import React, { Component } from 'react';
import 
{ 
    Pagination,
    Ul,
    Li,
    Pa
} from '../style';
class Paginate extends Component {
    render() {
        return (
            <Pagination>
                    <Ul>
                        <Li className='disabled'><Pa>«</Pa></Li>
                        <Li className='disabled'><Pa>1</Pa></Li>
                        <Li><Pa>2</Pa></Li>
                        <Li><Pa>3</Pa></Li>
                        <Li><Pa>4</Pa></Li>
                        <Li><Pa>5</Pa></Li>
                        <Li><Pa>...</Pa></Li>
                        <Li><Pa>»</Pa></Li>
                    </Ul>
            </Pagination>
        )
    }
}
export default Paginate;