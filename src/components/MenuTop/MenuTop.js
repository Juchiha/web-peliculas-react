import React from 'react';
import {Menu} from 'antd';
import { Link } from 'react-router-dom';
import {ReactComponent  as Logo} from '../../assets/img/logo.svg';


import './MenuTop.scss';

export default function MenuTop(){
    return (
        <div className="menu-top">
            <div className="menu-top__logo">
                <Logo/>
            </div>
            <Menu 
                theme="dark" 
                mode="horizontal" 
                defaultSelectedKeys={["1"]}
                style={{ lineHeight:"64px" }}>

                <Menu.Item key="1">
                    <Link to="/">Inicio</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/new-movies">Estrenos</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/popular">Populares</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/search">Busqueda</Link>
                </Menu.Item>
            </Menu>
        </div>
    );
}