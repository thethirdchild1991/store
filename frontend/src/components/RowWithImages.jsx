import React from 'react'
import { Link } from 'react-router-dom'
import LinkedImage from './LinkedImage'
import ColumnWithLinkedImageNColumnOfLinks from './ColumnWithLinkedImageNColumnOfLinks'

function RowWithImages( props ){
    let { mainClassName, headerText, linkedHeader ,wrapperClassName, content } = props.data ? props.data : ''    
    return (
    <div className={mainClassName}>            
        {headerText ? <h1>{headerText}</h1> : <></>}
        {linkedHeader ? <h1><Link to={linkedHeader.path}>{linkedHeader.text}</Link></h1> : <></>}
        {wrapperClassName ? 
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
            :<>
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
            </>
        }          
    </div>
    )
}

export default RowWithImages;