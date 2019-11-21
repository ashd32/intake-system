import React, { Component } from 'react';
import Business from '../business/Business';
import { Consumer } from '../../../context';


export default class StatusLst extends Component {
  componentDidMount() {
    document.title = `By Status`
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
                  ((business.status.toLowerCase() === this.props.match.params.status) ?
                    <Business key={business.id} id={business.id} business={business} />
                    : null))
                )}
              </div>
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
}

