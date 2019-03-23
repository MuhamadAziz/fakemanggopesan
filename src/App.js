import React, { Component } from 'react';
import './App.css';
// import Register from './component/AppRegist/index'
import NavBar from './component/layout/Header';
import formlogin from './component/login/login';
import Register from './component/register/register';
import Students from './component/students/Students';
import AddStudent from './component/students/AddStudents'
import EditStudent from './component/students/EditStudents'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './component/pages/about'
import NotFound from './component/pages/NotFound'
import {Provider} from 'react-redux'
import store from './store/store'
// import Categories from './component/Categories';

// Css Antd
import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div> 
            <NavBar title="student's lst" />
            <Switch>
              <Route exact path='/login' component={formlogin}/>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/home' component={Students}/>
              <Route exact path='/student/add' component={AddStudent}/>
              <Route exact path='/student/edit/:id' component={EditStudent}/>
              <Route exact path='/about' component={About}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
