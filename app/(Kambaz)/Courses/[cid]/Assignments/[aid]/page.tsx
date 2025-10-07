"use client";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import "./styles.css";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <Form>
        <Row>
            <Form.Group className="mb-2">
                Assignment Name
                <Form.Control defaultValue="A1" placeholder="Assignment Name" />
            </Form.Group>

            <Form.Group className="mb-2">
            <Form.Control
                as="textarea"
                rows={8}
                defaultValue={`The assignment is available online
                Submit a link to the landing page of your Web application running on Vercel.
                The landing page should include:
                Your full name and section
                Links to each of the lab assignments
                Links to the Kambaz application
                Links to all relevant source code repositories
                The Kambaz application should include a link to navigate back to the landing page.`}
            />
            </Form.Group>
        </Row>


        <Row>
            <Col className="d-flex justify-content-end">Points</Col>
            <Col className="col-7">
                <Form.Group className="mb-2">
                <Form.Control defaultValue={100} type="number" placeholder="Points" />
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
                    <Form.Control type="date" placeholder="Due" />
                </Form.Group>

                <Row>
                    <Col>
                    <Form.Group className="mb-2">
                        <div><b>Available From</b></div>
                        <Form.Control type="date" placeholder="MM-DD-YYYY" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-2">
                        <div><b>Until</b></div>
                        <Form.Control type="date" placeholder="MM-DD-YYYY" />
                    </Form.Group>
                    </Col>
                </Row>
            </Col>
        </Row>
        <div className="d-flex justify-content-end mt-4">
            <Button variant="secondary" className="me-2">Cancel</Button>
            <Button variant="primary">Save</Button>
        </div>
      </Form>
    </div>
  );
}
