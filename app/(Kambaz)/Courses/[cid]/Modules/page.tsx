import ModulesControls from './ModulesControls';
import ModuleControlButtons from './ModuleControlButtons';
import LessonControlButtons from './LessonControlButtons';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
  return (
  <div id="module-below-toggle">
    <ModulesControls /><br /><br /><br /><br />
    <ListGroup className="rounded-0" id="wd-modules" style={{minWidth: "500px"}}>
      <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons />
        </div>
        <ListGroup className="wd-lessons rounded-0">
          <ListGroupItem className="wd-lesson p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
          </ListGroupItem>
          <ListGroupItem className="wd-lesson p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
          </ListGroupItem>
          <ListGroupItem className="wd-lesson p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development <LessonControlButtons />
          </ListGroupItem>
          <ListGroupItem className="wd-lesson p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" /> LESSON 1 <LessonControlButtons />
          </ListGroupItem>
          <ListGroupItem className="wd-lesson p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" /> LESSON 2 <LessonControlButtons />
          </ListGroupItem>
        </ListGroup>
      </ListGroupItem>
      <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" /> Week 2 <ModuleControlButtons />
        </div>
        <ListGroup className="wd-lessons rounded-0">
          <ListGroupItem className="wd-lesson p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
          </ListGroupItem>
          <ListGroupItem className="wd-lesson p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" /> LESSON 1 <LessonControlButtons />
          </ListGroupItem>
          <ListGroupItem className="wd-lesson p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" /> LESSON 2 <LessonControlButtons />
          </ListGroupItem>
        </ListGroup>
      </ListGroupItem>
    </ListGroup>
  </div>

);}
