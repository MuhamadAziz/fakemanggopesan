// form header namanya function component karena tidak menggunakan class dan karena header ini statis
import React from 'react';
// import './Header.sass'

// antd
import { Layout, Menu } from 'antd';
const { Header } = Layout;


// propsnya dimasukin ke parameter
// Props tidak mengungaknan THIS karena header ini bukan menggunakan class component
const NavBar = props => {
    return ( 
        <Layout className="layout">
            <Header>
                    <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">{props.title}</Menu.Item>
                    <Menu.Item key="2">Home</Menu.Item>
                   
                </Menu>
            </Header>
      </Layout>
     );
}

Header.defaultProps = {
    title: "student's lst"
}
 
export default NavBar;