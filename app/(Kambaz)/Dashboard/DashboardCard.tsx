import React from "react";
import { Col } from "react-bootstrap";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import Link from "next/link";

export default function DashboardCard() {
  return (
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
  )};
