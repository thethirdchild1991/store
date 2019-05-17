import React from 'react'
import LinkedImage from './LinkedImage'
import HeadedNavWithLinks from './HeadedNavWithLinks'
import {Link} from "react-router-dom"

function HeaderElement( props ){
    let {
            mainLinkedImageData,
            cartLinkData,
            accLinkData,
            headedNavData
        } = props.data ? props.data : ''
    return(
        <header>
            <div class="header-top">
            </div>
            <div class="header-main">
                <div class="header-column-helper">
                    <div class="header-row-helper">
                        <div class="main-logo">                            
                            <LinkedImage data={mainLinkedImageData}/>
                        </div>
                        <div class="search">
                            <form action="">
                                <input name="search-line" type="text" value="search" /> 
                                <input type="submit" value="search"/>
                            </form>
                        </div>
                        <div class="cart">   
                            {
                                cartLinkData ?                         
                                <Link to={cartLinkData.path}>{cartLinkData.text}</Link>
                                : <></>
                            }
                        </div>
                        <div class="loginLink">
                            {
                                accLinkData ?
                                <Link to={accLinkData.path}>{accLinkData.text}</Link>
                                : <></>
                            }
                        </div>
                    </div>                    
                </div>
            </div>
            <div class="header-nav">  
                <div class="header-column-helper">                    
                    <HeadedNavWithLinks  data={headedNavData}/>      
                </div>
            </div>            

        </header>
    )
}
export default HeaderElement;