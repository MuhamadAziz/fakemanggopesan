// form header namanya function component karena tidak menggunakan class dan karena header ini statis
import React from 'react';
// import './Header.sass'

// antd
import { Row , Col } from 'antd';



// propsnya dimasukin ke parameter
// Props tidak mengungaknan THIS karena header ini bukan menggunakan class component
const Header = props => {
    return ( 
        <div>
            <Row>
                <Col span={12}>
                    <h1 className='header'>{props.title}</h1>
                </Col>  
                <Col span={12}>
                    <p>Home</p>
                </Col>
            </Row>
        </div>
     );
}

Header.defaultProps = {
    title: "Students' List"
}

const StylingHeader = {
    color: 'green',
    fontSize: '20px'
}
 
export default Header;