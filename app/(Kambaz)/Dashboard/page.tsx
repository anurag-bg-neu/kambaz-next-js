'use client';

import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { Card, CardImg, CardBody, CardTitle, CardText} from "reactstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard wd-css-flex">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (24)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row s={2} md={3} lg={4} xl={5} xxl={7} className="g-4">
          <Col className="wd-dashboard-course">
            <Card>
             <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/reactjs.jpg"  alt="React JS course cover" width="100%" height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS1234 React JS </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "40px" }}>
                    Full ReactJS Course.
                  </CardText>
                </CardBody>
             </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course">
          <Card>
            <Link href="/Courses/2345" className="wd-dashboard-course-link" id="wd-css-navigating-with-cards">
                <CardImg variant="top" src="/images/reactjs.jpg" alt="Node JS course cover"  width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS2345 Node JS </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "40px" }}>
                    Full NodeJS Course.
                  </CardText>
                </CardBody>
            </Link>
          </Card>
          </Col>
          <Col className="wd-dashboard-course">
          <Card>
            <Link href="/Courses/3456" className="wd-dashboard-course-link" id="wd-css-navigating-with-cards">
                <CardImg variant="top" src="/images/reactjs.jpg" alt="Node JS course cover"  width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS3456 Express JS </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "40px" }}>
                    Full ExpressJS Course.
                  </CardText>
                </CardBody>
            </Link>
          </Card>
          </Col>
          <Col className="wd-dashboard-course">
          <Card>
            <Link href="/Courses/4567" className="wd-dashboard-course-link" id="wd-css-navigating-with-cards">
                <CardImg variant="top" src="/images/reactjs.jpg" alt="Node JS course cover"  width="100%" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS4567 MongoDB </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "40px" }}>
                    Full MongoDB Course.
                  </CardText>
                </CardBody>
            </Link>
          </Card>
          </Col>
          <Col className="wd-dashboard-course">
            <Card>
             <Link href="/Courses/1234/Home" className="wd-dashboard-course-link">
                <CardImg variant="top" src="/images/reactjs.jpg"  alt="React JS course cover" width="100%" height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS1234 React JS </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "40px" }}>
                    Full ReactJS Course.
                  </CardText>
                </CardBody>
             </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course">
            <Card>
             <Link href="/Courses/1234/Home" className="wd-dashboard-course-link">
                <CardImg variant="top" src="/images/reactjs.jpg"  alt="React JS course cover" width="100%" height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS2345 Node JS </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "40px" }}>
                    Full NodeJS Course.
                  </CardText>
                </CardBody>
             </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course">
            <Card>
             <Link href="/Courses/1234/Home" className="wd-dashboard-course-link">
                <CardImg variant="top" src="/images/reactjs.jpg"  alt="React JS course cover" width="100%" height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS3456 Express JS </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "40px" }}>
                    Full ExpressJS Course.
                  </CardText>
                </CardBody>
             </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course">
            <Card>
             <Link href="/Courses/1234/Home" className="wd-dashboard-course-link">
                <CardImg variant="top" src="/images/reactjs.jpg"  alt="React JS course cover" width="100%" height={160}/>
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS4567 MongoDB </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "40px" }}>
                    Full MongoDB Course.
                  </CardText>
                </CardBody>
             </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
);}
