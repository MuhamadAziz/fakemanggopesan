import React, { Component } from 'react';

import { Form, Input } from 'antd';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            name: '',
            phone: ''
         }
    }

    handleSubmit = () => {
        // const { onAdd } = this.props;
        // e.preventDefault();
        // this.props.form.validateFields((err, values) => {
        //     if(!err) {
        //         dispatch({type: 'ADD_STUDENT', payload: this.state})
        //         onAdd();
        //     }
        // })
    }
    render() { 
        return ( 

                        <div>
                            <Form onSubmit = {(e) => this.handleSubmit()} className="add-form">
                                <h2>Add Student</h2>
                                <Form.Item>
                                    {/* {getFieldDecorator('name', {
                                        rules: [{ required: true, message: 'Please Input Your Name'}],
                                    })}( */}
                                        <Input />
                                    {/* ) */}
                                </Form.Item>
                                <Form.Item>
                                    {/* {getFieldDecorator('phone', {
                                        rules: [{ required: true, message: 'Please Input Your Phone'}],
                                    })}( */}
                                        <Input />
                                    {/* ) */}
                                </Form.Item>
                                <Form.Item>
                                    {/* {getFieldDecorator('email', {
                                        rules: [{ required: true, message: 'Please Input Your Email'}],
                                    })}( */}
                                        <Input />
                                    {/* ) */}
                                </Form.Item>
                            </Form>
                        </div>

        );
    }
}
 
export default Add;