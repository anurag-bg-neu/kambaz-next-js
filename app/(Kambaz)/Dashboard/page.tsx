'use client';
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { Card, CardImg, CardBody, CardTitle, CardText} from "reactstrap";
import { Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { v4 as uuidv4 } from "uuid";
import { addNewCourse, updateCourse, deleteCourse, setCourse } from "../Courses/CoursesReducer";
import { addNewEnrollment, updateEnrollment, deleteEnrollment, setEnrollment } from "../Courses/EnrollmentsReducer";
import { useState } from "react";

export default function Dashboard() {
  const { course, courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollment, enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);
  const [ showAllCourses, setShowAllCourses ] = useState(false);

  const dispatch = useDispatch();

  let thisUser = {_id:""};
  if (currentUser !== null) {
    thisUser = currentUser;
  }
  const userId = thisUser._id;

   const addThisCourse = () => {
    const newCourseId = uuidv4();
    const newCourse = { ...course, _id: newCourseId };
    const newEnrollmentId = uuidv4();
    const newEnrollment = { _id: newEnrollmentId, user: userId, course: newCourseId };
    dispatch(setCourse(newCourse));
    dispatch(addNewCourse({ course: newCourse }));
    dispatch(setEnrollment(newEnrollment));
    dispatch(addNewEnrollment({ enrollment: newEnrollment }));
   };

   const setThisCourse = (event: React.MouseEvent<HTMLDivElement>,
    course: { _id: string; name: string; description: string }) => {
    event.preventDefault();
    dispatch(setCourse(course));
    const thisEnrollment = enrollments.find((enroll) =>
        enroll.course === course._id && enroll.user === userId);
    if (thisEnrollment) {
      dispatch(setEnrollment(thisEnrollment));
    } else {
      console.warn("No enrollment found for this course/user");
    }
   }

   const updateThisCourse = () => {
    dispatch(updateCourse(course));
    dispatch(updateEnrollment(enrollment));
   }

   const deleteThisCourse = (event: React.MouseEvent<HTMLDivElement>,
    course: { _id: string; name: string; description: string }) => {
    event.preventDefault();
    dispatch(deleteCourse(course._id));
    const thisEnrollment = enrollments.find((enroll) =>
        enroll.course === course._id && enroll.user === userId);
    dispatch(deleteEnrollment(thisEnrollment?._id));
   }

  const displayedCourses = showAllCourses
    ? courses
    : courses.filter((course) =>
        enrollments.some(
          (enrollment) =>
            enrollment.user === userId && enrollment.course === course._id
        )
      );

  return (
    <div id="wd-dashboard wd-css-flex">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <div className="align-items-center d-flex">
      <h5 className="mb-0">Enrollments</h5>
      <Button className="btn btn-primary mb-2 ms-auto"
                  id="wd-enrollments-toggle"
                  onClick={() => setShowAllCourses(!showAllCourses)} >
                  {showAllCourses ? "Show My Enrollments" : "Show All Courses"}
      </Button>
      </div>
      <hr />
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
        {showAllCourses ? "Published " : "My "} Courses
        ({displayedCourses.length})
      </h2> <hr />

      <div id="wd-dashboard-courses">
        <Row className="g-4">

        {displayedCourses
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
                    <div id="wd-delete-course-click"
                    onClick={(event) => {deleteThisCourse(event, course)}}
                    className="btn btn-danger float-end me-2" >Delete
                    </div>
                    <div id="wd-edit-course-click"
                      onClick={(event) => {setThisCourse(event, course)}}
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
