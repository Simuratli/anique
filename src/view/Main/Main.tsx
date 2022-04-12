import React from 'react'
import { Navbar } from '../../components'
import {Random} from '../../container'

function Main() {
    return (
        <div className='main'>
            <div className="main__container">
                <Navbar/>
                <Random/>
            </div>
        </div>
    )
}

export default React.memo(Main)