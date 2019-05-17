import React from 'react'
import {Link} from "react-router-dom"

function LinkedImage( props ){
    let {path, imgId, img, imgAltText} = props.data ? props.data : ''
    return (
        <Link to={path}>
            <img id={imgId} src={img} alt={imgAltText} />
        </Link>
    )
}

export  default LinkedImage;