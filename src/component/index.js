import React from 'react'
import './index.less'
import {observer, inject} from 'mobx-react'
import Count from './Count/index'
import ChangeName from './Change/index'
import Main from './antd-main/index'
import {Button} from 'antd'
import agent from '../httpSer/agent'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'

class Hello extends React.Component {
    constructor(props) {
        super(props)
        console.log("constructor")
        this.state = {
            age: 0
        }
    }

    componentWillMount() {
        console.log("componentWillMount")
    }

    render() {
        console.log("render")
        return (
            <div className='Hello'>
                <div>{this.props.name}</div>
                <div>{this.state.age}</div>
                <Button type="primary" onClick={() =>
                    this.setState({
                        age: this.state.age === 0 ? 111 : 0
                    })}
                >Click</Button>
            </div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentWillReceiveProps() {
        console.log("componentWillReceiveProps")
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        return true
    }

    componentWillUpdate() {
        console.log("componentWillUpdate")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    componentDidCatch() {
        console.log("componentDidCatch")
    }
}

const Coroutine = () => {
    return (
        <div className="Coroutine">
            <Button type="primary" onClick={click_button}>CoroutineTest</Button>
        </div>
    );
}

const click_button = () => {
    agent.Movies.all()
        .then(res => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(console.log("finally always invoked"))
}


// const Home = observer(() => {
//     return (
//         <div className='Home'>
//             <Count/>
//             <ChangeName/>
//             <Hello name="wen"/>
//             <Coroutine/>
//         </div>
//     );
// })
@withRouter
@inject("routerStore")
@observer
class Home extends React.Component {
    constructor(props) {
        super(props)
        // 没有super(props), 后面使用回报错
        // 定义state
        // bind方法
        // 其他初始化工作
        this.props.routerStore.history = this.props.history


        // 第二种方法
        // // Add a response interceptor
        // instance.interceptors.response.use( (response) => {
        //     // 返回错误判断
        //     console.log("filter error code")
        //     // 判断如果需要登录，routerStore.history.replace("/login")
        //     // routerStore.history.replace("/login")
        //     return response;
        // },  (error) => {
        //     // 可以在后面的请求中catch
        //     console.log("interceptors response error")
        //     return Promise.reject(error);
        // });

    }

    componentWillMount() {
        // 服务器渲染的唯一hook
    }

    componentDidMount() {
        // 可以调用setState， render Component
    }

    render() {
        return (
            <div className="Home">
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" component={Main}/>
                    <Redirect to={"/"}/>
                </Switch>
            </div>
        );
    }
}

const Login = () => {
    return(
        <div>login</div>
    );
}


export default Home