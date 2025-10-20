'use client';
import Link from "next/link";
import * as db from "../Database";
import { Col, Row } from "react-bootstrap";
import { Card, CardImg, CardBody, CardTitle, CardText} from "reactstrap";
import { Button } from "react-bootstrap";

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard wd-css-flex">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row s={2} md={3} lg={4} xl={5} xxl={7} className="g-4">
        {courses.map((course: { _id: string; name: string; description?: string }) => (
          <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <CardImg src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </CardText>
                    <Button variant="primary"> Go </Button>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
);}
