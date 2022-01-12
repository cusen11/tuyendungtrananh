import React, { Suspense } from 'react';

import './App.css'
import "lightgallery.js/dist/css/lightgallery.css"; 

const Benefit = React.lazy(() => import('./Component/Benefit/Benefit'));
const Header = React.lazy(() => import('./Component/Header/Header'));
const LoadPage  = React.lazy(() => import('./Component/LoadPage/LoadPage'));
const Media = React.lazy(() => import('./Component/Media/Media'));
const Ourteam = React.lazy(() => import('./Component/Ourteam/Ourteam'));
const Project = React.lazy(() => import('./Component/Project/Project'));
const Footer = React.lazy(() => import('./Component/Footer/Footer')); 


function App() {  
  return (
    <>
     <Suspense fallback={<div>Loading...</div>}>
        <LoadPage/>
        <Header/>
        <Benefit/>
        <Ourteam/>
        <Project/>
        <Media/>
        <Footer/>
      </Suspense>
    </>
  );
}

export default App;
