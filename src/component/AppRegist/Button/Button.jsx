import React, { Component } from 'react';
import { Button, Col, Row } from 'antd';

class Buttons extends Component {
    state = {  }
    render() { 
        return ( 
            <Row type="flex" justify="center" gutter={15}>
                <Col span={12}>
                    <Button icon="google" style={button}>Google</Button>
                </Col> 
                <Col span={12}>
                    <Button icon="facebook" style={button}>Facebook</Button>
                </Col> 
            </Row>     
         );
    }
}
 
const button = {
    width: '160px',
    height: '48px',
    padding: '10px'
}
export default Buttons;