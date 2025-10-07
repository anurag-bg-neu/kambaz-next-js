import { AiOutlineDashboard } from "react-icons/ai";
import { GoBeaker } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { RxQuestionMarkCircled } from "react-icons/rx";


import Link from "next/link";
import Image from "next/image";
export default function KambazNavigation() {
 return (
   <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{ width: 95 }} id="wd-kambaz-navigation">
     <ListGroupItem className="bg-black border-0" as="a" target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
       <Image src="/images/NEU_Red.png" width={70} height={70} alt="Northeastern University" />
     </ListGroupItem>
     <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/Account" id="wd-account-link" className="text-white text-decoration-none">
         <FaRegCircleUser className="fs-3 text-white" />
         Account
       </Link>
     </ListGroupItem>
     <ListGroupItem className="border-0 bg-white text-center">
       <Link href="/Dashboard" id="wd-dashboard-link" className="text-danger text-decoration-none">
         <AiOutlineDashboard className="fs-3 text-danger" />
         Dashboard
       </Link>
     </ListGroupItem>
      <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/Labs" id="wd-dashboard-link" className="text-danger text-decoration-none">
         <GoBeaker className="fs-3 text" /><br />
         Labs
       </Link>
      </ListGroupItem>
     <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/Dashboard" id="wd-dashboard-link" className="text-danger text-decoration-none">
         <LiaBookSolid className="fs-3 text" />
         Courses
       </Link>
      </ListGroupItem>
     <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/Calendar" id="wd-dashboard-link" className="text-danger text-decoration-none">
         <IoCalendarOutline className="fs-3 text" />
         Calendar
       </Link>
      </ListGroupItem>
     <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/Inbox" id="wd-dashboard-link" className="text-danger text-decoration-none">
         <FaEnvelopeOpenText className="fs-3 text" />
         Inbox
       </Link>
      </ListGroupItem>
     <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/Account" id="wd-dashboard-link" className="text-danger text-decoration-none">
         <FaRegClock className="fs-3 text" />
         History
       </Link>
      </ListGroupItem>
     <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/Account" id="wd-dashboard-link" className="text-danger text-decoration-none">
        <svg
          viewBox="0 0 64 64"
          width="24"
          height="24">
          <path
            d="M37.5331419,41.3325083 L25.3997411,41.3325083 L25.3997411,52.8756632 C27.5972597,53.6451225 29.1733531,55.7378472 29.1733531,58.198822 C29.1733531,61.3127847 26.6499049,63.8371501 23.5370738,63.8371501 C20.4242427,63.8371501 17.9007945,61.3127847 17.9007945,58.198822 C17.9007945,55.7378472 19.4768879,53.6451225 21.6744065,52.8756632 L21.6744065,41.3325083 L17.5706263,41.3325083 L17.5717453,47.9192726 C17.5717453,50.4825483 15.4945548,52.5604939 12.9322104,52.5604939 L10.9667199,52.5588751 C10.2051449,54.7710384 8.10625368,56.3604121 5.63627929,56.3604121 C2.52344819,56.3604121 0,53.8360466 0,50.722084 C0,47.6081214 2.52344819,45.0837559 5.63627929,45.0837559 C8.08603407,45.0837559 10.1707563,46.6472143 10.9477485,48.8310912 L12.9905507,48.8310912 C13.4625615,48.8310912 13.8452018,48.4483118 13.8452018,47.9761294 L13.8452018,41.3325083 L5.65400042,41.3325083 C4.57511859,41.3325083 3.70051205,40.4575839 3.70051205,39.3783099 L3.70051205,1.95419847 C3.70051205,0.874924458 4.57511859,0 5.65400042,0 L57.2376164,0 C58.3164983,0 59.1911048,0.874924458 59.1911048,1.95419847 L59.1911048,39.3783099 C59.1911048,40.4575839 58.3164983,41.3325083 57.2376164,41.3325083 L49.085452,41.3325083 L49.085452,47.9761294 C49.085452,48.4483118 49.4680923,48.8310912 49.9401031,48.8310912 L51.9829054,48.8310912 C52.7598976,46.6472143 54.8446197,45.0837559 57.2943745,45.0837559 C60.4072056,45.0837559 62.9306538,47.6081214 62.9306538,50.722084 C62.9306538,53.8360466 60.4072056,56.3604121 57.2943745,56.3604121 C54.8244001,56.3604121 52.725509,54.7710384 51.9639339,52.5588751 L49.9996524,52.5604938 C47.436099,52.5604939 45.3589085,50.4825483 45.3589085,47.9192726 L45.3600275,41.3325083 L41.2584765,41.3325083 L41.2584765,52.8756632 C43.4559951,53.6451225 45.0320885,55.7378472 45.0320885,58.198822 C45.0320885,61.3127847 42.5086403,63.8371501 39.3958092,63.8371501 C36.2829781,63.8371501 33.7595299,61.3127847 33.7595299,58.198822 C33.7595299,55.7378472 35.3356233,53.6451225 37.5331419,52.8756632 L37.5331419,41.3325083 Z"
            fill="currentColor"
          />
        </svg>
         Studio
       </Link>
      </ListGroupItem>
     <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/Dashboard" id="wd-dashboard-link" className="text-danger text-decoration-none">
         <RxQuestionMarkCircled className="fs-3 text" /><br />
         Help
       </Link>
      </ListGroupItem>
   </ListGroup>
);}
