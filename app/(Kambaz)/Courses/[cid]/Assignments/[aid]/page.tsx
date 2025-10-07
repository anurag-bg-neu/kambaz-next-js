"use client";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" style={{ maxWidth: "700px", margin: "auto" }}>
      <Form>
        <Form.Group className="mb-2">
            <h6>Assignment Name</h6>
            <Form.Control defaultValue="A1" placeholder="Assignment Name" />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Control
            as="textarea"
            rows={5}
            defaultValue={`The assignment is available online Submit a link to the landing page of
            your Web application running on Vercel. The landing page should include:
            Your full name and section
            Links to each of the lab assignments
            Links to the Kambaz application
            Links to all relevant source code repositories
            The Kambaz application should include a link to navigate back to the landing page.`}
          />
        </Form.Group>

        <Form.Group className="mb-2">
            <div className="d-flex align-items-center gap-3">
            <h6>Points</h6>
            <Form.Control defaultValue={100} type="number" placeholder="Points" />
            </div>
        </Form.Group>

        <Form.Group className="mb-2">
            <div className="d-flex align-items-center gap-3">
            <div style={{width: "200px"}}>Assignment Group</div>
            <Form.Select defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="ASSIGNMENTS1">ASSIGNMENTS 1</option>
                <option value="ASSIGNMENTS2">ASSIGNMENTS 2</option>
                <option value="ASSIGNMENTS3">ASSIGNMENTS 3</option>
            </Form.Select>
            </div>
        </Form.Group>

        <Form.Group className="mb-2">
            <div className="d-flex align-items-center gap-3">
            <div style={{width: "200px"}}>Display Grade as</div>
          <Form.Select defaultValue="PERCENTAGE">
            <option value="ROMAN">Roman</option>
            <option value="NUMERIC">Numeric</option>
            <option value="PERCENTAGE">Percentage</option>
            <option value="ALPHANUMERIC">Alpha Numeric</option>
          </Form.Select>
            </div>
        </Form.Group>

        <Form.Group className="mb-2">
            <div className="d-flex align-items-center gap-3">
            <div style={{width: "200px"}}>Submission Type</div>
          <Form.Select defaultValue="ONLINE">
            <option value="OFFLINE">Offline</option>
            <option value="ONLINE">Online</option>
          </Form.Select>
          <Form.Group className="mb-2">
          <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
          <Form.Check type="checkbox" id="wd-website-url" label="Website URL" />
          <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
          <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
          <Form.Check type="checkbox" id="wd-file-upload" label="File Upload" />
        </Form.Group>
            </div>
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Control type="search" placeholder="Everyone" defaultValue="Every One" />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Control type="date" defaultValue="2024-05-13" placeholder="Due" />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Control type="date" defaultValue="2024-05-06" placeholder="Available From" />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Control type="date" defaultValue="2024-05-20" placeholder="Available Until" />
        </Form.Group>

        <div className="d-flex justify-content-start mt-4">
          <Button variant="secondary" className="me-2">Cancel</Button>
          <Button variant="primary">Save</Button>
        </div>
      </Form>
    </div>
  );
}
