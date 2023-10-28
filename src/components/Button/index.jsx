import React from 'react';
import './Button.css';

export default function Button({children, onClick, type}) {

    return (
        <button
        onClick={onClick}
        className={`button ${type}`}
        >{children}</button>
    )
}