import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import LessonDeleteConfirm from "./LessonDeleteConfirm";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RootState } from "../../../store";

export default function LessonControlButtons(
  { deleteAssignment }:
  { deleteAssignment: () => void;
  }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const [studentView, setstudentView] =  useState(true);

  useEffect(() => {
    if ( !currentUser ) {
      return;
    }
    if ( currentUser.role === "FACULTY" || currentUser.role === "ADMIN") {
        setstudentView(false);
    } else {
        setstudentView(true);
    }
  }, [currentUser]);

  return (
    <div className="float-end me-2">
      {!studentView &&
        <FaTrash className="text-danger me-2 mb-1" onClick={handleShow}/>
      }
      <GreenCheckmark/>
      <IoEllipsisVertical className="fs-4" />
      <LessonDeleteConfirm show={show} handleClose={handleClose}
      dialogTitle="Delete Assignment" deleteAssignment={deleteAssignment} />
    </div>
);}
