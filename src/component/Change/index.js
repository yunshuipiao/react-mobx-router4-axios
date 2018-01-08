import React from 'react'
import './index.less'
import {Button} from 'antd'
import {observer, inject} from 'mobx-react'


const ChangeName = inject("changeNameStore")(observer( ( {changeNameStore} ) => {
    return (
        <div className='Change'>
            <div>{changeNameStore.name}</div>
            <div className="buttons">
                <Button type="primary" className="btn" onClick={() =>
                    changeNameStore.changeName()
                }>change</Button>
            </div>
        </div>
    );
}))

export default ChangeName;