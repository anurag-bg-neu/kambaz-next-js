import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function LessonControlButtons(
  { assignmentId, deleteAssignment }:
  {
    assignmentId: string;
    deleteAssignment: (moduleId: string) => void;
  } ) {
  return (
    <div className="float-end me-2">
      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentId)}/>
      <GreenCheckmark/>
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
