// form header namanya function component karena tidak menggunakan class dan karena header ini statis
import React from 'react';
// import './Header.sass'

// antd
import { Link } from 'react-router-dom'
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
                    <Menu.Item key="2"><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item><Link to="/student/add">Add Student</Link></Menu.Item>
                    <Menu.Item ><Link to="/about">About</Link></Menu.Item>
                </Menu>
            </Header>
        </Layout>
    );
}

Header.defaultProps = {
    title: "student's lst"
}
 
export default NavBar;