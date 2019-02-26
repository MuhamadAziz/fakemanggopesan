import React, { Component } from 'react';
import Category from './Category'
import {Consumer} from '../context';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <Consumer>
                    {item => {
                        return(
                            <div>
                                <Category 
                                    data = {item.categories}
                                />
                            </div>
                        )
                    }}
                </Consumer>
            </React.Fragment>
         );
    }
}
 
export default Categories;