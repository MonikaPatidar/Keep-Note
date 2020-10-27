import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import './index.css';

const CreateN=(props)=>{
    const[note,setnote]=useState({
       title:"",
       content:""
    });
    const InputEvent=(event)=>{
        event.preventDefault();
        const {name, value}=event.target;
        setnote((preval)=>{
            return {
                ...preval,
            [name]:value, 
        }});
    };
    const AddEvent=()=>
    {
        props.Passnote(note);
       setnote({ 
        title:"",
       content:""})
    }
    return(
    <>
    <div className="note_div" placeholder="Add Note">
        <input type="text" 
               placeholder="Title Here..." 
               className="notePara"
               name="title"
               value={note.title}
               onChange={InputEvent}
               autoComplete="off">
               </input>
        <input 
                type="text" 
                placeholder="Write Your Note..." 
                className="InputTxt"
                name="content"
                value={note.content}
                onChange={InputEvent}
                autoComplete="off">
                </input>
        <button 
            type="button" 
            className="btn-add">
            <AddIcon onClick={AddEvent} className="icon"/>
        </button>
    </div>
    </>
)}

export default CreateN;

/*Ex Flow
 1. when you write something in title this have (name="title" & value={note.title}),
    and this will call InputEvent 
 2. This InputEvent set name=title and value=whatever we written in title.
    const {name,value}= event.target;
3. This setnote further set note title object with given value.
       const[note,setnote]=useState([
       title="",
       content=""
4. This ...preval also check name of field with same flow and return correspondance value.*/
