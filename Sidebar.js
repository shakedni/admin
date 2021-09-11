
/*eslint-disable*/
import { Component, useState } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";
import { connect } from 'react-redux';
import { statusActive } from "Redux/reportAction";
import Pending from "views/examples/Pending";
import Tables from "views/examples/Tables";


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";
import { fetchPendingReport } from "Redux/reportAction";
import { logout } from "Redux/authAction";



var ps;

const Sidebar = (props) => {
  const [collapseOpen, setCollapseOpen] = useState();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setCollapseOpen((data) => !data);
  };
  // closes the collapse
  const closeCollapse = () => {
    setCollapseOpen(false);
  };
  // creates the links that appear in the left menu / Sidebar
  const createLinks = (routes) => {

    return routes.map((prop, key) => {
      if (prop.layout === "/admin")
        return (
          <NavItem key={key}>
            <NavLink
              to={prop.layout + prop.path}
              tag={NavLinkRRD}
              onClick={closeCollapse}
              activeClassName="active"
              style={{ color: "black" }}
            >
              <i className={prop.icon} />
              {prop.name}
              <span className="mx-2"></span>
              {props.pendingReport.length > 0 ? <i className={prop.notification} /> : ''}
            </NavLink>
          </NavItem>
        );
    });
  };

  const { bgColor, routes, logo } = props;
  let navbarBrandProps;
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link,
    };
  } else if (logo && logo.outterLink) {
    navbarBrandProps = {
      href: logo.outterLink,
      target: "_blank",
    };
  }



  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white"
      expand="md"
      id="sidenav-main"
    >
      <Container fluid>
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Brand */}
        {logo ? (
          <NavbarBrand className="pt-0" {...navbarBrandProps}>
            {/* <img
              alt={logo.imgAlt}
              className="navbar-brand-img"
              src={logo.imgSrc}
            /> */}
            <h2>Admin Panel</h2>
          </NavbarBrand>
        ) : null}
        {/* User */}
        <Nav className="align-items-center d-md-none">
          <Link to="/auth/login" onClick={props.logout}>
            <Button color="warning" >
              LOG OUT
            </Button>
          </Link>
        </Nav>
        {/* Collapse */}
        <Collapse navbar isOpen={collapseOpen}>
          {/* Collapse header */}
          <div className="navbar-collapse-header d-md-none">
            <Row>
              {logo ? (
                <Col className="collapse-brand" xs="6">
                  {logo.innerLink ? (
                    <Link to={logo.innerLink}>
                      {/* <img alt={logo.imgAlt} src={logo.imgSrc} /> */}
                      Admin Panel
                    </Link>
                  ) : (
                    <a href={logo.outterLink}>
                      {/* <img alt={logo.imgAlt} src={logo.imgSrc} /> */}
                      Admin Panel
                    </a>
                  )}
                </Col>
              ) : null}
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>{createLinks(routes)}</Nav>

        </Collapse>
      </Container>
    </Navbar>
  );
};

Sidebar.defaultProps = {
  routes: [{}],
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
  
    innerLink: PropTypes.string,

    outterLink: PropTypes.string,
   
    imgSrc: PropTypes.string.isRequired,
    
    imgAlt: PropTypes.string.isRequired,
  }),
};




const mapStateToProps = state => {
  return {

    pendingReport: state.report.pendingReports


  }
}

const mapDisptachToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(Sidebar)
