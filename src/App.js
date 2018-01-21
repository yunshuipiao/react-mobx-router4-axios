import React, {Component} from 'react';
import {Provider} from "mobx-react"
import './App.css'
import Home from './component/index'
import {BrowserRouter} from 'react-router-dom'

import countStore from './mobx/CountStore'
import changeNameStore from './mobx/ChangeNameStore'
import routerStore from './mobx/RouterStore'


const stores = {
    countStore,
    changeNameStore,
    routerStore,
}

class App extends Component {
    render() {
        return (
            <Provider {...stores}>
                <BrowserRouter>
                    <div className="App">
                        <Home/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
