import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Row, Col } from "reactstrap";
class SplineArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "patients",
          data: [0, 50, 100, 150],
        },
      ],
      options: {
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },

        colors: ["#556ee6", "#34c38f"],
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00",
            "2018-09-19T01:30:00",
            "2018-09-19T02:30:00",
            "2018-09-19T03:30:00",
            "2018-09-19T04:30:00",
            "2018-09-19T05:30:00",
            "2018-09-19T07:30:00",
            "2018-09-19T06:30:00",
          ],
        },
        grid: {
          borderColor: "#f1f1f1",
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  }
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <div className="float-end">
              <select className="form-select form-select-sm">
                <option defaultValue>Today</option>
                <option value="">Tomorrow</option>
              </select>
            </div>

            <h4 className="card-title mb-4">Time Admitted</h4>
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="area"
              height="320"
            />
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default SplineArea;
