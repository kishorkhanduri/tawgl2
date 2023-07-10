import React, { Component } from "react";
import { Col, Card, CardBody } from "reactstrap";
import { BsThreeDots } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { RiInboxFill } from "react-icons/ri";
import { BiUserPin } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
class MiniWidgets extends Component {
  render() {
    return (
      <React.Fragment>
        <Col md={3}>
          <Card>
            <CardBody>
              <strong className="menu-icons">
                <BsThreeDots />
              </strong>
              <div className="d-flex justify-content-around">
                <div className="me-2 boxes-bg bg-light">
                  <strong className="p-2 fs-3 text-primary">
                    <BiUserPin size={30}></BiUserPin>
                  </strong>
                </div>
                <div className="d-block overflow-hidden">
                  <h4 className="mb-2 d-block">3256</h4>
                  <p className="text-truncate font-size-16 mb-2">
                    Total Interview
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <CardBody>
              <strong className="menu-icons">
                <BsThreeDots />
              </strong>
              <div className="d-flex justify-content-around">
                <div className="me-2 boxes-bg bg-light">
                  <strong className="p-2 fs-3 text-primary">
                    <FiUsers size={30}></FiUsers>
                  </strong>
                </div>
                <div className="d-block overflow-hidden">
                  <h4 className="mb-2 d-block">40%</h4>
                  <p className="text-truncate font-size-16 mb-2">
                    Today Availability
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <CardBody>
              <strong className="menu-icons">
                <BsThreeDots />
              </strong>
              <div className="d-flex justify-content-around">
                <div className="me-2 boxes-bg bg-light">
                  <strong className="p-2 fs-3 text-primary">
                    <RiInboxFill size={30}></RiInboxFill>
                  </strong>
                </div>
                <div className="d-block overflow-hidden">
                  <h4 className="mb-2 d-block">70%</h4>
                  <p className="text-truncate font-size-16 mb-2">
                    Avg Rate
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <CardBody>
              <strong className="menu-icons">
                <BsThreeDots />
              </strong>
              <div className="d-flex justify-content-around">
                <div className="me-2 boxes-bg bg-light">
                  <strong className="p-2 fs-3 text-primary">
                    <FaUserAlt size={30}></FaUserAlt>
                  </strong>
                </div>
                <div className="d-block overflow-hidden">
                  <h4 className="mb-2 d-block">120</h4>
                  <p className="text-truncate font-size-16 mb-2">
                    Active User
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    );
  }
}

export default MiniWidgets;
