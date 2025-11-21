"use client";
import Link from "next/link";
import { ListGroup, ListGroupItem } from "reactstrap";
import AssignmentControls from './AssignmentsControls';
import AssignmentControlButtons from './AssignmentControlButtons';
import LessonControlButtons from './LessonControlButtons';
import { BsGripVertical } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import { useParams } from "next/navigation";
import { setAssignments } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { useEffect, useCallback } from "react";
import * as client from "../../client";

type Assignment = {
  _id: string,
  title?: string,
  course?: string,
  description?: string,
  points?: number,
  dueDate: Date,
  availableDate: Date,
  untilDate: Date,
}

export default function Assignments() {
  const { cid } = useParams();

  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const onRemoveAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(setAssignments(assignments.filter((a: Assignment) => a._id !== assignmentId)));
  }

  const fetchAssignments = useCallback(async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  }, [cid, dispatch]);

  useEffect(() => {
    if(!cid) return;
    fetchAssignments();
  }, [cid, fetchAssignments]);

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
            .filter((assignment: Assignment) => assignment.course === cid)
            .map((assignment: Assignment) => (
            <ListGroupItem
            key={assignment._id}
            className="wd-assignment p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <Link href={`/Courses/${cid}/Assignments/${assignment._id}`}
                className="wd-assignment-link text-decoration-none text-dark" >
                <div className="d-flex align-items-center">
                  <LuNotebookPen className="me-3 fs-4" style={{ color: "#5c8d53ff" }}/>
                  <div>
                  <b>{assignment.title}</b>
                  <div className="wd-assignments-desc"><span style={{color: "red"}}>Multiple Modules</span> | <b>Available</b>{" on "}
                  {new Date(assignment.availableDate).toLocaleDateString("en-US", {
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
              <LessonControlButtons deleteAssignment={() => onRemoveAssignment(assignment._id)} />
              </div>
            </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
);}
