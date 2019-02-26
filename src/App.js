import React, { Component } from 'react';
import './App.css';
// import Register from './component/AppRegist/index'
import NavBar from './component/Header';
import Students from './component/Students';
import {Provider} from './context';
import Categories from './component/Categories';

// Css Antd
import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div> 
          {/* <NavBar title="student's lst" /> */}
          <Categories/>
          {/* <Students/> */}
        </div>
      </Provider>
    );
  }
}

export default App;
