import social from './../static/imgs/social.png'
export const config = {
    followUsData : {
        mainClassName       : 'follow-us', 
        headerText          : 'Follow US', 
        linkedHeader        : '',
        wrapperClassName    : 'footer-row-helper', 
        content             : [
                                {
                                    type : 'linkedImage',
                                    data :  {
                                        path : '/social/facebook', 
                                        imgId : 'facebook',
                                        img : social, 
                                        imgAltText : 'facebook'
                                    }
                                },
                                {
                                    type : 'linkedImage',
                                    data :  {
                                        path : '/social/instagram', 
                                        imgId : 'instagram',
                                        img : social, 
                                        imgAltText : 'instagram'
                                    }
                                },
                                {
                                    type : 'linkedImage',
                                    data :  {
                                        path : '/social/youtube', 
                                        imgId : 'youtube',
                                        img : social, 
                                        imgAltText : 'youtube'
                                    }
                                },                                                                
                            ]
    }, 
    navigateData : {
        wrapperClassName : 'navigate',
        topLinkData : '', 
        headedColumOfLinksData : {
                                    headerText : 'Navigate',
                                    content : [
                                                {path : '#', text : 'Main'},
                                                {path : '#', text : 'Goods'},
                                                {path : '#', text : 'Projects'},
                                                {path : '#', text : 'About'},
                                                {path : '#', text : 'Events'},
                                            ],
                                }
    }
}