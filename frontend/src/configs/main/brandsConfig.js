import brand1 from './../../static/imgs/festool-logo.png'
import brand2 from './../../static/imgs/powermatic-logo-home.png'
import brand3 from './../../static/imgs/woodriver-logo.png' 
import brand4 from './../../static/imgs/jet-logo.jpg' 

const mainClassName = 'brands'
const headerText = ''
const linkedHeader = ''
const wrapperClassName = ''

const content = [
    {
        type : 'linkedImage',
        data :  {
            path : '#', 
            imgId : '',
            img : brand1,
            imgAltText : 'Brand 1'
        }
    },
    {
        type : 'linkedImage',
        data :  {
            path : '#', 
            imgId : '',
            img : brand2,
            imgAltText : 'Brand 2'
        }
    },
    {
        type : 'linkedImage',
        data :  {
            path : '#', 
            imgId : '',
            img : brand3,
            imgAltText : 'Brand 3'
        }
    },
    {
        type : 'linkedImage',
        data :  {
            path : '#', 
            imgId : '',
            img : brand4, 
            imgAltText : 'Brand 1'
        }
    }            
    
]

export const config = {
    mainClassName, 
    headerText, 
    linkedHeader,
    wrapperClassName, 
    content
}