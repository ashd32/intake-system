import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Consumer } from '../../../context';
import Axios from 'axios';
import './Business.css'

export default class Business extends Component {
  deleteOnclick = async (id, dispatch) => {
    await Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch({
      type: "DELETE_BUSINESS",
      payload: id
    })
  }
  render() {
    const { status } = this.props.business;
    let statusColor;
    if (status === "Approved") {
      statusColor = "#64dd17"
    } else if (status === "Declined") {
      statusColor = "#dc3545"
    } else if (status === "Pending") {
      statusColor = "#343a40"
    } else if (status === "Researching") {
      statusColor = "#0084b4"
    }
    return (
      <Consumer>
        {value => {
          const { status, id, business_name, city, state, zip, contact_name, phone, net_income, ebit, ebitda, eps, pe_ratio, roe } = this.props.business;
          const { dispatch } = value;
          return (
            <div className="card px-3 py-3 mb-3 more-business">
              <div className="card-title">
                <h5>{business_name}</h5>
                <p className="text-center py-2 mb-0" style={{ color: "#fafafa", backgroundColor: statusColor }}>{status}</p>
              </div>
              <div className="card-body">
                <h6>Location:</h6>
                <p className="row"><span className="col-sm-6">{city}, {state}</span> <span className="col-sm-6">{zip}</span></p>
              </div>
              <div className="card-body">
                <h6>Contact</h6>
                <p className="row"><span className="col-sm-6">Name: {contact_name}</span><span className="col-sm-6">Phone: {phone}</span></p>
                <p></p>
              </div>
              <div className="card-body">
                <h6>Financial Performance</h6>
                <div className="row">
                  <div className="col-sm-6">
                    <p>Net Income: {net_income}</p>
                    <p>EBIT: {ebit}</p>
                    <p>EBITDA: {ebitda}</p>
                  </div>
                  <div className="col-sm-6">
                    <p>EPS: {eps}</p>
                    <p>P/E Ratio: {pe_ratio}</p>
                    <p>ROE: {roe}</p>
                  </div>
                </div>
              </div>
              <div className="row text-center container mx-auto px-0">
                <Link className="col-sm-6 btn-dark py-2" to={`business/edit/${id}`}>
                  <i className="fas fa-edit"></i> EDIT
                </Link>
                <Link to="/businesses" className="delete-btn-div btn-danger col-sm-6 py-2" onClick={this.deleteOnclick.bind(this, id, dispatch)}>
                  <i className="fas fa-times"></i> DELETE
                  </Link>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}
