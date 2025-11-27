'use client';
import Link from "next/link";
import * as client from "../Courses/client";
import { Col, Row } from "react-bootstrap";
import { Card, CardImg, CardBody, CardTitle, CardText} from "reactstrap";
import { Button, FormControl } from "react-bootstrap";
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setCourses } from "../Courses/CoursesReducer";
import { setEnrollments } from "../Courses/EnrollmentsReducer";
import { redirect } from "next/dist/client/components/navigation";

type Course = {
  _id: string,
  name: string,
  description: string,
  number: string,
  credits: number,
  startDate: Date,
  endDate: Date,
  department: string,
}
type Enrollment = {
  _id: string,
  user: string,
  course: string,
}

const defaultCourse = {
  _id: "Dummy Id",
  name: "New Course",
  description: "New Description",
  number: "000",
  credits: 0,
  startDate: new Date(),
  endDate: new Date(),
  department: "New Department",
};

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);
  const [ course, setCourse ] = useState(defaultCourse);
  const [ showAllCourses, setShowAllCourses ] = useState(false);
  const [studentView, setstudentView] =  useState(true);

  const dispatch = useDispatch();

  const setThisCourse = (event: React.MouseEvent<HTMLDivElement>, course: Course) => {
    event.preventDefault();
    setCourse(course);
  };

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([ ...courses, newCourse ]));
  };

  const onUpdateCourse = async () => {
    if (course._id === "Dummy Id" || !course._id) {
      alert("Please select a course to update by clicking the Edit button on the course card.");
      return;
    }
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c : Course) => {
        if (c._id === course._id) { return course; }
        else { return c; }
    })))
  };

  const onDeleteCourse = async (event: React.MouseEvent<HTMLDivElement>, courseId: string) => {
    event.preventDefault();
    await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course: Course) => course._id !== courseId)));
  };

  const onEnrollCourse = async (event: React.MouseEvent<HTMLButtonElement>, courseId: string) => {
    event.preventDefault();
    if(!currentUser){
      alert("Please log in to enroll in a course.");
      return;
    }
    const newEnrollment = await client.enrollUserInCourse(courseId);
    dispatch(setEnrollments([... enrollments, newEnrollment]));
  };

  const onUnEnrollCourse = async (event: React.MouseEvent<HTMLButtonElement>, courseId: string) => {
    event.preventDefault();
    await client.unEnrollUserFromCourse(courseId);
    dispatch(setEnrollments(enrollments.filter((enrollment : Enrollment) => enrollment.course !== courseId)));
    fetchDisplayedCourses();
  };

  const fetchDisplayedCourses = useCallback(async () => {
    let data = [];
    try {
      data = showAllCourses ? await client.fetchAllCourses() : await client.findMyCourses();
    } catch (error) {
      console.error("Unexpected error: ", error);
      return;
    }
    dispatch(setCourses(data));
  }, [ showAllCourses, dispatch ]);

  const fetchMyEnrollments = useCallback(async () => {
    let data = [];
    try {
      data = await client.fetchMyEnrollments();
    } catch (error) {
      console.error("Unexpected error: ", error);
    }
    dispatch(setEnrollments(data));
  }, [ dispatch ]);

  const isEnrolled = (courseId: string) => {
    return enrollments.some((e: Enrollment) => e.course === courseId);
  };

  useEffect(() => {
    if (!currentUser) {
      dispatch(setCourses([]));
      dispatch(setEnrollments([]));
      redirect("/");
    }
    fetchDisplayedCourses();
    fetchMyEnrollments();
    if ( currentUser.role === "FACULTY" || currentUser.role === "ADMIN") {
        setstudentView(false);
        console.log("Student view enabled");
    } else {
        setstudentView(true);
    }
  }, [ currentUser, dispatch, fetchDisplayedCourses, fetchMyEnrollments ]);

  return (
    <div id="wd-dashboard wd-css-flex">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <div className="align-items-center d-flex">
      <h5 className="mb-0">Enrollments</h5>
      <Button className="btn btn-primary mb-2 ms-auto"
                  id="wd-enrollments-toggle"
                  onClick={() => setShowAllCourses(!showAllCourses)}> {showAllCourses ? "Show My Enrollments" : "Show All Courses"}
      </Button>
      </div>
      <hr />
      {!studentView &&
        <>
        <h5>New Course
            <Button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={onAddNewCourse} > Add
            </Button>
            <Button className="btn btn-warning float-end me-2"
                  id="wd-update-course-click"
                  onClick={onUpdateCourse} > Update
            </Button>
        </h5><hr />
          <FormControl className="mb-2"
            value={course.name || ''}
            onChange={ (e) => setCourse({ ...course, name: e.target.value }) } />
          <FormControl as="textarea" rows={3}
            value={course.description || ''}
            onChange={ (e) => setCourse({ ...course, description: e.target.value}) } />
        <hr />
        </>
      }
      <h2 id="wd-dashboard-published">
        {showAllCourses ? "Published " : "My "} Courses
        ({courses.length})
      </h2> <hr />

      <div id="wd-dashboard-courses">
        <Row className="g-4">

        {courses
          .map((course: Course) => (
          <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
            key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/Courses/${course._id}/Home`} className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <CardImg src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </CardText>
                    {studentView && isEnrolled(course._id) && <Button variant="danger"
                      onClick={(event) => {onUnEnrollCourse(event, course._id)}}> Unenroll
                    </Button>}
                    {studentView && !isEnrolled(course._id) && <Button variant="success"
                      onClick={(event) => {onEnrollCourse(event, course._id)}}> Enroll
                    </Button>}
                    {!studentView &&
                    <Button variant="primary"> Go
                    </Button>}
                    {!studentView &&
                      <>
                        <div id="wd-delete-course-click"
                          onClick={(event) => {onDeleteCourse(event, course._id)}}
                        className="btn btn-danger float-end me-2" >Delete
                        </div>
                        <div id="wd-edit-course-click"
                          onClick={(event) => {setThisCourse(event, course)}}
                          className="btn btn-warning me-2 float-end" >Edit
                        </div>
                      </>
                    }
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
);}
