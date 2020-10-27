import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import './index.css';

const Notes=(props)=>{
    const dltitem=()=>{
        props.deleteItem(props.id);
    }
    return(
    <>
    <div className="note_div" placeholder="Add Note">
    <h3>{props.title}</h3>
    <br />
    <p>{props.content}</p>
        {/* <input type="text" placeholder="Title Here..." className="NoteTtile"></input>
        <input type="text" placeholder="Write Your Note..." className="NoteContent"></input> */}
        <button type="button" className="">
            <DeleteOutlineIcon onClick={dltitem}/>
        </button>
    </div>
    </>
)}

export default Notes;