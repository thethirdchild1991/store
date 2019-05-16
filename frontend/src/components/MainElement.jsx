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
        <>
            <MainAdvertise data={mainAdvertiseData}/>
            <RowWithImages data={salesData} />
            <RowWithImages data={goodsCatalogData} />
            <RowWithImages data={brandsData} />
            <RowWithImages data={projectsData} />
        </>
    )
}

export default MainElement;