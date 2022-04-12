import React from 'react'
import { Navbar } from '../../components'
import { Random, SearchPage } from '../../container'
import { Routes, Route } from 'react-router-dom'

function Main() {
    return (
        <div className='main'>
            <div className="main__container">
                <Navbar />
                <Routes>
                    <Route path='/' element={<Random />} />
                    <Route path='/search' element={<SearchPage />} />
                </Routes>
            </div>
        </div>
    )
}

export default React.memo(Main)