// form header namanya function component karena tidak menggunakan class dan karena header ini statis
import React from 'react';
// import './Header.sass'

// antd
import { Link } from 'react-router-dom'
import { userLogout } from '../../store/actions/authActions'
import { Layout, Menu } from 'antd';
import {connect} from 'react-redux';

const { Header } = Layout;


// propsnya dimasukin ke parameter
// Props tidak mengungaknan THIS karena header ini bukan menggunakan class component
const NavBar = props => {
    const { isAuth } = props.auth
    const { userLogout } = props
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
                    <Menu.Item key="2"><Link to="/home">Home</Link></Menu.Item>
                    <Menu.Item><Link to="/student/add">Add Student</Link></Menu.Item>
                    <Menu.Item ><Link to="/about">About</Link></Menu.Item>
                    <Menu.Item onClick={ isAuth ? () => userLogout() : () => {}} key="3"><Link to={isAuth ? "/login" : "/login"}>{ isAuth ? "Logout" : "Login" }</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/register">register</Link></Menu.Item>
                </Menu>
            </Header>
        </Layout>
    );
}

Header.defaultProps = {
    title: "student's lst"
}
const mapStateToProps = state => ({
    auth: state.auth.auth
});

export default connect(mapStateToProps, { userLogout })(NavBar) 