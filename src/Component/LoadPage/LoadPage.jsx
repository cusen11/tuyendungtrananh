import React, { useState } from 'react';
import logoSVG from '../../Assets/Images/logo.svg';
import loadDing from '../../Assets/Images/loading.gif';

function LoadPage() { 
    const [ loadPage, setLoadPage ] = useState(false)  
    window.addEventListener('load', () => {
        setTimeout(()=>{
            setLoadPage(true)  
        },1000)    
    });  
    const style={
        position:'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap:'wrap',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        background: '#ffff',
        zIndex:10000,
        top:0,
        left:0,
        transition: 'all 0.5s'
    }
    const style2={
        position:'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap:'wrap',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        background: '#fff',
        zIndex:10000,
        top:0,
        left:0,
        transform: 'translate(0, -100%)',
        transition: 'all 1s'
    }
    return (
        <div style={loadPage ? style2 : style}>
            <img src={logoSVG} alt="" width='300' /><br/>
            <img src={loadDing} alt="" width='40' />
        </div>
    );
}

export default LoadPage;