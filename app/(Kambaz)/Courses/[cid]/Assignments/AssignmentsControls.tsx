import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { redirect } from "next/dist/client/components/navigation";
import { setAssignments } from "./reducer";
import * as client from "../../client";
import { useEffect, useState } from "react";

export default function AssignmentControls({ cid }: {cid: string} ) {
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const [studentView, setstudentView] =  useState(true);

  const dispatch = useDispatch();

  const newAssignment = async () => {
    const newAssignmentData = await client.createAssignmentForCourse(cid, {});
    dispatch(setAssignments([...assignments, newAssignmentData]));
    redirect(`/Courses/${cid}/Assignments/${newAssignmentData._id}`);
  }

  useEffect(() => {
    if ( currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN") {
        setstudentView(false);
    } else {
        setstudentView(true);
    }
  }, [currentUser]);

 return (
   <div id="wd-modules-controls" className="d-flex justify-content-between align-items-center flex-wrap">
      <Form.Control
        type="text"
        placeholder="Search for Assignments"
        id="wd-search-assignment"
        className="me-2"
        style={{ maxWidth: "700px", minHeight: "47px" }}
      />

      {!studentView &&
        <div className="d-flex align-items-center">
          <Button variant="secondary" size="lg" className="me-2 d-flex align-items-center">
            <IoAdd size={24} className="me-1" />
            Group
          </Button>

          <Button variant="danger" size="lg" className="d-flex align-items-center"
            onClick={newAssignment} >
            <FaPlus className="me-2" />
            Assignment
          </Button>
        </div>
      }
   </div>
);}
