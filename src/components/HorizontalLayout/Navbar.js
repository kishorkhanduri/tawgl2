import React, { Component } from "react";
import { Collapse, Container } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import classname from "classnames";
import { BsFillBagFill } from "react-icons/bs";
//i18n
import { withNamespaces } from "react-i18next";
import { BiDesktop } from "react-icons/bi";
import { connect } from "react-redux";
import { BsCardHeading, BsBarChartFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { GiAirBalloon } from "react-icons/gi";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({});
    }
  }

  componentDidMount() {
    var matchingMenuItem = null;
    var ul = document.getElementById("navigation");
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
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  };

  render() {
    return (
      <React.Fragment>
        <div className="topnav">
          <Container fluid>
            <nav
              className="navbar navbar-light navbar-expand-lg topnav-menu"
              id="navigation"
            >
              <Collapse
                isOpen={this.props.menuOpen}
                className="navbar-collapse"
                id="topnav-menu-content"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      <strong className="me-2">
                        <BiDesktop></BiDesktop>
                      </strong>
                      <span className="ms-1">{this.props.t("Dashboard")}</span>
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ uiState: !this.state.uiState });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-uielement"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <strong className="me-2">
                        <BsFillBagFill></BsFillBagFill>
                      </strong>
                      <span className="ms-1">{this.props.t("Job Pool")}</span>
                      <div className="arrow-down"></div>
                    </Link>

                    {/* <div
                      className={classname(
                        "dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl",
                        { show: this.state.uiState }
                      )}
                      aria-labelledby="topnav-uielement"
                    >
                      <strong className="me-2">
                        <BsCardHeading></BsCardHeading>
                      </strong>
                      <span className="ms-1">
                        {this.props.t("Questionaries")}
                      </span>
                    </div> */}
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ appState: !this.state.appState });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-apps"
                      role="button"
                    >
                      <strong className="me-2">
                        <BsCardHeading></BsCardHeading>
                      </strong>
                      <span className="ms-1">
                        {this.props.t("Questionaries")}
                      </span>
                      <div className="arrow-down"></div>
                    </Link>
                    {/* <div
                      className={classname("dropdown-menu dropdown-menu-end", {
                        show: this.state.appState,
                      })}
                      aria-labelledby="topnav-apps"
                    >
                      <Link to="/calendar" className="dropdown-item">
                        {this.props.t("Calendar")}
                      </Link>
                      <Link to="/chat" className="dropdown-item">
                        {this.props.t("Chat")}
                      </Link>
                      <div className="dropdown">
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({
                              emailState: !this.state.emailState,
                            });
                          }}
                          className="dropdown-item dropdown-toggle arrow-none"
                          to="/#"
                          id="topnav-email"
                          role="button"
                        >
                          {this.props.t("Email")}{" "}
                          <div className="arrow-down"></div>
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.emailState,
                          })}
                          aria-labelledby="topnav-email"
                        >
                          <Link to="/email-inbox" className="dropdown-item">
                            {this.props.t("Inbox")}
                          </Link>
                          <Link to="/email-read" className="dropdown-item">
                            {this.props.t("Read Email")}
                          </Link>
                        </div>
                      </div>
                      <div className="dropdown">
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({
                              ecommerceState: !this.state.ecommerceState,
                            });
                          }}
                          className="dropdown-item dropdown-toggle arrow-none"
                          to="/#"
                          id="topnav-ecommerce"
                          role="button"
                        >
                          {this.props.t("Ecommerce")}{" "}
                          <div className="arrow-down"></div>
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.ecommerceState,
                          })}
                          aria-labelledby="topnav-ecommerce"
                        >
                          <Link
                            to="/ecommerce-products"
                            className="dropdown-item"
                          >
                            {this.props.t("Products")}
                          </Link>
                          <Link
                            to="/ecommerce-product-detail/1"
                            className="dropdown-item"
                          >
                            {this.props.t("Product Detail")}
                          </Link>
                          <Link
                            to="/ecommerce-orders"
                            className="dropdown-item"
                          >
                            {this.props.t("Orders")}
                          </Link>
                          <Link
                            to="/ecommerce-customers"
                            className="dropdown-item"
                          >
                            {this.props.t("Customers")}
                          </Link>
                          <Link to="/ecommerce-cart" className="dropdown-item">
                            {this.props.t("Cart")}
                          </Link>
                          <Link
                            to="/ecommerce-checkout"
                            className="dropdown-item"
                          >
                            {this.props.t("Checkout")}
                          </Link>
                          <Link to="/ecommerce-shops" className="dropdown-item">
                            {this.props.t("Shops")}
                          </Link>
                          <Link
                            to="/ecommerce-add-product"
                            className="dropdown-item"
                          >
                            {this.props.t("Add Product")}
                          </Link>
                        </div>
                      </div>

                      <Link to="/kanban-board" className="dropdown-item">
                        {this.props.t("Kanban Board")}
                      </Link>
                    </div> */}
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                          componentState: !this.state.componentState,
                        });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-components"
                      role="button"
                    >
                      <strong className="me-2">
                        <FiUsers></FiUsers>
                      </strong>
                      <span className="ms-1">{this.props.t("Users")}</span>
                      <div className="arrow-down"></div>
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: this.state.componentState,
                      })}
                      aria-labelledby="topnav-components"
                    >
                      {/* <div className="dropdown">
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({ formState: !this.state.formState });
                          }}
                          className="dropdown-item dropdown-toggle arrow-none"
                          to="/#"
                          id="topnav-form"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {this.props.t("Forms")}{" "}
                          <div className="arrow-down"></div>
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.formState,
                          })}
                          aria-labelledby="topnav-form"
                        >
                          <Link to="/form-elements" className="dropdown-item">
                            {this.props.t("Form Elements")}
                          </Link>
                          <Link to="/form-validation" className="dropdown-item">
                            {this.props.t("Form Validation")}
                          </Link>
                          <Link to="/form-advanced" className="dropdown-item">
                            {this.props.t("Form Advanced Plugins")}
                          </Link>
                          <Link to="/form-editors" className="dropdown-item">
                            {this.props.t("Form Editors")}
                          </Link>
                          <Link
                            to="/form-file-upload"
                            className="dropdown-item"
                          >
                            {this.props.t("Form File Upload")}
                          </Link>
                          <Link to="/form-xeditable" className="dropdown-item">
                            {this.props.t("Form Xeditable")}
                          </Link>
                          <Link to="/form-wizard" className="dropdown-item">
                            {this.props.t("Form Wizard")}
                          </Link>
                          <Link to="/form-mask" className="dropdown-item">
                            {this.props.t("Form Mask")}
                          </Link>
                        </div>
                      </div> */}
                      {/* <div className="dropdown">
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({
                              tableState: !this.state.tableState,
                            });
                          }}
                          className="dropdown-item dropdown-toggle arrow-none"
                          to="/#"
                          id="topnav-table"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {this.props.t("Tables")}{" "}
                          <div className="arrow-down"></div>
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.tableState,
                          })}
                          aria-labelledby="topnav-table"
                        >
                          <Link to="/basic-tables" className="dropdown-item">
                            {this.props.t("Basic Tables")}
                          </Link>
                          <Link to="/datatable-table" className="dropdown-item">
                            {this.props.t("Data Tables")}
                          </Link>
                          <Link
                            to="/responsive-table"
                            className="dropdown-item"
                          >
                            {this.props.t("Responsive Table")}
                          </Link>
                          <Link to="/editable-table" className="dropdown-item">
                            {this.props.t("Editable Table")}
                          </Link>
                        </div>
                      </div> */}
                      {/* <div className="dropdown">
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({
                              chartState: !this.state.chartState,
                            });
                          }}
                          className="dropdown-item dropdown-toggle arrow-none"
                          to="/#"
                          id="topnav-charts"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {this.props.t("Charts")}{" "}
                          <div className="arrow-down"></div>
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.chartState,
                          })}
                          aria-labelledby="topnav-charts"
                        >
                          <Link to="/apex-charts" className="dropdown-item">
                            {this.props.t("Apex Charts")}
                          </Link>
                          <Link to="/chartjs" className="dropdown-item">
                            {this.props.t("Chartjs")}
                          </Link>
                          <Link to="/charts-knob" className="dropdown-item">
                            {this.props.t("Jquery Knob Chart")}
                          </Link>
                          <Link
                            to="/charts-sparkline"
                            className="dropdown-item"
                          >
                            {this.props.t("Sparkline Chart")}
                          </Link>
                        </div>
                      </div> */}
                      {/* <div className="dropdown">
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({ iconState: !this.state.iconState });
                          }}
                          className="dropdown-item dropdown-toggle arrow-none"
                          to="/#"
                          id="topnav-icons"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {this.props.t("Icons")}{" "}
                          <div className="arrow-down"></div>
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.iconState,
                          })}
                          aria-labelledby="topnav-icons"
                        >
                          <Link to="/icons-remix" className="dropdown-item">
                            {this.props.t("Remix Icons")}
                          </Link>
                          <Link to="/material-design" className="dropdown-item">
                            {this.props.t("Material Design")}
                          </Link>
                          <Link to="/dripicons" className="dropdown-item">
                            {this.props.t("Dripicons")}
                          </Link>
                          <Link to="/font-awesome-5" className="dropdown-item">
                            {this.props.t("Font awesome 5")}
                          </Link>
                        </div>
                      </div> */}
                      {/* <div className="dropdown">
                        <Link
                          onClick={(e) => {
                            e.preventDefault();
                            this.setState({ mapState: !this.state.mapState });
                          }}
                          className="dropdown-item dropdown-toggle arrow-none"
                          to="/#"
                          id="topnav-map"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {this.props.t("Maps")}{" "}
                          <div className="arrow-down"></div>
                        </Link>
                        <div
                          className={classname("dropdown-menu", {
                            show: this.state.mapState,
                          })}
                          aria-labelledby="topnav-map"
                        >
                          <Link to="/google-maps" className="dropdown-item">
                            {this.props.t("Google Maps")}
                          </Link>
                          <Link to="/vector-maps" className="dropdown-item">
                            {this.props.t("Vector Maps")}
                          </Link>
                        </div>
                      </div> */}
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ extraState: !this.state.extraState });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-more"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <strong className="me-2">
                        <GiAirBalloon></GiAirBalloon>
                      </strong>
                      <span className="ms-1">{this.props.t("Brands")}</span>
                      <div className="arrow-down"></div>
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: this.state.extraState,
                      })}
                      aria-labelledby="topnav-more"
                    ></div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ extraState: !this.state.extraState });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-more"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <strong className="me-2">
                        <BsBarChartFill></BsBarChartFill>
                      </strong>
                      <span className="ms-1">{this.props.t("Job Report")}</span>
                      <div className="arrow-down"></div>
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: this.state.extraState,
                      })}
                      aria-labelledby="topnav-more"
                    ></div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ extraState: !this.state.extraState });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-more"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <strong className="me-2">
                        <MdOutlineSupervisorAccount></MdOutlineSupervisorAccount>
                      </strong>
                      <span className="ms-1">
                        {this.props.t("Supervisors")}
                      </span>
                      <div className="arrow-down"></div>
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: this.state.extraState,
                      })}
                      aria-labelledby="topnav-more"
                    ></div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ extraState: !this.state.extraState });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-more"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <strong className="me-2">
                        <FaHandsHelping></FaHandsHelping>
                      </strong>
                      <span className="ms-1">{this.props.t("Sponsers")}</span>
                      <div className="arrow-down"></div>
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: this.state.extraState,
                      })}
                      aria-labelledby="topnav-more"
                    ></div>
                  </li>
                  {/* <li className="nav-item dropdown">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({ extraState: !this.state.extraState });
                      }}
                      className="nav-link dropdown-toggle arrow-none"
                      to="/#"
                      id="topnav-more"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <strong className="me-2">
                        <FiSettings></FiSettings>
                      </strong>
                      <span className="ms-1">{this.props.t("Settings")}</span>
                      <div className="arrow-down"></div>
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: this.state.extraState,
                      })}
                      aria-labelledby="topnav-more"
                    ></div>
                  </li> */}
                </ul>
              </Collapse>
            </nav>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { leftSideBarType, leftSideBarTheme } = state.Layout;
  return { leftSideBarType, leftSideBarTheme };
};

export default withRouter(
  connect(mapStatetoProps, {})(withNamespaces()(Navbar))
);
