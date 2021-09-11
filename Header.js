

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { fetchPendingReport } from "Redux/reportAction";
import { fetchActiveReport } from "Redux/reportAction";
import { connect } from 'react-redux';



import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }
  componentDidMount() {
    this.props.fetchActiveReport();
    this.props.fetchPendingReport()
  }



  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" >
                  <Link to="/admin/active">
                    <Card className="card-stats mb-4 mb-xl-0">
                      <CardBody>
                        <Row>
                          <div className="col">
                            <CardTitle
                              tag="h5"
                              className="text-uppercase text-muted mb-0"
                            >
                              Active reports
                            </CardTitle>
                            <span className="h2 font-weight-bold mb-0">
                              {this.props.activeReport && this.props.activeReport.length}
                            </span>
                          </div>
                          <Col className="col-auto">
                            <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                              <i className="fas fa-chart-bar" />
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Link>
                </Col>
                <Col lg="6">
                  <Link to="/admin/pending">
                    <Card className="card-stats mb-4 mb-xl-0">
                      <CardBody>
                        <Row>
                          <div className="col">
                            <CardTitle
                              tag="h5"
                              className="text-uppercase text-muted mb-0"
                            >
                              Pending reports
                            </CardTitle>
                            <span className="h2 font-weight-bold mb-0">{this.props.pendingReport && this.props.pendingReport.length}</span>
                          </div>
                          <Col className="col-auto">
                            <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                              <i className="fas fa-chart-pie" />
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Link>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>

    )
  }
}

const mapStateToProps = state => {
  return {
    activeReport: state.report.activeReports,
    pendingReport: state.report.pendingReports


  }
}

const mapDisptachToProps = dispatch => {
  return {
    fetchActiveReport: () => dispatch(fetchActiveReport()),
    fetchPendingReport: () => dispatch(fetchPendingReport()),
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(Header)









// const Header = () => {
//   return (
//     <>
//       <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
//         <Container fluid>
//           <div className="header-body">
//             {/* Card stats */}
//             <Row>
//               <Col lg="6" >
//                 <Card className="card-stats mb-4 mb-xl-0">
//                   <CardBody>
//                     <Row>
//                       <div className="col">
//                         <CardTitle
//                           tag="h5"
//                           className="text-uppercase text-muted mb-0"
//                         >
//                           Active reports
//                         </CardTitle>
//                         <span className="h2 font-weight-bold mb-0">

//                         </span>
//                       </div>
//                       <Col className="col-auto">
//                         <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
//                           <i className="fas fa-chart-bar" />
//                         </div>
//                       </Col>
//                     </Row>
//                   </CardBody>
//                 </Card>
//               </Col>
//               <Col lg="6">
//                 <Card className="card-stats mb-4 mb-xl-0">
//                   <CardBody>
//                     <Row>
//                       <div className="col">
//                         <CardTitle
//                           tag="h5"
//                           className="text-uppercase text-muted mb-0"
//                         >
//                           Pending reports
//                         </CardTitle>
//                         <span className="h2 font-weight-bold mb-0">2,356</span>
//                       </div>
//                       <Col className="col-auto">
//                         <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
//                           <i className="fas fa-chart-pie" />
//                         </div>
//                       </Col>
//                     </Row>
//                   </CardBody>
//                 </Card>
//               </Col>
//             </Row>
//           </div>
//         </Container>
//       </div>
//     </>
//   );
// };


