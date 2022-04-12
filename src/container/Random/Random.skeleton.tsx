import React from 'react'
import { Button } from '../../components'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { RandomSkeletonPropTypes } from './Random.types'

function RadnomSkeleton({ getData }: RandomSkeletonPropTypes) {
    return (
        <div className="random__container">
            <div className="random__header">
                <Skeleton width={250} height={25} />
                <Button onClick={getData} />
            </div>
            <Skeleton height={50} width={300} />
            <br />
            <Skeleton height={30} count={6} width={300} />
        </div>
    )
}

export default React.memo(RadnomSkeleton)