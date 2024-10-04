import React from "react";
import './button.css';

function Button({ label, onClick = (e) => e, color = 'blue', size = 'medium' }) {
    return (
        <button
          className={`btn btn-${color} btn-${size}`}
          onClick={onClick}
        >
          {label}
        </button>
    ); 
}

export default Button;