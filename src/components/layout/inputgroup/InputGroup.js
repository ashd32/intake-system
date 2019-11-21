import React from 'react'
import classnames from 'classnames'
import './InputGroup.css'

const InputGroup = ({
  label,
  name,
  value,
  type,
  placeholder,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <small><label htmlFor={name}>{label}</label></small>
      <input
        type={type}
        name={name}
        className={classnames("form-control", { "is-invalid": error })}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

export default InputGroup;