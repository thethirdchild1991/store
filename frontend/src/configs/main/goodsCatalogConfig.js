import promo1 from './../../static/imgs/powertool-popcat.jpg'
import promo2 from './../../static/imgs/handtools-popcat.jpg'
import promo3 from './../../static/imgs/foryourshop-popcat.jpg' 
import promo4 from './../../static/imgs/dustcollect-popcat.jpg' 

const mainClassName = 'goods-catalog'
const headerText = ''
const linkedHeader = { path: '#', text :'Check Our Goods' }
const wrapperClassName = 'goods-categories-wrapper'
const columnWrapperClassName = 'goods-category-wrapper'
const content = [
    {
        type : 'ColumnWithLinkedImageNColumnOfLinks',
        data :  {
            wrapperClassName : columnWrapperClassName, 
            topLinkData :{
                path : '#', 
                imgId : '',
                img : promo1,
                imgAltText : 'Cat Name 1'
            }, 
            headedColumOfLinksData: {
                headerText : 'Category Name 1', 
                content :[
                            {path : '#', text : 'SubCatName1'},
                            {path : '#', text : 'SubCatName2'},
                            {path : '#', text : 'SubCatName3'},
                            {path : '#', text : 'SubCatName4'},
                            {path : '#', text : 'SubCatName5'},
                        ]
            }
        }
    },
    {
        type : 'ColumnWithLinkedImageNColumnOfLinks',
        data :  {
            wrapperClassName : columnWrapperClassName, 
            topLinkData :{
                path : '#', 
                imgId : '',
                img : promo2,
                imgAltText : 'Cat Name 2'
            }, 
            headedColumOfLinksData: {
                headerText : 'Category Name 2', 
                content :[
                            {path : '#', text : 'SubCatName1'},
                            {path : '#', text : 'SubCatName2'},
                            {path : '#', text : 'SubCatName3'},
                            {path : '#', text : 'SubCatName4'},
                            {path : '#', text : 'SubCatName5'},
                        ]
            }
        }
    },
    {
        type : 'ColumnWithLinkedImageNColumnOfLinks',
        data :  {
            wrapperClassName : columnWrapperClassName, 
            topLinkData :{
                path : '#', 
                imgId : '',
                img : promo3,
                imgAltText : 'Cat Name 3'
            }, 
            headedColumOfLinksData: {
                headerText : 'Category Name 3', 
                content :[
                            {path : '#', text : 'SubCatName1'},
                            {path : '#', text : 'SubCatName2'},
                            {path : '#', text : 'SubCatName3'},
                            {path : '#', text : 'SubCatName4'},
                            {path : '#', text : 'SubCatName5'},
                        ]
            }
        }
    },
    {
        type : 'ColumnWithLinkedImageNColumnOfLinks',
        data :  {
            wrapperClassName : columnWrapperClassName, 
            topLinkData :{
                path : '#', 
                imgId : '',
                img : promo4,
                imgAltText : 'Cat Name 4'
            }, 
            headedColumOfLinksData: {
                headerText : 'Category Name 4', 
                content :[
                            {path : '#', text : 'SubCatName1'},
                            {path : '#', text : 'SubCatName2'},
                            {path : '#', text : 'SubCatName3'},
                            {path : '#', text : 'SubCatName4'},
                            {path : '#', text : 'SubCatName5'},
                        ]
            }
        }
    },            
    
]

export const config = {
    mainClassName, 
    headerText, 
    linkedHeader,
    wrapperClassName, 
    content
}