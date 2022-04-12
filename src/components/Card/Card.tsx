import React from 'react'
import { CardPorpTypes } from './card.types'

function Card({ anime }:CardPorpTypes) {
    console.log(anime,'anime')
    return (
        <div className="card">
            <div className="card__title">{anime.anime}</div>
            <div className="card__name">{anime.character}</div>
            <div className="card__content">
                {anime.quote}
            </div>
        </div>
    )
}

export default Card