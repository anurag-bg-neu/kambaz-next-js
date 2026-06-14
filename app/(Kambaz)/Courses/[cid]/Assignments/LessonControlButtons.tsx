import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import LessonDeleteConfirm from "./LessonDeleteConfirm";
import { useState } from "react";

export default function LessonControlButtons(
  { deleteAssignment }:
  { deleteAssignment: () => void;
  }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="float-end me-2">
      <FaTrash className="text-danger me-2 mb-1" onClick={handleShow}/>
      <GreenCheckmark/>
      <IoEllipsisVertical className="fs-4" />
      <LessonDeleteConfirm show={show} handleClose={handleClose}
      dialogTitle="Delete Assignment" deleteAssignment={deleteAssignment} />
    </div>
);}
