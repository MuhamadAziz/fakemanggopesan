import React, { Component } from 'react';
// antd
import { Row , Col } from 'antd';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Row>
                    <Col span={14}>
                       <p>untuk Image</p>
                    </Col>  
                    <Col span={10}>
                        <p>Home</p>
                    </Col>
                </Row>
            </div>
         );
    }
}
 
export default Body;