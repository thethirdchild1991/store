import React from 'react'
import LinedImage from './LinkedImage'
import HeadedNavWithLinks from './HeadedNavWithLinks'

function ColumnWithLinkedImageNColumnOfLinks( props ){
    let { wrapperClassName, topLinkData, headedColumOfLinksData } = props.data ? props.data : ''    
    return(
        <div className={wrapperClassName}>
            {
                topLinkData ? 
                <LinedImage data={topLinkData} />
                : <></>
            }
            <HeadedNavWithLinks data={headedColumOfLinksData}/>
        </div>
    )
}

export default ColumnWithLinkedImageNColumnOfLinks;