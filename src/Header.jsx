import React from 'react';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import './index.css'
const Hedr=()=>{
    return(
    <>
    <div className="header_div">
        <div className="margn_div">
        <ImportContactsIcon style={{fontSize:"80", margin:"0px 0px 0px 30px"}} />
        <h1 className="heading">KeepNote</h1>
        </div>
    </div>
    </>
)}

export default Hedr;