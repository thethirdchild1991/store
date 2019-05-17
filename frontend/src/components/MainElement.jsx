import React from 'react'
import LinkedImage from './LinkedImage'
import RowWithImages from './RowWithImages'

function MainAdvertise( props ){
    return (
        <div className='main-advertise'>
            <LinkedImage data={ props.data }/>
        </div>
    )
}

function MainElement( props ){
    let {
            mainAdvertiseData, 
            salesData, 
            goodsCatalogData, 
            brandsData,
            projectsData
        } = props.data ? props.data : ''
    return(
        <main>
            <div class="main-central-column">
                <MainAdvertise data={mainAdvertiseData}/>
                <RowWithImages data={salesData} />
                <RowWithImages data={goodsCatalogData} />
                <RowWithImages data={brandsData} />
                <RowWithImages data={projectsData} />
            </div>
        </main>
    )
}

export default MainElement;