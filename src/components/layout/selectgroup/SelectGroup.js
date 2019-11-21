import React, { Component } from 'react'
import OptionGroup from '../optiongroup/OptionGroup'
export default
  class SelectGroup extends Component {
  constructor(props) {

  }
  state = {
    options: this.props.options
  }
  render() {
    return (
      <React.Fragment>
        <select value={this.props.option} onChange={this.selectChange}>
          <OptionGroup option_value="Approved" option_text="Approved" />
          <OptionGroup option_value="Declined" option_text="Declined" />
          <OptionGroup option_value="Pending" option_text="Pending" />
          <OptionGroup option_value="Researching" option_text="Researching" />
        </select>
      </React.Fragment>
    )
  }
}
