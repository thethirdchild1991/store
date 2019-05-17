import project1 from './../../static/imgs/1-Simple-Storage-Box.jpg'
import project2 from './../../static/imgs/DIY-Pallet-End-Table-Plan-With-Downloadable-PDF.jpg'
import project3 from './../../static/imgs/Pallet-Patio-Coffee-Table-2-220x220.jpg' 
import project4 from './../../static/imgs/Foldable-Pallet-Desk-220x220.jpg' 

const mainClassName = 'projects'
const headerText = 'Our Projects'
const linkedHeader = ''
const wrapperClassName = 'projects-wrapper'

const content = [
    {
        type : 'linkedImage',
        data :  {
            path : '#', 
            imgId : '',
            img : project1,
            imgAltText : 'Project 1'
        }
    },
    {
        type : 'linkedImage',
        data :  {
            path : '#', 
            imgId : '',
            img : project2,
            imgAltText : 'Project 2'
        }
    },
    {
        type : 'linkedImage',
        data :  {
            path : '#', 
            imgId : '',
            img : project3,
            imgAltText : 'Project 3'
        }
    },
    {
        type : 'linkedImage',
        data :  {
            path : '#', 
            imgId : '',
            img : project4, 
            imgAltText : 'Project 4'
        }
    },
    {
        type : 'linkedImage',
        data :  {
            path : '#', 
            imgId : '',
            img : project1, 
            imgAltText : 'Project 1'
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