import React from 'react'
import RowWithImages from './RowWithImages'
import ColumnWithLinkedImageNColumnOfLinks from './ColumnWithLinkedImageNColumnOfLinks'

function FooterElement( props ){
    let {followUsData, navigateData} = props.data ? props.data : ''
    return (
        <footer>
            <div className="footer-top">  
                <RowWithImages data={followUsData} />                              
                <ColumnWithLinkedImageNColumnOfLinks  data={navigateData} />
                <div class="subscribe">
                    <h1>Subscribe</h1>
                    <form action="">
                        <label for="subscribe-email"></label>
                        <input name="subscribe-email" type="email" value="Enter your email"/>
                        <input type="submit"  value="Subscribe"/>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">               
                <div className="copyright">copyright &copy; 2019</div>
                <div className="store-name">Denis Woodworker Store</div>
                <div className="store-email">info@store.com</div>
            </div>
        </footer>
    )
}

export default FooterElement;