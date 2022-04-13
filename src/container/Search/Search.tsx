import React,{useEffect} from 'react'
import { Card } from '../../components'
import { useSelector } from 'react-redux'
import { RandomQuoteState } from '../../redux/reducers/Random/radom.types'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Search() {
    let navigate = useNavigate();

    const animeState = useSelector((state: any) => state.searchState.data)
    console.log(animeState, 'animesatte')

    
    useEffect(() => {
        
        if(animeState.error){
            toast(animeState.error)
            navigate('/')
        }

        if(animeState.length === 0){
            navigate('/')
            toast("You should search first!")
        }


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