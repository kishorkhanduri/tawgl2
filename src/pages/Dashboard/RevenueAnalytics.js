import React, { Component } from "react";
import { Card, CardBody, ButtonGroup, Button } from "reactstrap";

//Import Charts
import ReactApexChart from "react-apexcharts";
import "./dashboard.scss";

class RevenueAnalytics extends Component {
  state = {
    series: [
      {
        name: "Out Interview",
        type: "column",
        data: [1000, 1600, 500, 700, 800, 1000],
      },
      {
        name: "In Interview",
        type: "column",
        data: [2500, 3000, 4000, 2000, 3000, 4000],
      },
      //   {
      //     name: "2019",
      //     type: "line",
      //     data: [23, 32, 27, 38, 27, 32, 27, 38, 22, 31, 21, 16],
      //   },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: [0, 3],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "30%",
        },
      },
      dataLabels: {
        enabled: false,
      },

      legend: {
        show: false,
      },
      colors: ["#1cbb8c", "#5664d2"],
      labels: [
        "Oct2019",
        "Nov2019",
        "Dec2020",
        "Jan2020",
        "Feb2020",
        "Mar2020",
        "Apr2020",
      ],
    },
  };
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <div className="float-end d-none d-md-inline-block">
              <ButtonGroup className="mb-2">
                <Button size="sm" color="light" type="button">
                  Today
                </Button>
                <Button size="sm" color="light" active type="button">
                  Weekly
                </Button>
                <Button size="sm" color="light" type="button">
                  Monthly
                </Button>
              </ButtonGroup>
            </div>
            <h4 className="card-title mb-4">Out Interview vs In Interview Trend</h4>
            <div>
              <div id="line-column-chart" className="apex-charts" dir="ltr">
                <ReactApexChart
                  options={this.state.options}
                  series={this.state.series}
                  type="line"
                  height="280"
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default RevenueAnalytics;
