import React from 'react';

function Input({ type, name, placeholder }) {
    return (
            <div className="form-group">
                 <input type={type}
                        className="form-control" 
                        name={name} 
                        placeholder={placeholder}/>
            </div>
    );
}

export default Input;