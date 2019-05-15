import React from 'react'
import {Link} from "react-router-dom"

function HeadedNavWithLinks( props ){
    let { header, content} = props.data
    return(
        <>            
            { headerText ? <h2>{headerText}</h2> : <></>}
            <nav>
                {content.map( element => <Link to={element.path}>{element.text}</Link>)}
            </nav>
        </>
    )
}

export default HeadedNavWithLinks;