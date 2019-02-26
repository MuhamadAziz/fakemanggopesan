import React, { Component } from 'react';
import PropTypes from 'prop-types'; //  Untuk mengecek tipe PRops
import Student from './Student';
import {Consumer} from '../context';

class Students extends Component {
    // constructor(props) {
    //     super(props);
    //     // State-> lahan untuk menyimpan  string , props 
    //     this.state = { 
           
    //      }
    // }

    // // Delete
    // onDeleteStudent = id => {
    //     // array lama
    //    const { students } = this.state
    // //    manambah array Baru = array yang lama
    //    const  newStudents = students.filter(student => student.id !== id )

    // //    memasukan array lama menggati array baru
    //    this.setState({
    //        students: newStudents
    //    })
    // }
    render() { 
        // cara mengambiil props dari class harus menggunakan THIS karena 

        // const namanya distraction

        return ( 
            <Consumer>
                {value => {
                    const {students} = value
                    return(
                    <div>
                        {students.map(student => (
                            <Student
                                key = {student.id}
                                student = {student}
                                // deleteData = {this.onDeleteStudent.bind(this , student.id)}
                            />
                        ))}
                    </div>
                    )
                }}
            </Consumer>
          
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