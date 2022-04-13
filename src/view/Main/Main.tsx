import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components'
import { Random, SearchPage } from '../../container'
import { Routes, Route } from 'react-router-dom'
import { wallpaper } from './background'
import { useSelector } from 'react-redux'

function Main() {

    const randomState = useSelector((state: any) => state.randomState)
    const [randomNumber, setrandomNumber] = useState(1)
    useEffect(() => {
        let random = Math.random() * 30
        random = Number(random.toFixed(0))
        setrandomNumber(random)
    }, [randomState])



    return (
        <div className='main' style={{ backgroundImage: `url(${wallpaper[randomNumber]})` }}>
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