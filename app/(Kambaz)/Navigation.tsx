"use client";
import { AiOutlineDashboard } from "react-icons/ai";
import { GoBeaker } from "react-icons/go";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { RxQuestionMarkCircled } from "react-icons/rx";
import "./styles.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";


export default function KambazNavigation() {
  const pathname = usePathname();
  const links = [
    { label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard },
    { label: "Labs",      path: "/Labs",      icon: GoBeaker },
    { label: "Courses",   path: "/Dashboard", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Inbox",     icon: FaEnvelopeOpenText },
    { label: "History",   path: "/HistoryFolder",   icon: FaRegClock },
    { label: "Help",      path: "/Help",      icon: RxQuestionMarkCircled },
  ];
  return (
    <ListGroup
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 95 }}
      id="wd-kambaz-navigation">
      <ListGroupItem
        className="bg-black border-0"
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link">
        <Image
          src="/images/NEU_Red.png"
          width={70}
          height={70}
          alt="Northeastern University" />
      </ListGroupItem>

      <ListGroupItem as={Link} href="/Account"
        className={`my-hover-btn border-0 bg-black text-center
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser
          className={`fs-3 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </ListGroupItem>

      {links.map((link) => (
        <ListGroupItem key={`${link.path}-${link.label}`} as={Link} href={link.path}
          className={`my-hover-btn border-0 bg-black text-center
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
          {link.icon({ className: "fs-3 text-danger"})}
          <br />
          {link.label}
        </ListGroupItem>
      ))}

    </ListGroup>
  )};
