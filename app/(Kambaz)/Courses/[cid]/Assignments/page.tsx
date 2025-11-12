"use client";
import Link from "next/link";
import { ListGroup, ListGroupItem } from "reactstrap";
import AssignmentControls from './AssignmentsControls';
import AssignmentControlButtons from './AssignmentControlButtons';
import LessonControlButtons from './LessonControlButtons';
import { BsGripVertical } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import { useParams } from "next/navigation";
import { deleteAssignment, setAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";

type defaultAssignment = {
  _id: string,
  title: string,
  course: string,
  description: string,
  points: number,
  dueDate: string,
  availableDate: string,
  untilDate: string
}

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);

  const dispatch = useDispatch();

  const deleteThisAssignment = (assignment: defaultAssignment) => {
    dispatch(setAssignment(assignment));
    dispatch(deleteAssignment(assignment._id));
  }

  return (
    <div id="wd-assignments">
      <br />
      <AssignmentControls cid={cid as string} /><br /><br />
      <ListGroup className="rounded-0" id="wd-assignments" style={{minWidth: "672px"}}>
      <ListGroupItem className="wd-assignment p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary d-flex">
          <BsGripVertical className="me-2 fs-3" />
          <span className="dropdown-toggle me-2"></span>
          ASSIGNMENTS
          <AssignmentControlButtons />
        </div>
        <ListGroup className="wd-lessons rounded-0">
        {assignments
          .filter((assignment) => assignment.course === cid)
          .map((assignment) => (
          <ListGroupItem
          key={assignment._id}
          className="wd-lesson p-3 ps-1 d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            <Link href={`/Courses/${cid}/Assignments/${assignment._id}`}
              className="wd-assignment-link text-decoration-none text-dark"
              onClick={() => dispatch(setAssignment(assignment))}>
              <div className="d-flex align-items-center">
                <LuNotebookPen className="me-3 fs-4" style={{ color: "#5c8d53ff" }}/>
                <div>
                <b>{assignment.title}</b>
                <div className="wd-assignments-desc"><span style={{color: "red"}}>Multiple Modules</span> | <b>Available</b>{" on "} {new Date(assignment.availableDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })} |
                </div>
                <div className="wd-assignments-desc"><b>Due</b> {new Date(assignment.dueDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })} | -/{assignment.points} pts</div>
                </div>
              </div>
             </Link>
            <div className="ms-auto">
            <LessonControlButtons deleteAssignment={() => deleteThisAssignment(assignment)} />
            </div>
          </ListGroupItem>
          ))}
        </ListGroup>
      </ListGroupItem>
      </ListGroup>
    </div>
);}
