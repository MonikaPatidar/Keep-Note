import React from 'react';
import './index.css';
const Footer=()=>{
    const date=new Date();
    const year=date.getFullYear();
    return(
    <>
        <footer className="footer">
            <p className="fpara">CopyRight @ {year}</p>
        </footer>
    </>
)}

export default Footer;