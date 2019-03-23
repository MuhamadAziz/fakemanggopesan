import React, { Component } from 'react';
import { Card, List, Icon} from 'antd';
import axios from 'axios'
import {Link} from 'react-router-dom'
import {deleteStudent} from '../../store/actions/studentActions'
import { connect } from 'react-redux';

class Student extends Component {
    constructor(props) {
        super(props);
        this.onShowToggle = this.onShowToggle.bind(this);
        this.state = { 
            collapse: false
        }
    }

    onShowToggle() {
        this.setState({ 
            collapse: !this.state.collapse 
        });
    }

    onDelete = id => {
        this.props.deleteStudent(id)
    }


    // onEdit = (id, dispatch) => {
    
    //     // console.log(response)
    // }

    render() {  

        // distructor
        const {name, phone, email, id} = this.props.student
        const { collapse } = this.state
        // console.log(student)
        return (
                        <div style={{backgroundColor: '#ECCECEC', padding: '30px'}}>
                            <Card bordered style={{ width: 800 }}>
                                <div style={{display:'flex'}}>
                                    <h1>{name}</h1>
                                    <Icon type="down"  onClick={this.onShowToggle}/>
                                    <Icon type="delete" onClick={this.onDelete.bind(this, id)} />
                                    <Link to={`student/edit/${id}`}>  
                                        <Icon type="edit"  />
                                    </Link>
                                </div>
                                {collapse ? (
                                        <List>
                                            <li>{email}</li>
                                            <li>{phone}</li>
                    
                                        </List>
                                )
                        
                                : null}
                            
                            </Card> 
            
                        </div>
    
           
         );
    }
}

export default connect(null, {deleteStudent})(Student);