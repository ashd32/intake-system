import React, { Component } from 'react'
import Business from '../business/Business';
import { Consumer } from '../../../context';
import Axios from 'axios';

export default class SingleBusiness extends Component {
  state = {
    business: {}
  }
  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await Axios.get(`https://my-json-server.typicode.com/oghusky/business-tracker-data/businesses/${id}`)
    this.setState({
      business: res.data
    })
  }
  async componentDidUpdate() {
    const { id } = this.props.match.params;
    const res = await Axios.get(`https://my-json-server.typicode.com/oghusky/business-tracker-data/businesses/${id}`)
    this.setState({
      business: res.data
    })
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { businesses } = value;
          return (
            <div>
              {businesses.map(business =>
                ((business.id === Number(this.props.match.params.id)) ? <Business key={business.id} business={business} /> : null)
              )}
            </div>
          )
        }}
      </Consumer>
    )
  }
}
