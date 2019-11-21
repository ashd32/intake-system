import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Consumer } from '../../../context';
import Axios from 'axios';
import './SeeLessBusiness.css';

export default class SeeLessBusiness extends Component {
  deleteOnclick = async (id, dispatch) => {
    await Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    dispatch({
      type: "DELETE_BUSINESS",
      payload: id
    });
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
          const { status, id, business_name, city, state, zip, contact_name, phone } = this.props.business;
          const { dispatch } = value;
          return (
            <div className="card px-3 py-3 mb-3 see-less-business shadow rounded">
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
              <div className="row text-center mx-auto px-0 container">
                <Link className="col-sm-4 btn-dark pt-2" style={{ height: "2.5rem" }} to={`business/edit/${id}`}>
                  <i className="fas fa-edit"></i> EDIT
                </Link>
                <Link className="col-sm-4 btn-primary py-2" to={`single/${id}`}><i className="fas fa-plus"></i> DETAILS</Link>
                <div className="delete-btn-div btn-danger col-sm-4 pt-2" style={{ height: "2.5rem", cursor: "pointer" }} onClick={this.deleteOnclick.bind(this, id, dispatch)}>
                  <i className="fas fa-times"></i> DELETE
                </div>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

