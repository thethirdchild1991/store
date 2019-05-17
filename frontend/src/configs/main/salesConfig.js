import promo1 from './../../static/imgs/fujikawa-chisels-sq.jpg'
import promo2 from './../../static/imgs/rikon-snail-dust-sq.jpg'
import promo3 from './../../static/imgs/wr-diamond-stone.jpg' 

const mainClassName = 'sales'
const headerText = 'SALE'
const linkedHeader = ''
const wrapperClassName = 'sales-wrapper'

const content = [
    {
        type : 'linkedImage',
        data :  {
            path : '#', 
            imgId : '',
            img : promo1,
            imgAltText : 'Promo 1'
        }
    },
    {
        type : 'linkedImage',
        data :  {
            path : '#', 
            imgId : '',
            img : promo2,
            imgAltText : 'Promo 2'
        }
    },
    {
        type : 'linkedImage',
        data :  {
            path : '#', 
            imgId : '',
            img : promo3,
            imgAltText : 'Promo 3'
        }
    },
    {
        type : 'linkedImage',
        data :  {
            path : '#', 
            imgId : '',
            img : promo1, 
            imgAltText : 'Promo 1'
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