import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import { Form } from "react-bootstrap";

export default function ModulesControls() {
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

        <Button variant="danger" size="lg" className="d-flex align-items-center">
          <FaPlus className="me-2" />
          Assignment
        </Button>
      </div>
   </div>
);}
