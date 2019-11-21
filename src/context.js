import React, { Component } from 'react';
import axios from 'axios';
const Context = React.createContext();

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_BUSINESS":
      return {
        ...state,
        businesses: state.businesses.filter(business => {
          return business.id !== action.payload
        })
      };
    case "ADD_BUSINESS":
      return {
        ...state,
        businesses: [action.payload, ...state.businesses]
      }
    case "UPDATE_BUSINESS":
      return {
        ...state,
        businesses: state.businesses.map(business =>
          business.id === action.payload.id ?
            (business = action.payload) :
            business
        )
      }
    case "ADD_USER":
      return {
        ...state
      }
    default:
      return {
        ...state
      }
  }
}
//holds state
export class Provider extends Component {
  state = {
    businesses: [],
    user_name: '',
    user_password: '',
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  };
  async componentDidMount() {
    await axios.get("https://my-json-server.typicode.com/oghusky/business-tracker-data/businesses")
      .then(res => this.setState({
        businesses: res.data
      }))
  };
  componentDidUpdate() {
    return {
      businesses: this.state.businesses
    }
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
export const Consumer = Context.Consumer;