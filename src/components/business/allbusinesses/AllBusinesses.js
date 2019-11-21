import React, { Component } from 'react';
import SeeLessBusiness from '../seelessbusiness/SeeLessBusiness';
import { Consumer } from '../../../context';
import './AllBusinesses.css'


class AllBusinesses extends Component {
  componentDidMount() {
    document.title = "All Businesses"
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { businesses } = value;
          return (
            <React.Fragment>
              <div>
                {businesses.map(business => (
                  <SeeLessBusiness
                    key={business.id}
                    id={business.id}
                    business={business} />
                ))}
              </div>
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
}

export default AllBusinesses;