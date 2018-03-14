import React from 'react'

const Element = ({ isValid, handleChange, label, value, ...rest }) => {
  return (
    <div>
      <label>{label}</label>
      <input value={value} onChange={handleChange} {...rest} />
      <p>{ isValid && isValid(value) ? "valid" : "invalid" }</p>
    </div>
   )
}

export default Element
