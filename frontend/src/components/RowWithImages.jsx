import React from 'react'
import LinkedImage from './LinkedImage'
import ColumnWithLinkedImageNColumnOfLinks from './ColumnWithLinkedImageNColumnOfLinks'

function RowWithImages( props ){
    let { mainClassName, headetText, wrapperClassName, content } = props.data
    return (
    <div className={mainClassName}>            
        {headerText ? <h1>{headetText}</h1> : <></>}
        {linkedHeaderText ? <Link to={linkedHeaderPath}><h1>{linkedHeaderText}</h1></Link> : <></>}
        <div class={wrapperClassName}>
            {content.map( element => {
                if( element.type === 'linkedImage'  )
                    return <LinkedImage data={element.data} />
                else
                    return <ColumnWithLinkedImageNColumnOfLinks  data={element.data} />
            })}    
            
        </div>
    </div>
    )
}

export default RowWithImages;