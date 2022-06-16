import React from 'react'
import './ToDoList.css'
import CloseIcon from '@mui/icons-material/Close';

const ToDoList = (props) => {
    
  return (
    <>
    <div className='main'>
        <div className="list">
        <input className='checkbox' type="checkbox" />
        <li className='text' >{props.text}</li>
        <CloseIcon sx={{ fontSize: 30 }} className='closeIcon' onClick= {(()=>{
        props.onSelect(props.id);
        })} />
        
        </div>
    </div>
    </>
  )
}

export default ToDoList