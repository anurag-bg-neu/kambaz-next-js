"use client";
import { AiOutlineDashboard } from "react-icons/ai";
import { GoBeaker } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { RxQuestionMarkCircled } from "react-icons/rx";
import "./styles.css";
import Link from "next/link";
export default function KambazNavigationToggle() {
  const links = [
    { label: "Account",          path: `/Account`,          id: "wd-account-link",      icon: FaRegCircleUser },
    { label: "Dashboard",        path: `/Dashboard`,        id: "wd-dashboard-link",    icon: AiOutlineDashboard },
    { label: "Labs",             path: `/Labs`,             id: "wd-labs-link",         icon: GoBeaker },
    { label: "Courses",          path: `/Dashboard`,        id: "wd-courses-link",      icon: LiaBookSolid },
    { label: "Calendar",         path: `/Calendar`,         id: "wd-calendar-link",     icon: IoCalendarOutline },
    { label: "Inbox",            path: `/Inbox`,            id: "wd-inbox-link",        icon: FaEnvelopeOpenText },
    { label: "HistoryFolder",    path: `/HistoryFolder`,    id: "wd-history-link",      icon: FaRegClock },
    { label: "Help",             path: `/Help`,             id: "wd-help-link",         icon: RxQuestionMarkCircled },
  ];
return (
  <ListGroup>
    {links.map((link) => (
      <Link key={link.id} href={`/${link.path}`} className="text-decoration-none">
        <ListGroupItem className="my-hover-btn border-0 text-center">
          <div className="align-kambaz-items d-flex gap-2">
            {link.icon({ className: "fs-2 text-danger"})}
            <div className="text-danger">{link.label}</div>
          </div>
        </ListGroupItem>
      </Link>
    ))}
  </ListGroup>
)};
