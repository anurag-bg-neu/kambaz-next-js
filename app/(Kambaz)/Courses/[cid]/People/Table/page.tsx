"use client";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "../Details";
import Link from "next/link";
import { useState } from "react";
import "../../styles.css";

type User = {
  _id: string,
  username?: string,
  password?: string,
  firstName?: string,
  lastName?: string,
  email?: string,
  dob?: string,
  role?: string,
  loginId?: string,
  section?: string,
  lastActivity?: string,
  totalActivity?: string
}

export default function PeopleTable(
  { users = [], fetchUsers }:
  { users?: User[]; fetchUsers: () => void; }) {
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);

 return (
  <div id="wd-people-table">
    {showDetails && (
       <PeopleDetails
         uid={showUserId}
         onClose={() => {
           setShowDetails(false);
           fetchUsers();
         }}/>
     )}
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
    {users
    .map((user : User) => (
     <tr key={user._id}>
      <td className="wd-full-name text-nowrap">
        <span className="text-decoration-none"
                 onClick={() => {
                   setShowDetails(true);
                   setShowUserId(user._id);
                 }} >
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">{user.firstName}</span>{" "}
          <span className="wd-last-name">{user.lastName}</span>
          </span>
      </td>
      <td className="wd-login-id">{user.loginId}</td>
      <td className="wd-section">{user.section}</td>
      <td className="wd-role">{user.role}</td>
      <td className="wd-last-activity">{user.lastActivity}</td>
      <td className="wd-total-activity">{user.totalActivity}</td>
      </tr>
    ))}
    </tbody>
   </Table>
  </div>
);}
