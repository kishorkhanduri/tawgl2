import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

//Simple bar
import SimpleBar from "simplebar-react";
import { AiOutlineHome } from "react-icons/ai";
import { GiTentacleHeart, GiCrossedBones } from "react-icons/gi";
import { FaHeadSideVirus } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
class RecentlyActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Col>
          <Card>
            <CardBody className="p-5">
              <Dropdown
                className="float-end"
                isOpen={this.state.menu}
                toggle={() => this.setState({ menu: !this.state.menu })}
              >
                <DropdownToggle
                  tag="i"
                  className="darrow-none card-drop"
                  aria-expanded="false"
                >
                  <AiFillCaretDown></AiFillCaretDown>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                  <DropdownItem href="">Sales Report</DropdownItem>

                  <DropdownItem href="">Export Report</DropdownItem>

                  <DropdownItem href="">Profit</DropdownItem>

                  <DropdownItem href="">Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <h4 className="card-title mb-4">Patients By Division</h4>

              <SimpleBar>
                <ul className="list-unstyled activity-wid">
                  <li className="activity-list">
                    <div className="activity-icon avatar-xs">
                      <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                        <AiOutlineHome></AiOutlineHome>
                      </span>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between">
                        <h5 className="font-size-13">Division </h5>
                        <strong className="text-muted">PI</strong>
                      </div>

                      <div>
                        {/* <p className="text-muted mb-0">Cardio</p> */}
                      </div>
                    </div>
                  </li>
                  <li className="activity-list">
                    <div className="activity-icon avatar-xs">
                      <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                        {/* <i className="ri-user-2-fill"></i> */}
                        <GiTentacleHeart></GiTentacleHeart>
                      </span>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between">
                        <h5 className="font-size-13">Cardiology</h5>
                        <strong className="text-muted">247</strong>
                      </div>
                    </div>
                  </li>
                  <li className="activity-list">
                    <div className="activity-icon avatar-xs">
                      <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                        {/* <i className="ri-bar-chart-fill"></i> */}
                        <FaHeadSideVirus></FaHeadSideVirus>
                      </span>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between">
                        <h5 className="font-size-13"> Neurology</h5>
                        <strong className="text-muted">164</strong>
                      </div>
                    </div>
                  </li>
                  <li className="activity-list">
                    <div className="activity-icon avatar-xs">
                      <span className="avatar-title bg-soft-primary text-primary rounded-circle">
                        {/* <i className="ri-mail-fill"></i> */}
                        <GiCrossedBones></GiCrossedBones>
                      </span>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between">
                        <h5 className="font-size-13"> Surgery</h5>
                        <strong className="text-muted ma-3">86</strong>
                      </div>
                    </div>
                  </li>
                  <li></li>
                </ul>
              </SimpleBar>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    );
  }
}

export default RecentlyActivity;
