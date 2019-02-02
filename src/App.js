import React, { Component } from 'react';
import './App.css';
import Register from './component/AppRegist/index'
import './component/AppRegist/Button.sass'
import './component/AppRegist/Text.sass'


// Css Antd
import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <div> 
          <Register />
      </div>
    );
  }
}

export default App;
