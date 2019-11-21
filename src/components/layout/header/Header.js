import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  state = {
    collapsed: true
  }
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    const collapse = this.state.collapsed;
    const upNav = collapse ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const downNav = collapse ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <Link className="navbar-brand" to="/businesses" onClick={this.toggleNavbar}>Simm-Flow</Link>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
        <button onClick={this.toggleNavbar} className={`${downNav}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`${upNav}`} id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active" onClick={this.toggleNavbar}>
              <Link className="nav-link" to="/businesses">See All<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item" onClick={this.toggleNavbar}>
              <Link className="nav-link" to="/business/add">Add</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filter
          </Link>
              <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item text-light" onClick={this.toggleNavbar} to="/businesses/approved">Approved</Link>
                <Link className="dropdown-item text-light" onClick={this.toggleNavbar} to="/businesses/declined">Declined</Link>
                <Link className="dropdown-item text-light" onClick={this.toggleNavbar} to="/businesses/pending">Pending</Link>
                <Link className="dropdown-item text-light" onClick={this.toggleNavbar} to="/businesses/researching">Researching</Link>
              </div>
            </li>
            <li className="nav-item" onClick={this.toggleNavbar}>
              <Link className="nav-link text-light" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
