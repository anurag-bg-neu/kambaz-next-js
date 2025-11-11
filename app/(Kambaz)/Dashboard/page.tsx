'use client';
import * as db from "../Database";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { Card, CardImg, CardBody, CardTitle, CardText} from "reactstrap";
import { Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourse } from "../Courses/CoursesReducer";
import { RootState } from "../store";

export default function Dashboard() {
  const { course, courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments } = db;

  const dispatch = useDispatch();

  let thisUser = {_id:""};
  if (currentUser !== null) {
    thisUser = currentUser;
  }
  const userId = thisUser._id;

  const modifiedCourses = courses.filter((course) => enrollments.some(
    (enrollment) => enrollment.user === userId && enrollment.course === course._id));

   const addThisCourse = () => {
    console.log(course);
    dispatch(addNewCourse(course));
   };

   const updateThisCourse = () => {
    console.log(course);
    dispatch(updateCourse(course));
   }

  return (
    <div id="wd-dashboard wd-css-flex">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>New Course
          <Button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={addThisCourse} > Add
          </Button>
          <Button className="btn btn-warning float-end me-2"
                id="wd-update-course-click"
                onClick={updateThisCourse} > Update
          </Button>
      </h5><hr />
        <FormControl className="mb-2"
        defaultValue={course.name || ''}
        onChange={ (e) => dispatch(setCourse({ ...course, name: e.target.value })) } />
        <FormControl as="textarea" rows={3}
        defaultValue={course.description || ''}
        onChange={ (e) => dispatch(setCourse({ ...course, description: e.target.value})) } />
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses
        ({modifiedCourses.length})
      </h2> <hr />

      <div id="wd-dashboard-courses">
        <Row className="g-4">

        {modifiedCourses
          .map((course: { _id: string; name: string; description: string }) => (
          <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
          key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <CardImg src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </CardText>
                    <Button variant="primary"> Go
                    </Button>
                    <div onClick={(event) => {
                      event.preventDefault();
                      dispatch(deleteCourse(course._id)); }}
                    className="btn btn-danger float-end me-2"
                    id="wd-delete-course-click">Delete
                    </div>
                    <div id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        dispatch(setCourse(course)); }}
                      className="btn btn-warning me-2 float-end" >Edit
                    </div>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
);}
