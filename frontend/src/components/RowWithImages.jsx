import React from 'react'
import { Link } from 'react-router-dom'
import LinkedImage from './LinkedImage'
import ColumnWithLinkedImageNColumnOfLinks from './ColumnWithLinkedImageNColumnOfLinks'

function RowWithImages( props ){
    let { mainClassName, headerText, linkedHeader ,wrapperClassName, content } = props.data ? props.data : ''
    
    return (
    <div className={mainClassName}>            
        {headerText ? <h1>{headerText}</h1> : <></>}
        {linkedHeader ? <Link to={linkedHeader.path}><h1>{linkedHeader.text}</h1></Link> : <></>}
        <div class={wrapperClassName}>
            {
                content ? 
                content.map( element => {
                    if( element.type === 'linkedImage'  )
                        return <LinkedImage data={element.data} />
                    else
                        return <ColumnWithLinkedImageNColumnOfLinks  data={element.data} />
                })
                : <></>
            }    
            
        </div>
    </div>
    )
}

export default RowWithImages;