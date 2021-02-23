import React from 'react';

export default function Select({ label }) {
  return (
    <div className="select-block">
      <label htmlFor={label}>{label}:</label>
      <select id={label} name={label}>
        <option value="04014">Sedex</option>
        <option value="04510">PAC</option>
      </select>
    </div>
  );
}