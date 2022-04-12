import React from 'react'
import { RandomContentPropTypes } from './Random.types'
import { Box, Button } from '../../components'

function RandomContent({ anime, quote, character, getData }: RandomContentPropTypes) {
    return (
        <div className="random__container">
            <div className="random__header">
                <Box
                    text={anime}
                    type="small"
                />
                <Button onClick={getData} />
            </div>
            <Box
                text={character}
                type="header"
            />
            <Box
                text={quote}
                type="quote"
            />
        </div>
    )
}

export default React.memo(RandomContent)