import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { Button } from "react-bootstrap";
import { TbArrowLeftFromArc } from "react-icons/tb";
import { VscTarget } from "react-icons/vsc";
import { TiChartBar } from "react-icons/ti";
import { TfiAnnouncement } from "react-icons/tfi";
import { FaRegBell } from "react-icons/fa6";


export default function CourseStatus() {
 return (
   <div id="wd-course-status" style={{ width: "350px" }}>
     <h2>Course Status</h2>
     <div className="d-flex">
       <div className="w-50 pe-1">
         <Button variant="secondary" size="lg" className="w-100 text-nowrap ">
           <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </Button> </div>
       <div className="w-50">
         <Button variant="success" size="lg" className="w-100">
           <FaCheckCircle className="me-2 fs-5" /> Publish </Button> </div>
     </div>
     <br />
     <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <BiImport className="me-2 fs-5" /> Import Existing Content
     </Button>
     <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <TbArrowLeftFromArc className="me-2 fs-5" /> Import From Commons
     </Button>
     <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <VscTarget className="me-2 fs-5" /> Choose Home Page
     </Button>
     <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <TiChartBar className="me-2 fs-5" /> View Course Screen
     </Button>
     <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <TfiAnnouncement className="me-2 fs-5" /> New Announcement
     </Button>
     <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <TiChartBar className="me-2 fs-5" /> New Analytics
     </Button>
     <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <FaRegBell className="me-2 fs-5" /> View Course Notification
     </Button>
   </div>
);}