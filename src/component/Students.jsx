import React, { Component } from 'react';
import PropTypes from 'prop-types'; //  Untuk mengecek tipe PRops

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        // cara mengambiil props dari class harus menggunakan THIS karena 

        // const namanya distraction
        const { name, email, phone } = this.props;
        return ( 
            <div>
                <h1>{name}</h1>
                <ul>
                    <li>{email}</li>
                    <li>{phone}</li>
                </ul>
            </div>
        );
    }
}

// bentuk props: stirng, number, object
Students.propTypes = {
    name: PropTypes.string.isRequired,
    email:  PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
}

export default Students;