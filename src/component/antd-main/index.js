import React from "react";
import {Layout, Menu, Button} from 'antd'
import {Link, Route, Switch, Redirect, withRouter} from "react-router-dom"
import './index.less'

const {Header, Content, Sider, Footer} = Layout;

const MyHeader = () => {
    return (
        <Header className='main-header'>
            header
        </Header>
    );
}

const MyFooter = () => {
    return (
        <Footer className='main-footer'>
            footer
        </Footer>
    );
}

const Demo1 = () => {
    return (
        <div>
            demo1
        </div>
    );
}

const Demo2 = () => {
    return (
        <div>
            demo2
        </div>
    );
}

const Demo3 = () => {
    return (
        <div>
            demo3
        </div>
    );
}

const RightContent = () => {
    return (
        <div>
            <Content>
                <Switch>
                    <Route path="/1" component={Demo1}/>
                    <Route path="/2" component={Demo2}/>
                    <Route path="/3" component={Demo3}/>
                    <Redirect to="/1"/>
                </Switch>
            </Content>
        </div>
    );
}

const LeftSider = withRouter(({history}) => {
    return (
        <Sider>
            <Menu
                mode="inline"
                defaultSelectedKeys={['/1']}
                selectedKeys={[history.location.pathname]}
            >
                <Menu.Item key="/1">
                    <Link to="/1"/>
                    option1
                </Menu.Item>
                <Menu.Item key="/2">
                    <Link to="/2"/>
                    option2
                </Menu.Item>
                <Menu.Item key="/3">
                    <Link to="/3"/>
                    option3
                </Menu.Item>
            </Menu>
        </Sider>

    );
} )

class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <Layout className='main-layout'>
                    <MyHeader/>
                    <Layout>
                        <LeftSider/>
                        <RightContent/>
                    </Layout>
                    <MyFooter/>
                </Layout>
            </div>
        );
    }
}


export default Main;