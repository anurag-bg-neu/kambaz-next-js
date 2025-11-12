import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { redirect } from "next/dist/client/components/navigation";
import { v4 as uuidv4 } from "uuid";
import { setAssignment } from "./reducer";

export default function AssignmentControls({ cid }: {cid: string}) {
  const { assignment } = useSelector((state: RootState) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const newAssignment = () => {
    const newAssignmentId = uuidv4();
    const newAssignment = { ...assignment, _id: newAssignmentId, course: cid };
    dispatch(setAssignment(newAssignment));

    redirect(`/Courses/${cid}/Assignments/${newAssignmentId}`);
  }

 return (
   <div id="wd-modules-controls" className="d-flex justify-content-between align-items-center flex-wrap">
      <Form.Control
        type="text"
        placeholder="Search for Assignments"
        id="wd-search-assignment"
        className="me-2"
        style={{ maxWidth: "700px", minHeight: "47px" }}
      />
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
   </div>
);}
