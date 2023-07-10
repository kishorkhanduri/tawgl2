import React, { Component } from "react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter, Link } from "react-router-dom";
import { BsClockHistory, BsBookHalf } from "react-icons/bs";
import { BiDesktop, BiMap } from "react-icons/bi";
import {
  AiFillPieChart,
  AiOutlineHome,
} from "react-icons/ai";
import { FiUsers, FiSettings } from "react-icons/fi";
//i18n
import { withNamespaces } from "react-i18next";

import { connect } from "react-redux";
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarType,
  changePreloader,
} from "../../store/actions";

class SidebarContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.initMenu();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.type !== prevProps.type) {
        this.initMenu();
      }
    }
  }

  initMenu() {
    new MetisMenu("#side-menu");

    var matchingMenuItem = null;
    var ul = document.getElementById("side-menu");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  activateParentDropdown = (item) => {
    item.classList.add("active");
    const parent = item.parentElement;

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show");

        const parent3 = parent2.parentElement;

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement;
          if (parent4) {
            parent4.classList.add("mm-active");
          }
        }
      }
      return false;
    }
    return false;
  };

  render() {
    return (
      <React.Fragment>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            {/* <li className="mb-1">
              <Link to="/#">
                <button className="btn btn-primary btn-md p-9">
                  Register Patient{" "}
                  <strong className="ma-2">
                    <AiOutlinePlus></AiOutlinePlus>
                  </strong>
                </button>
              </Link>
            </li> */}

            <li className="mb-1 mt-2 ">
              <Link to="/dashboard" className="waves-effect">
                <strong className="me-2">
                  <BiDesktop size={30}></BiDesktop>
                </strong>
                <span className="badge rounded-pill bg-success float-end">
                  3
                </span>
                <span className="ms-1">{this.props.t("Dashboard")}</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/#">
                <strong className="me-2">
                  <FiUsers size={30}></FiUsers>
                </strong>
                <span className="ms-1">{this.props.t("Join Interview")}</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/#">
                <strong className="me-2">
                  <AiFillPieChart size={30}></AiFillPieChart>
                </strong>
                <span className="ms-1">{this.props.t("Overview")}</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/#">
                <strong className="me-2">
                  <BiMap size={30}></BiMap>
                </strong>
                <span className="ms-1">{this.props.t("Map")}</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/#">
                <strong className="me-2">
                  <AiOutlineHome size={30}></AiOutlineHome>
                </strong>
                <span className="ms-1">{this.props.t("Departaments")}</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/#">
                <strong className="me-2">
                  <BsBookHalf size={30}></BsBookHalf>
                </strong>
                <span className="ms-1">{this.props.t("Practice")}</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/#">
                <strong className="me-2">
                  <BsClockHistory size={30}></BsClockHistory>
                </strong>
                <span className="ms-1">{this.props.t("History")}</span>
              </Link>
            </li>
            <li className="mb-1">
              <Link to="/#">
                <strong className="me-2">
                  <FiSettings size={30}></FiSettings>
                </strong>
                <span className="ms-1">{this.props.t("Settings")}</span>
              </Link>
            </li>
            {/* <li className="mb-1">
              <Link to="/#">
                <div
                  className="text-center pt-5 pb-5"
                  style={{ background: "#BCCEF8" }}
                >
                  <h6 className="ms-1">Get Mobile App</h6>
                  <strong className="me-2 rounded-circle bg-white p-1 fs-3">
                    <FcAndroidOs></FcAndroidOs>
                  </strong>
                  <strong className="me-2 rounded-circle bg-white p-1 fs-3">
                    <AiFillApple></AiFillApple>
                  </strong>
                </div>
              </Link>
            </li> */}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  return { ...state.Layout };
};

export default withRouter(
  connect(mapStatetoProps, {
    changeLayout,
    changeSidebarTheme,
    changeSidebarType,
    changeLayoutWidth,
    changePreloader,
  })(withNamespaces()(SidebarContent))
);
