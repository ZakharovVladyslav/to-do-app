import "./IconButton.css";
import React from "react";

export default function IconButton({ icon, disabled, onClick, hidden, type }) {
    const handleClick = (e) => {
        e.preventDefault();

        if (onClick) onClick();
    };

    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            className={`
                icon-button
                ${hidden ? "hidden" : ""}
                ${type}
            `}
        >
            {icon}
        </button>
    );
}
