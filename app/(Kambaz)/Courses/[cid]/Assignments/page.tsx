import Link from "next/link";
import { ListGroup, ListGroupItem } from "reactstrap";
import ModulesControls from './ModulesControls';
import ModuleControlButtons from './ModuleControlButtons';
import LessonControlButtons from './LessonControlButtons';
import { BsGripVertical } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";


export default function Assignments() {
  return (
    <div id="wd-assignments">
      <br />
      <ModulesControls /><br /><br />
      <ListGroup className="rounded-0" id="wd-modules">
      <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary d-flex">
          <BsGripVertical className="me-2 fs-3" />
          <span className="dropdown-toggle me-2"></span>
          ASSIGNMENTS
          <ModuleControlButtons />
        </div>
        <ListGroup className="wd-lessons rounded-0">
          <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link text-decoration-none text-dark">
              <div className="d-flex align-items-center">
                <LuNotebookPen className="me-3 fs-4" style={{ color: "#5c8d53ff" }}/>
                <div>
                <b>A1</b>
                <div className="wd-assignments-desc"><span style={{color: "red"}}>Multiple Modules</span> | <b>Not Available until</b> May 6 at 12:00am |</div>
                <div className="wd-assignments-desc"><b>Due</b> May 13 at 11:59pm | -/100 pts</div>
                </div>
              </div>
             </Link>
            <div className="ms-auto">
            <LessonControlButtons/>
            </div>
          </ListGroupItem>
          <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link text-decoration-none text-dark">
              <div className="d-flex align-items-center">
                <LuNotebookPen className="me-3 fs-4" style={{ color: "#5c8d53ff" }}/>
                <div>
                <b>A2</b>
                <div className="wd-assignments-desc"><span style={{color: "red"}}>Multiple Modules</span> | <b>Not Available until</b> May 13 at 12:00am |</div>
                <div className="wd-assignments-desc"><b>Due</b> May 20 at 11:59pm | -/100 pts</div>
                </div>
              </div>
            </Link>
            <div className="ms-auto">
            <LessonControlButtons/>
            </div>
          </ListGroupItem>
          <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link text-decoration-none text-dark">
              <div className="d-flex align-items-center">
                <LuNotebookPen className="me-3 fs-4" style={{ color: "#5c8d53ff" }}/>
                <div>
                <b>A3</b>
                <div className="wd-assignments-desc"><span style={{color: "red"}}>Multiple Modules</span> | <b>Not Available until</b> May 20 at 12:00am |</div>
                <div className="wd-assignments-desc"><b>Due</b> May 27 at 11:59pm | -/80 pts</div>
                </div>
              </div>
            </Link>
            <div className="ms-auto">
            <LessonControlButtons/>
            </div>
          </ListGroupItem>
          <ListGroupItem className="wd-lesson p-3 ps-1 d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link text-decoration-none text-dark">
              <div className="d-flex align-items-center">
                <LuNotebookPen className="me-3 fs-4" style={{ color: "#5c8d53ff" }}/>
                <div>
                <b>Q1</b>
                <div className="wd-assignments-desc"><b>Not Available until</b> May 25 at 12:00am | </div>
                <div className="wd-assignments-desc"><b>Due</b> Sep 29 at 11:59pm | -/29 pts</div>
                </div>
              </div>
            </Link>
            <div className="ms-auto">
            <LessonControlButtons/>
            </div>
          </ListGroupItem>
        </ListGroup>
      </ListGroupItem>
      </ListGroup>
    </div>
);}
