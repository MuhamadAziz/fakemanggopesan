import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';
import { connect } from 'react-redux';
import {addStudents} from '../../store/actions/studentActions'

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

    onSubmit = async() => {
        // e.preventDefault();
        console.log(this.state)
        
        const { name, email, phone } = this.state;

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

        const newStudent = {
            name,
            email,
            phone
        }

          // Fungsi Add 
          this.props.addStudents(newStudent);

// Clear state
        this.setState({
            name: '',
            email: '',
            phone: ''
        })
    
      
    // Redirect
    this.props.history.push("/") 
    }

    render() {
        // dispatch = melempar dari value
        const { name, email, phone, errors } = this.state;
        return (
    
                        <div>
                            <div>ADD FORM</div>
                            <form onSubmit={this.onSubmit}>
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
    }
}

export default connect(null, {addStudents})(AddStudent);