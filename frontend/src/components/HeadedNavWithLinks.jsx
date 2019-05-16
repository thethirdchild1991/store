import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function HeadedNavWithLinks( props ){
    let { headerText, content } = props.data ? props.data : ''
    return(
        <>            
            { headerText ? <h2>{headerText}</h2> : <></>}
            <nav>                
                {
                    content ? 
                    content.map( element => <Link to={element.path}>{element.text}</Link>)
                    : <></>
                }
            </nav>
        </>
    )
}
export default HeadedNavWithLinks;