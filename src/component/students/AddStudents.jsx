import React, { Component } from 'react';
import { Consumer } from "../../context";
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';
import Password from 'antd/lib/input/Password';
import { error } from 'util';

class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            errors: {}

        }
    }

    // fungsi onchange
    onChange = e => this.setState({
        [e.target.name]: e.target.value
    })

    onSubmit = (dispatch,e) => {
        e.preventDefault();
        console.log(this.state)
        
        const { name, email, phone } = this.state;

        // konesep react yang lama ganti yang baru 

        const newStudetns = {
            id: uuid(),
            name,
            email,
            phone,
        }
        dispatch({type:'ADD_STUDENT',payload: newStudetns})

        if(name === ''){
            this.setState({ errors: {name: 'Name is required'}})
            return;
        }

        if(email === ''){
            this.setState({ errors: {email: 'Email is required'}})
            return;

        }

        if(phone === ''){
            this.setState({ errors: {phone: 'Phone is required'}})
            return;

        }
// Clear state
        this.setState({
            name: '',
            email: '',
            phone: ''
        })
    }

    render() {
        // dispatch = melempar dari value
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    return (
                        <div>
                            <div>ADD FORM</div>
                            <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                <TextInputGroup
                                    type='text'
                                    label='Name'
                                    name='name'
                                    placeholder='Engter Name'
                                    value={name}
                                    onChange={this.onChange}
                                    error= {errors.name}

                                />
                                 <TextInputGroup
                                    type='text'
                                    label='Email'
                                    name='email'
                                    placeholder='Engter email'
                                    value={email}
                                    onChange={this.onChange}
                                    error= {errors.email}
                                />
                                 <TextInputGroup
                                    type='text'
                                    label='Phone'
                                    name='phone'
                                    placeholder='Engter Phone'
                                    value={phone}
                                    onChange={this.onChange}
                                    error= {errors.phone}

                                />
                                
                                <input type="submit" value="submit" />
                            </form>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddStudent;