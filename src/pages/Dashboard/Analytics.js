import React from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import { Card, CardBody, Col, CardTitle } from "reactstrap";
const Analytics = () => {
  return (
    <div>
      <Col>
        <Card className="bg-primary mb-4">
          <CardBody>
            <CardTitle className="mb-4 text-white">
              Patients in this month
            </CardTitle>
            <strong className="text-white">3240</strong>
            <Sparklines
              height={240}
              data={[
                4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 3, 4, 5, 8, 7, 6, 9, 3, 2,
                4, 1, 5, 6, 4, 3, 7,
              ]}
              width={200}
            >
              <SparklinesLine style={{ stroke: "#fff", fill: "transparent" }} />
              <SparklinesSpots />
            </Sparklines>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default Analytics;
