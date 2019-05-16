import React from 'react'
import LinedImage from './LinkedImage'
import HeadedNavWithLinks from './HeadedNavWithLinks'

function ColumnWithLinkedImageNColumnOfLinks( props ){
    let { topLinkData, headedColumOfLinksData } = props.data ? props.data : ''    
    return(
        <div class="goods-category-wrapper">
            <LinedImage data={topLinkData} />
            <HeadedNavWithLinks data={headedColumOfLinksData}/>
        </div>
    )
}

export default ColumnWithLinkedImageNColumnOfLinks;