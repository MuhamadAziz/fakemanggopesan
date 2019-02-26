import React, { Component } from 'react';
import { Card, List, Icon} from 'antd';
import {Consumer} from '../context';

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

    onDelete = (id, dispatch) => {
       dispatch({type: 'DELETE_STUDENT', payload: id})
    }

    render() { 

        // distructor
        const {name, phone, email, id} = this.props.student
        const { collapse } = this.state
        // console.log(student)
        return ( 
            <Consumer>
                {value => {
                    const {dispatch} = value
                    return (
                        <div style={{backgroundColor: '#ECCECEC', padding: '30px'}}>
                            <Card bordered style={{ width: 800 }}>
                                <div style={{display:'flex'}}>
                                    <h1>{name}</h1>
                                    <Icon type="down"  onClick={this.onShowToggle}/>
                                    <Icon type="delete" onClick={this.onDelete.bind(this, id, dispatch)} />
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
                    )
                }}
            </Consumer>
           
         );
    }
}
 
export default Student;