import React, { Component } from 'react';
import PropTypes from 'prop-types'; //  Untuk mengecek tipe PRops
import Student from './Student';
import {connect} from 'react-redux'
import {getStudents} from '../../store/actions/studentActions'


class Students extends Component {
 
    componentDidMount() {
        this.props.getStudents();
    }
    render() { 
    
        const { students } = this.props 
        return ( 
            
                    <div>
                        {students.map(student => (
                            <Student
                                key = {student.id}
                                student = {student}
                                // deleteData = {this.onDeleteStudent.bind(this , student.id)}
                            />
                        ))}
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

const mapStateToProps = (state) => ({
    students: state.student.students
})
// students dapat dari state studnt reducer 
// student di ambil dari main reducer

export default connect(mapStateToProps, {getStudents})(Students)