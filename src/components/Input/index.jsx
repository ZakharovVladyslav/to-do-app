import React from 'react';
import './Input.css';

export default function Input({value, onChange}) {
    return (
        <input  
        value={value}
        onChange={onChange}
        placeholder='Write a task to add:' 
        className='input-task-name'
        />
    )
}