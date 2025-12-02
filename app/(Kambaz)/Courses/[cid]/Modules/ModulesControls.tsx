import { useState, useEffect } from "react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from './GreenCheckmark';
import { MdDoNotDisturbAlt } from "react-icons/md";
import ModuleEditor from "./ModuleEditor";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function ModulesControls(
  { moduleName, setModuleName, addModule }:
  { moduleName: string; setModuleName: (title: string) => void; addModule: () => void; }) {
    const [ show, setShow ] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const [ studentView, setstudentView ] =  useState(true);

    useEffect(() => {
      if ( currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN") {
          setstudentView(false);
      } else {
          setstudentView(true);
      }
    }, [currentUser]);

 return (
   <div id="wd-modules-controls" className="text-nowrap">
    {!studentView &&
    <>
     <Button variant="danger" size="lg" className="float-end" id="wd-add-module-btn" onClick={handleShow} >
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Module
     </Button>
     <Dropdown className="float-end me-1">
       <DropdownToggle variant="secondary" size="lg" id="wd-publish-all-btn">
         <GreenCheckmark /> Publish All
       </DropdownToggle>
       <DropdownMenu>
         <DropdownItem id="wd-publish-all">
           <GreenCheckmark /> Publish All
         </DropdownItem>
         <DropdownItem id="wd-publish-all-modules-and-items">
           <GreenCheckmark /> Publish all modules and items
         </DropdownItem>
         <DropdownItem id="wd-publish-modules-only">
           <GreenCheckmark /> Publish modules only
         </DropdownItem>
         <DropdownItem id="wd-unpublish-all-modules-and-items">
           <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish all modules and items
         </DropdownItem>
         <DropdownItem id="wd-unpublish-modules-only">
           <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish modules only
         </DropdownItem>
       </DropdownMenu>
     </Dropdown>
     </>
    }
     <Button variant="secondary" size="lg" className="float-end me-1" id="wd-view-progress">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       View Progress
     </Button>
     <Button variant="secondary" size="lg" className="float-end me-1" id="wd-collapse-all">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Collapse All
     </Button><br/>
     <ModuleEditor show={show} handleClose={handleClose} dialogTitle="Add Module"
       moduleName={moduleName} setModuleName={setModuleName} addModule={addModule} />
   </div>
);}
