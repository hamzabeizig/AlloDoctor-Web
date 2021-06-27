import React, { useState } from 'react';
import './App.css';
import {Layout, Avatar, Menu, Breadcrumb, Button, Dropdown, Row, Col} from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import Icon, {ContainerFilled} from '@ant-design/icons';
import logo from '../Images/Logo3.png';

import hamza from '../Images/hamza.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import PageYYY from "./PageYYY";
import PageYY from "./PageYY";
import PageY from "./PageY";
import ReactSearchBox from 'react-search-box';
import RightCompo from "./RightCompo";
import Container from "reactstrap/lib/Container";
import SignUp from "./OutsideDash/SignUp";
import SignIn from "./OutsideDash/SignIn";
var w = window.innerWidth
var h = window.innerHeight
var bgColor = 'white'
const { Header, Footer, Sider, Content } = Layout;


export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            data: ["hamza",'beizig'],
            bgColor: "green"
        }
    }
    data = [
        {
            key: 'Beizig',
            value: 'Beizig Hamza',
        },
        {
            key: 'Achref',
            value: 'Ben fredj Achref',
        },
        {
            key: 'Mohammed',
            value: 'Ben ali Mohammed',
        },
        {
            key: 'Sihem',
            value: 'Ben fatma Sihem',
        },
        {
            key: 'Mounira',
            value: 'Trabelsi Mounira ',
        },
    ]


    render() {
        return (
            <div className={'App'} >

                <Layout >

                    <Header style={{zIndex:2,padding:1 , height:h/10,backgroundColor:'white',borderColor:'grey',borderWidth:1,alignItems:'center'}}>

                        <Row  style={{flexDirection:'row',height:h/10,padding:1 ,backgroundColor:'white',borderColor:'grey',borderWidth:1,alignItems:'center'}} >
                            <div style={{height:h/10,paddingTop: 10,width:w/2,backgroundColor:'white',borderColor:'grey',borderWidth:1,alignItems:'center'}}>
                            <Title level={2} style={{paddingLeft: w/100 ,float:'left',alignSelf:'center',color:'gray'}} >AlloDoctor</Title>
                            </div>
                            <div style={{marginLeft:w/9,position:'relative',height:h/11,paddingTop: 10,width:w/5,backgroundColor:'white',borderColor:'grey',borderWidth:1,alignItems:'center'}}>
                            <ReactSearchBox
                                placeholder="Rechercher"
                                data={this.data}
                            />
                            </div>
                            <div style={{position:'relative',height:h/11,width:w/6,backgroundColor:'white',alignItems:'center'}}>
                              <RightCompo/>
                            </div>
                            </Row>
                    </Header>
                    <Layout>


                        <Router>
                            <Sider style={{backgroundColor:'#1A94E5'}}>

                                <div>

                                    <Menu   theme={'light'}
                                        defaultSelectedKeys={['Dashboard']}
                                        mode="inline"
                                        style={{backgroundColor:'#1A94E5' ,marginTop:h/10}}>


                                        <Menu.Item  style={{backgroundColor:'#177ec4'}} >
                                            <Link  to="/Dashboard"> <span className={'text0'} >Home</span></Link>
                                        </Menu.Item>

                                        <Menu.Divider style={{height:h/20,backgroundColor:'#1A94E5'}}/>


                                        <Menu.Item  style={{ backgroundColor:'#177ec4'}} >
                                            <Link  to="/Agenda"> <span className={'text0'} >Agenda</span></Link>
                                        </Menu.Item>
                                        <Menu.Item  style={{backgroundColor:'#177ec4'}} >
                                            <Link  to="/Gestionagenda"> <span className={'text0'} >Gestion Agenda</span></Link>
                                        </Menu.Item>

                                        <Menu.Item  style={{backgroundColor:'#177ec4'}} >
                                            <Link  to="/page3"> <span className={'text0'} >Mes rendez-vous</span></Link>
                                            </Menu.Item>




                                    </Menu>


                                </div>

                            </Sider>

                            <Layout style={{zIndex:1}}>

                                <Content className={'contt'}>

                                    <Switch>
                                        <Route path="/Dashboard">
                                            <PageYYY/>
                                        </Route>
                                        <Route path="/Agenda">
                                            <PageY  />
                                        </Route>
                                        <Route path="/Gestionagenda">
                                            <PageYY/>
                                        </Route>
                                        <Route path="/page4">
                                            <Page4/>
                                        </Route>
                                        <Route path="/page2">
                                            <Page2 />
                                        </Route>
                                        <Route path="/page3">
                                            <Page3 />
                                        </Route>


                                    </Switch>
                                </Content>
                            </Layout>

                        </Router>

                    </Layout>

                </Layout>
                <Layout >


                </Layout>
            </div>

        );
    }
}




