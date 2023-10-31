import React from "react";
import "./Button.css";

export default function Button({ children, onClick, type, hidden = "true" }) {
    return (
        <button
            onClick={onClick}
            className={`button ${type} ${hidden ? "hidden" : ""}`}
        >
            {children}
        </button>
    );
}
