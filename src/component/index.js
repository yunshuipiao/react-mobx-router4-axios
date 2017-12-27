import React from 'react'
import './index.less'
import {Button} from 'antd'
import {observer} from 'mobx-react'
import demoStore from '../mobx/index'


const Home = observer( () => {
    return (
        <div className='Home'>
            <div>{demoStore.startNum}</div>
            <div>{demoStore.startNum}</div>
            <div className="buttons">
                <Button type="primary" className="btn" onClick={() => {
                    demoStore.inc()
                }}>inc</Button>
                <Button type="primary" className="btn" onClick={() => {
                    demoStore.dec()
                }}>dec</Button>
                <Button type="primary" className="btn" onClick={() => demoStore.reset()}>reset</Button>
            </div>
        </div>
    );
} )

export default Home