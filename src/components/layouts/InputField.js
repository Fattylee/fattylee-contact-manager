import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

const InputField = ({name, value, type, onChange, errors }) => {
  return (
    <Fragment>
   	  <div className="form-group">
        <label htmlFor={name}>{ capitalize(name) }</label>
        <input 
          type={type} 
          name={name} 
          id={name} 
          className={errors[name] ? "form-control is-invalid" : "form-control"} 
          placeholder={`Enter ${capitalize(name)}...`} 
          value={value}
          onChange={onChange}
        />
        {errors[name] && <div className='invalid-feedback'>{errors[name]}</div>}
      </div>
   </Fragment>
  )
}

const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

export default InputField;
