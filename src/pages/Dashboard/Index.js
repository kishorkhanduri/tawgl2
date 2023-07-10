import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Components
import MiniWidgets from "./MiniWidgets";
import RevenueAnalytics from "./RevenueAnalytics";
import SalesAnalytics from "./SalesAnalytics";
import Interview from "./Interview";
import NoInterview from "./NoInterview";
import OtherInterview from "./OtherInterview";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: "Nand Kishor", link: "/" },
        { title: "Dashboard", link: "#" },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs
              title="Dashboard"
              breadcrumbItems={this.state.breadcrumbItems}
            />
            <Row>
              <Col xl={12}>
                <Row>
                  <MiniWidgets />
                </Row>
              </Col>
              <Col xl={12}>
                <Row>
                  <Interview/>
                </Row>
              </Col>
              <Col xl={12}>
                <Row>
                  <NoInterview/>
                </Row>
              </Col>
              <Col xl={12}>
                <Row>
                  <OtherInterview/>
                </Row>
              </Col>
              <Col xl={8}>
                <RevenueAnalytics />
              </Col>
              <Col xl={4}>
                <SalesAnalytics />
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
