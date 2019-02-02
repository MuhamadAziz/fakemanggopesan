import React, { Component } from 'react';
// antd
import { Row , Col, Form, Icon, Input, Button } from 'antd';
import bgImage from './Asset/Icon/bgImage.jpeg';
import imgMonggo from './Asset/Icon/imgMonggo.jpeg';
import Buttons from './Button/Button'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
       const desc = <h4>Dengan Melakukan Pendaftaran, saya setuju <br/> dengan <span style={{color:'red'}}> Kebijakan Privasi </span> dan Syarat & Ketentuan <br/> monggopesen.com</h4>      
        const desc2 = <h4>Sudah punya akun monggopesen? <a href="#test" style={{color: 'red'}}>Masuk</a></h4>
        return ( 
            <div>
                <Row>
                    <Col span={14}>
                       <img src={bgImage} alt="bgImage" style={{width:'100%'}}/>
                    </Col>  
                    <Col span={10} >
                        <Row type="flex" justify="center">
                            <Col style={jarak1}>
                                <img  src={imgMonggo} alt="imgMonggo"/>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center">
                            <Col style={jarak1}>
                                <h3 style={h3Style}>Daftar Sekarang</h3>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center">
                            <Col style={jarak2}>
                                <Form className="login-form">
                                    <Form.Item className='jarakForm'>
                                        <Input style={text} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                    </Form.Item>
                                    <Form.Item className='jarakForm'>
                                        <Input style={text} prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Email" />
                                    </Form.Item>
                                    <Form.Item className='jarakForm'>
                                        <Input.Password style={text} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                    </Form.Item>
                                    {desc}
                                </Form>
                            </Col> 
                        </Row>   
                        <Row type="flex" justify="center">
                            <Col style={jarak3}>
                                <Button type="primary" className="buttonDaftar">Daftar</Button>
                            </Col> 
                        </Row>     
                        <Row type="flex" justify="center">
                            <Col style={test}>
                                <div style={garis}></div>
                                    <span style={{margin:'5px'}}>atau dengan daftar</span>
                                <div style={garis}></div>
                            </Col> 
                        </Row>     
                        <Row type="flex" justify="center">
                            <Col style={jarak3}>
                                <Buttons/>
                            </Col> 
                        </Row>  
                        <Row type="flex" justify="center">
                            <Col style={jarak3}>
                                {desc2}
                            </Col> 
                        </Row>     
                    </Col>
                </Row>
            </div>
         );
    }
}

const jarak1 = {
    paddingTop: '64px'
}

const garis = {
    height: '1px',
    width: '90px',
    backgroundColor: 'grey',
}

const jarak2 = {
    paddingTop: '32px'
}

const jarak3 = {
    paddingTop: '16px'
}


const test = {
    display: 'flex',
    paddingTop: '16px',
    justifyContent: 'center',
    alignItems: 'center'


}

const text = {
    height: '48px',
    width: '360px',
    borderRadius: '4px',
    backgroundColor: '#007E80'
}

const h3Style = {
    color: 'rgba(0, 166, 166)',
    fontWeight: '600'
}
export default Register;