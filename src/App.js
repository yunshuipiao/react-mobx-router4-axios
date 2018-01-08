import React, {Component} from 'react';
import {Provider} from "mobx-react"
import './App.css'
import Home from './component/index'

import CountStore from './mobx/CountStore'
import ChangeNameStore from './mobx/ChangeNameStore'

const countStore = new CountStore();
const changeNameStore = new ChangeNameStore();

const stores = {
    countStore,
    changeNameStore,
}

class App extends Component {
    render() {
        return (
            <Provider {...stores}>
                {/*<div className="App">*/}
                {/*<Home/>*/}
                {/*</div>*/}
                <Home/>
            </Provider>
        );
    }
}

export default App;
