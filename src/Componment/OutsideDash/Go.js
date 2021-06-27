import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import '../App.css';
import React from "react";
import {Layout, Avatar, Menu, Breadcrumb, Button, Dropdown, Row, Col} from 'antd';
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Dashboard from "../Dashboard";
var w = window.innerWidth
var h = window.innerHeight
const { Header, Footer, Sider, Content } = Layout;

export default class Go extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
        return (
            <div className={'Appfirst'} >

                <Router>
                            <Switch>
                                        <Route path="/Dashboard">
                                            <Dashboard />
                                        </Route>
                                        <Route path="/SignUp">
                                            <SignUp />
                                        </Route>
                                        <Route path="/">
                                            <SignIn />
                                        </Route>
                             </Switch>
                        </Router>
            </div>
        );
    }
}




