import React, { useState } from 'react';
import Hedr from './Header';
import CreateN from './CreateNote';
import Notes from './Notes';
import Footer from './Footer';
const KeepN=()=>{
    const[AddItem, SetaddItem]=useState([
        
    ]);

    const Addnote=(note)=>{
        SetaddItem((prevalues)=>{
            return[...prevalues, note];
        })
    }
    const dltthis=(id)=>{
        SetaddItem((predata)=>{
            predata.filter((cval,indx)=>{
                return id !== indx;
            })
        })
    }
    return(
    <>
    <Hedr />
    <CreateN Passnote={Addnote} />

    {
        AddItem.map((val,index)=>{
        return (<Notes 
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={dltthis}
        />)
    })
    }
    <Footer />
    </>
)}

export default KeepN;