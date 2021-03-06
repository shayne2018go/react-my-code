import React, { Component } from "react";
import {Link} from "react-router-dom";
import {Menu,Icon} from "antd";

export default class Nav extends Component {
    
    render (){
        let {mode,id} = this.props;
        return (
            <Menu mode={mode} theme="light" id={id}>
                <Menu.Item>
                    <Link to="/index/all"><Icon type="home"></Icon>首页</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/book"><Icon type="book"></Icon>教程</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/about"><Icon type="info-circle-o"></Icon>关于</Link>
                </Menu.Item>
            </Menu>
        )
    }
}
