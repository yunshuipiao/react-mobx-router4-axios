import React from 'react'
import './index.less'
import {Button} from 'antd'
import {observer, inject} from 'mobx-react'

const Count = inject('countStore')(observer(( {countStore}) => {
    return (
        <div className='Count'>
            <div>{countStore.startNum}</div>
            <div>{countStore.startNum}</div>
            <div className="buttons">
                <Button type="primary" className="btn" onClick={() =>
                    countStore.inc()
                }>inc</Button>
                <Button type="primary" className="btn" onClick={() =>
                    countStore.dec()
                }>dec</Button>
                <Button type="primary" className="btn" onClick={() =>
                    countStore.reset()
                }>reset</Button>
            </div>
        </div>
    );
}))

export default Count;