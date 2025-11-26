"use client";
import "./styles.css";
import Link from "next/link";
import * as client from "../../../client";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { RootState } from "../../../../store";
import { setAssignments } from "../reducer";

const defaultAssignment = {
  _id: "",
  title: "",
  course: "",
  description: "" ,
  points: "",
  dueDate: "",
  availableDate: "",
  untilDate: ""
}

type Assignment = {
  _id: string,
  title?: string,
  course?: string,
  description?: string,
  points?: string,
  dueDate?: string,
  availableDate?: string,
  untilDate?: string,
}

export default function AssignmentEditor() {
  const { cid } = useParams();
  const { aid } = useParams();
  const assignmentsPath = `/Courses/${cid}/Assignments`;
  const [ assignment, setAssignment ] = useState(defaultAssignment);

  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  const dispatch = useDispatch();

  const onCreateAssignmentForCourse = async () => {
    if (!cid) return;
    const courseId = Array.isArray(cid) ? cid[0] : cid;
    const newAssignmentData = await client.createAssignmentForCourse(courseId, assignment);
    dispatch(setAssignments([...assignments, newAssignmentData]));
  };

  const onUpdateAssignment = async (assignment: Assignment) => {
    await client.updateAssignment(assignment);
    const newAssignments = assignments.map((a: Assignment) => a._id === assignment._id ? assignment : a );
    dispatch(setAssignments(newAssignments));
  };

  const addOrUpdateAssignment = () => {
    const foundAssignment = assignment.title === "" ? false : true;
    if ( foundAssignment ) {
        onUpdateAssignment(assignment);
    } else {
        onCreateAssignmentForCourse();
    }
  }

  useEffect(() => {
    const foundAssignment = assignments.find((a: Assignment) => a._id == aid );
    if ( foundAssignment ) {
        setAssignment(foundAssignment);
    } else {
        setAssignment(defaultAssignment);
    }
  }, [aid, assignments, currentUser]);

  return (
    <div id="wd-assignments-editor">
      <Form>
        <Row>
            <Form.Group className="mb-2">
                Assignment Name
                <Form.Control defaultValue={assignment?.title || ""} placeholder="Assignment Name"
                onChange={ (e) => setAssignment({ ...assignment, title: e.target.value }) } />
            </Form.Group>

            <Form.Group className="mb-2">
            <Form.Control
                as="textarea"
                rows={8}
                defaultValue={assignment?.description || ""}
                onChange={ (e) => setAssignment({ ...assignment, description: e.target.value }) }
            />
            </Form.Group>
        </Row>

        <Row>
            <Col className="d-flex justify-content-end">Points</Col>
            <Col className="col-7">
                <Form.Group className="mb-2">
                <Form.Control defaultValue={assignment?.points} type="number" placeholder="Points"
                onChange={ (e) => setAssignment({ ...assignment, points: e.target.value }) } />
                </Form.Group>
            </Col>
        </Row>

        <Row>
            <Col className="d-flex justify-content-end">Assignment Group</Col>
            <Col className="col-7">
            <Form.Group className="mb-2">
            <Form.Select defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="ASSIGNMENTS1">ASSIGNMENTS 1</option>
                <option value="ASSIGNMENTS2">ASSIGNMENTS 2</option>
                <option value="ASSIGNMENTS3">ASSIGNMENTS 3</option>
            </Form.Select>
            </Form.Group>
            </Col>
        </Row>

        <Row>
            <Col className="d-flex justify-content-end">Display Grade as</Col>
            <Col className="col-7">
            <Form.Group className="mb-2">
            <Form.Select defaultValue="PERCENTAGE">
                <option value="ROMAN">Roman</option>
                <option value="NUMERIC">Numeric</option>
                <option value="PERCENTAGE">Percentage</option>
                <option value="ALPHANUMERIC">Alpha Numeric</option>
            </Form.Select>
            </Form.Group>
            </Col>
        </Row>

        <Form.Group className="mb-2">
            <Row>
                <Col className="d-flex justify-content-end">Submission Type</Col>
                <Col  className="flex-column flex-grow-1 border border-secondary p-3 col-2">
                <Form.Select defaultValue="ONLINE">
                    <option value="OFFLINE">Offline</option>
                    <option value="ONLINE">Online</option>
                </Form.Select>
                <Form.Group className="mb-2 p-3">
                <div className="mb-2"><b>Online Entry Options</b></div>
                <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
                <Form.Check type="checkbox" id="wd-website-url" label="Website URL" />
                <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
                <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
                <Form.Check type="checkbox" id="wd-file-upload" label="File Upload" />
                </Form.Group>
                </Col>
            </Row>
        </Form.Group>

        <Row className="d-flex">
            <Col className="d-flex justify-content-end">Assign</Col>
            <Col className="flex-column flex-grow-1 border border-secondary p-3 col-2">
                <Form.Group className="mb-2">
                    <div><b>Assign to</b></div>
                    <Form.Control type="search" placeholder="Everyone" defaultValue="Every One" />
                </Form.Group>

                <Form.Group className="mb-2">
                    <div><b>Due</b></div>
                    <Form.Control type="date" placeholder="Due" defaultValue={assignment?.dueDate}
                    onChange={ (e) => setAssignment({ ...assignment, dueDate: e.target.value }) } />
                </Form.Group>

                <Row>
                    <Col>
                    <Form.Group className="mb-2">
                        <div><b>Available From</b></div>
                        <Form.Control type="date" placeholder="MM-DD-YYYY" defaultValue={assignment?.availableDate}
                        onChange={ (e) => setAssignment({ ...assignment, availableDate: e.target.value }) } />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-2">
                        <div><b>Until</b></div>
                        <Form.Control type="date" placeholder="MM-DD-YYYY" defaultValue={assignment?.untilDate}
                        onChange={ (e) => setAssignment({ ...assignment, untilDate: e.target.value }) } />
                    </Form.Group>
                    </Col>
                </Row>
            </Col>
        </Row>
        <div className="d-flex justify-content-end mt-4">
            <Link href={assignmentsPath} passHref>
                <Button variant="secondary" className="me-2"
                onClick={() => setAssignment(defaultAssignment) } >Cancel</Button>
            </Link>
            <Link href={assignmentsPath} passHref>
                <Button variant="primary" onClick={() => {addOrUpdateAssignment()} } >Save</Button>
            </Link>
        </div>
      </Form>
    </div>
  );}
