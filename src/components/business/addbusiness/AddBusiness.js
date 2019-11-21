import React, { Component } from 'react';
import { Consumer } from '../../../context';
import InputGroup from '../../layout/inputgroup/InputGroup';
import './AddBusiness.css'
import Axios from 'axios';
export default class AddBusiness extends Component {
  state = {
    business_name: '',
    city: '',
    state: '',
    zip: '',
    contact_name: '',
    phone: '',
    net_income: '',
    ebit: '',
    ebitda: '',
    eps: '',
    pe_ratio: '',
    roe: '',
    status: '',
    errors: {}
  }
  componentDidMount() {
    document.title = "Add New"
  }
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { status, business_name, city, state, zip, contact_name, phone, net_income, ebit, ebitda, eps, pe_ratio, roe } = this.state;
    if (business_name === "") {
      this.setState({ errors: { business_name: "Must Enter Name" } });
      return;
    }
    if (city === "") {
      this.setState({ errors: { city: "Must Enter City" } });
      return;
    }
    if (state === "") {
      this.setState({ errors: { state: "Must Enter State" } });
      return;
    }
    const newBusiness = {
      business_name,
      city,
      state,
      zip,
      contact_name,
      phone,
      net_income,
      ebit,
      ebitda,
      eps,
      pe_ratio,
      roe,
      status
    }
    const res = await Axios.post("https://my-json-server.typicode.com/oghusky/business-tracker-data/businesses", newBusiness)
    dispatch({
      type: "ADD_BUSINESS",
      payload: res.data
    });
    this.props.history.push("/businesses")
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          const { status, business_name, city, state, zip, contact_name, phone, net_income, ebit, ebitda, eps, pe_ratio, roe, errors } = this.state;
          return (
            <div className="add-business-container">
              <div className="card mb-3 clearfix py-3 px-3">
                <h3>Add New</h3>
                <form className="py-3 px-3 edit-form" onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div>
                    <small><label htmlFor="status">Status:</label></small>
                    <select className="custom-select" name="status" value={status} onChange={this.onChange}>
                      <option defaultValue>Choose Status</option>
                      <option value="Approved">Approved</option>
                      <option value="Declined">Declined</option>
                      <option value="Pending">Pending</option>
                      <option value="Researching">Researching</option>
                    </select>
                    <InputGroup
                      label="Name:"
                      type="text"
                      name="business_name"
                      placeholder="Enter Company Name"
                      value={business_name}
                      onChange={this.onChange}
                      error={errors.business_name}
                    />
                    <div className="row d-flex justify-content-between container">
                      <InputGroup
                        label="City:"
                        type="text"
                        name="city"
                        placeholder="Enter City"
                        value={city}
                        onChange={this.onChange}
                        error={errors.city}
                        className="col-md-4 col-sm-12"
                      />
                      <InputGroup
                        label="State:"
                        type="text"
                        name="state"
                        placeholder="Enter State"
                        value={state}
                        onChange={this.onChange}
                        error={errors.state}
                        className="col-md-4 col-sm-12"
                      />
                      <InputGroup
                        label="Zip:"
                        type="text"
                        name="zip"
                        placeholder="Enter Zip"
                        value={zip}
                        onChange={this.onChange}
                        className="col-md-4 col-sm-12"
                      />
                    </div>
                    <div className="row d-flex justify-content-between container">
                      <InputGroup
                        label="Contact Name:"
                        type="text"
                        name="contact_name"
                        placeholder="Enter Name"
                        value={contact_name}
                        onChange={this.onChange}
                        className="col-md-6"
                      />
                      <InputGroup
                        label="Contact Phone:"
                        type="text"
                        name="phone"
                        placeholder="Enter Phone"
                        value={phone}
                        onChange={this.onChange}
                        className="col-md-6"
                      />
                    </div>
                    <div className="row d-flex justify-content-between container">
                      <InputGroup
                        label="Net Income:"
                        type="text"
                        name="net_income"
                        placeholder="Enter Income"
                        value={net_income}
                        onChange={this.onChange}
                        className="col-md-4 col-sm-12"
                      />
                      <InputGroup
                        label="EBIT:"
                        type="text"
                        name="ebit"
                        placeholder="Enter EBIT"
                        value={ebit}
                        onChange={this.onChange}
                      />
                      <InputGroup
                        label="EBITDA:"
                        type="text"
                        name="ebitda"
                        placeholder="Enter EBITDA"
                        value={ebitda}
                        onChange={this.onChange}
                      />
                      <InputGroup
                        label="EPS:"
                        type="text"
                        name="eps"
                        placeholder="Enter EPS"
                        value={eps}
                        onChange={this.onChange}
                      />
                      <InputGroup
                        label="P/E Ratio:"
                        type="text"
                        name="pe_ratio"
                        placeholder="Enter P/E Ratio"
                        value={pe_ratio}
                        onChange={this.onChange}
                      />
                      <InputGroup
                        label="ROE:"
                        type="text"
                        name="roe"
                        placeholder="Enter ROE"
                        value={roe}
                        onChange={this.onChange}
                      />
                    </div>
                    <button className="btn-primary btn float-right"><i className="fas fa-plus"></i> ADD</button>
                  </div>
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
