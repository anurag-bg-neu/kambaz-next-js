"use client";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { useParams } from "next/navigation";
import Link from "next/link";
import * as db from "../../../../Database";
import "./styles.css";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find(
    (a) => a._id === aid && a.course === cid
  );
  const assignmentsPath = `/Courses/${cid}/Assignments`;

  return (
    <div id="wd-assignments-editor">
      <Form>
        <Row>
            <Form.Group className="mb-2">
                Assignment Name
                <Form.Control defaultValue={assignment?.title || ""} placeholder="Assignment Name" />
            </Form.Group>

            <Form.Group className="mb-2">
            <Form.Control
                as="textarea"
                rows={8}
                defaultValue={assignment?.description || ""}
            />
            </Form.Group>
        </Row>

        <Row>
            <Col className="d-flex justify-content-end">Points</Col>
            <Col className="col-7">
                <Form.Group className="mb-2">
                <Form.Control defaultValue={assignment?.points} type="number" placeholder="Points" />
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
                    <Form.Control type="date" placeholder="Due" defaultValue={assignment?.dueDate}/>
                </Form.Group>

                <Row>
                    <Col>
                    <Form.Group className="mb-2">
                        <div><b>Available From</b></div>
                        <Form.Control type="date" placeholder="MM-DD-YYYY" defaultValue={assignment?.availableDate}/>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-2">
                        <div><b>Until</b></div>
                        <Form.Control type="date" placeholder="MM-DD-YYYY" defaultValue={assignment?.untilDate}/>
                    </Form.Group>
                    </Col>
                </Row>
            </Col>
        </Row>
        <div className="d-flex justify-content-end mt-4">
            <Link href={assignmentsPath} passHref>
                <Button variant="secondary" className="me-2">Cancel</Button>
            </Link>
            <Link href={assignmentsPath} passHref>
                <Button variant="primary">Save</Button>
            </Link>
        </div>
      </Form>
    </div>
  );}
