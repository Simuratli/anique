import React from 'react'
import { BoxProps } from './box.types'

function Box({ text, type }: BoxProps) {
    return (
        <div className={`box ${type}`}>
            {
                type === "small"
                    ?
                    <a target="_blank" rel="noreferrer"  href={`http://www.google.com/search?q=${text}`}>{text}</a>
                    :
                    text
            }
        </div>
    )
}

export default React.memo(Box)