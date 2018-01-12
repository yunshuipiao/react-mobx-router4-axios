import React, {Component} from 'react';
import {Provider} from "mobx-react"
import './App.css'
import Home from './component/index'

import countStore from './mobx/CountStore'
import changeNameStore from './mobx/ChangeNameStore'


const stores = {
    countStore,
    changeNameStore,
}

class App extends Component {
    render() {
        return (
            <Provider {...stores}>
                <div className="App">
                    <Home/>
                </div>
            </Provider>
        );
    }
}

export default App;
