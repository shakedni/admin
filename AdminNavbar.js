
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from "Redux/authAction";
// reactstrap components
import {

  Navbar,
  Nav,
  Container,

} from "reactstrap";


import React, { Component } from 'react'

export class AdminNavbar extends Component {


 render() {
    const { authlogout } = this.props
    return (
      <>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <Link
              className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
              to="/"
            >
              {this.props.brandText}
            </Link>

            <Nav className="align-items-center d-none d-md-flex" navbar>
              <Link to="/auth/login"><Button onClick={authlogout} color="warning">LOG OUT</Button></Link>
            </Nav>


          </Container>
        </Navbar>
      </>


    )
  }
}

const mapDisptachToProps = dispatch => {
  return {
    authlogout: () => dispatch(logout()),
  }
}

export default connect(null, mapDisptachToProps)(AdminNavbar)









