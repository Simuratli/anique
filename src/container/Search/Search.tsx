import React,{useEffect} from 'react'
import { Card } from '../../components'
import { useSelector } from 'react-redux'
import { RandomQuoteState } from '../../redux/reducers/Random/radom.types'
import {useNavigate} from 'react-router-dom'

function Search() {
    let navigate = useNavigate();

    const animeState = useSelector((state: any) => state.searchState.data)
    console.log(animeState, 'animesatte')

    
    useEffect(() => {
        animeState.length === 0 && navigate('/')
        animeState.error && navigate('/')
    }, [animeState])
    

    return (
        <div className='search__container'>
            {
                animeState && !animeState.error && animeState.map((quote: RandomQuoteState) => {
                    return <Card anime={quote} />
                })
            }
        </div>
    )
}

export default React.memo(Search)