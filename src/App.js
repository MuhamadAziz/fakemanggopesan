import React, { Component } from 'react';
import './App.css';
// import Register from './component/AppRegist/index'
import NavBar from './component/layout/Header';
import Students from './component/students/Students';
import {Provider} from './context';
import AddStudent from './component/students/AddStudents'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './component/pages/about'
// import Categories from './component/Categories';

// Css Antd
import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div> 
            <NavBar title="student's lst" />
            <Switch>
              <Route exact path='/' component={Students}/>
              <Route exact path='/student/add' component={AddStudent}/>
              <Route exact path='/about' component={About}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
