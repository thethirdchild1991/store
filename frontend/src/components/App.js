import React from 'react';
import Header from './HeaderElement'
import Main from './MainElement'
import Footer from './FooterElement'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'


import "./../static/index.css";

import {config as HeaderConfig}       from './../configs/headerConfig'
import {config as FooterConfig}       from './../configs/footerConfig'
import {config as mainAdvertiseData}  from './../configs/main/mainAdvertiseConfig' 
import {config as salesData}          from './../configs/main/salesConfig' 
import {config as goodsCatalogData}   from './../configs/main/goodsCatalogConfig' 
import {config as brandsData}         from './../configs/main/brandsConfig' 
import {config as projectsData}       from './../configs/main/projectsConfig' 

function App() {
  return (
    <Router>
      <Header 
          data = { HeaderConfig }
      />
      <Main data = {            
                      {
                        mainAdvertiseData,                       
                        salesData, 
                        goodsCatalogData, 
                        brandsData,
                        projectsData
                      }
                    }/>
      <Footer data = { FooterConfig }/> 
    </Router>
  )
}

export default App;
