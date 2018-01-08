import React from 'react'
import './index.less'
import {observer} from 'mobx-react'
import Count from './Count/index'
import ChangeName from './Change/index'



const Home = observer(() => {
    return (
        <div className='Home'>
            <Count />
            <ChangeName />
        </div>
    );
})


export default Home