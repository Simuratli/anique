/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react'
import { SearchPorpTypes } from './search.types'
import { search } from '../../api'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchResponse, setSearchText } from '../../redux/actions'
import Loader from '../Loader'
import { useNavigate } from "react-router-dom";

function Search({ open, setOpen }: SearchPorpTypes) {
    const searchState = useSelector((state: any) => state.searchState.text)
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    
    const runSearchFunction = useCallback(
        async () => {
            setLoading(true)
            let response = await search(searchState.trim())
            dispatch(setSearchResponse(response))
            navigate(`/search`);
            setOpen(false)
            setLoading(false)
        },
        [searchState],
    )


    return (
        <div className={`search__component ${open && 'open'}`}>
            
            {loading && <Loader/>}
            <div className="search__component__container">
                <input onChange={(e) => { dispatch(setSearchText(e.target.value)) }} placeholder='Search anime or character' type="text" />
                <button disabled={searchState === "" ? true : false} onClick={runSearchFunction}>Find</button>
            </div>
        </div>
    )
}

export default React.memo(Search)