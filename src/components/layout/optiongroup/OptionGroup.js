import React from 'react'

const OptionGroup = ({
  option_value,
  option_text }) => {
  return (
    <React.Fragment>
      <option value={option_value}>{option_text}</option>
    </React.Fragment>
  )
}

export default OptionGroup;