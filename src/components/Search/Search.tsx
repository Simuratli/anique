/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react'
import { SearchPorpTypes } from './search.types'
import { search } from '../../api'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchResponse, setSearchText } from '../../redux/actions'

function Search({ open }: SearchPorpTypes) {
    const searchState = useSelector((state: any) => state.searchState.text)

    const dispatch = useDispatch()

    const runSearchFunction = useCallback(
        async () => {
            let response = await search(searchState.trim())
            dispatch(setSearchResponse(response))
        },
        [],
    )

    const onChangeText = useCallback(
        (e) => {dispatch(setSearchText(e.target.value)) }, [],
    )


    return (
        <div className={`search__component ${open && 'open'}`}>
            <div className="search__component__container">
                <input onChange={onChangeText} placeholder='Search anime or character' type="text" />
                <button disabled={searchState === "" ? true : false} onClick={runSearchFunction}>Find</button>
            </div>
        </div>
    )
}

export default React.memo(Search)