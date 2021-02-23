import React from 'react';

export default function Input({ label, type, id }) {
  return (
    <div className="input-block">
      <label htmlFor={label}>{label}:</label>
      <input type={type} id={id} name={label}/>
    </div>
  );
}