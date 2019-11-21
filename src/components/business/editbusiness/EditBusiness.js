import React, { Component } from 'react';
import { Consumer } from '../../../context';
import InputGroup from '../../layout/inputgroup/InputGroup';
import Axios from 'axios';
import './EditBusiness.css';

export default class EditBusiness extends Component {
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
  async componentDidMount() {
    document.title = "Edit Business"
    const { id } = this.props.match.params;
    const res = await Axios.get(`https://my-json-server.typicode.com/oghusky/business-tracker-data/businesses/${id}`)
    const business = res.data;
    this.setState({
      business_name: business.business_name,
      city: business.city,
      state: business.state,
      zip: business.zip,
      contact_name: business.contact_name,
      phone: business.phone,
      net_income: business.net_income,
      ebit: business.ebit,
      ebitda: business.ebitda,
      eps: business.eps,
      pe_ratio: business.pe_ratio,
      roe: business.roe,
      status: business.status
    })
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
    const updatedBusiness = {
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
    const { id } = this.props.match.params;
    const res = await Axios.put(`https://my-json-server.typicode.com/oghusky/business-tracker-data/businesses/${id}`, updatedBusiness)
    dispatch({
      type: "UPDATE_BUSINESS",
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
          // testing to see if dynamic business info can be updated from global state without mutating state
          // console.log("Value", value);
          // console.log("Plural", businesses);

          // const company = businesses.filter(business =>
          //   (business.id === Number(this.props.match.params.id)) ?
          //     business : null
          // )
          // console.log("business loop", company);
          // console.log(this.state);
          return (
            <div className="card mb-3 clearfix edit-container">
              <h3 className="ml-3 mt-3">Edit Company Info</h3>
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
                  <button className="btn btn-warning float-right"><i className="fas fa-edit"></i> UPDATE</button>
                </div>
              </form>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
