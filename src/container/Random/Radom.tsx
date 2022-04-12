/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useCallback, useState } from 'react'
import { getRandomQuote } from '../../api'
import { setRandomData } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import RandomContent from './Random.Content'
import RandomSkeleton from './Random.skeleton'

function Random() {
    const dispatch = useDispatch()
    const randomQuote = useSelector((state: any) => state.randomState)
    const [loader, setloader] = useState(false)

    let getData = useCallback(
        async () => {
            setloader(true)
            let data = await getRandomQuote()
            dispatch(setRandomData(data))
            setloader(false)
        },
        [],
    )

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='random'>
            {
                !loader
                    ?
                    <RandomContent
                        anime={randomQuote.anime}
                        character={randomQuote.character}
                        quote={randomQuote.quote}
                        getData={getData}
                    />
                    :
                    <RandomSkeleton getData={getData} />
            }
        </div>
    )
}

export default React.memo(Random)